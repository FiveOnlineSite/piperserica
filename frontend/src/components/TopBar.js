import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ closeOffcanvas }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedInvestor, setSelectedInvestor] = useState("");

  const pathToInvestorMap = {
    "/foreign-investor": "foreign",
    "/nri-investor": "nri",
    "/startup-founder-entrepreneur": "startup",
  };

  const investorToPathMap = {
    foreign: "/foreign-investor",
    nri: "/nri-investor",
    startup: "/startup-founder-entrepreneur",
  };

  useEffect(() => {
    const storedInvestor = localStorage.getItem("selectedInvestor");
    if (storedInvestor) {
      setSelectedInvestor(storedInvestor);
    }

    const currentInvestor = pathToInvestorMap[location.pathname];
    if (currentInvestor) {
      setSelectedInvestor(currentInvestor);
      localStorage.setItem("selectedInvestor", currentInvestor);
    }
  }, [location.pathname]);

  const handleInvestorChange = (e) => {
    const newSelection = e.target.value;

    // Always navigate to the selected option's page
    setSelectedInvestor(newSelection);
    localStorage.setItem("selectedInvestor", newSelection);
    navigate(investorToPathMap[newSelection], { replace: true });

    if (typeof closeOffcanvas === "function") {
      closeOffcanvas();
    }
  };

  const handleDropdownClick = (e) => {
    const newSelection = e.target.value;

    // Check if the same option is clicked again
    if (newSelection === selectedInvestor) {
      navigate(investorToPathMap[newSelection], { replace: true });
      if (typeof closeOffcanvas === "function") {
        closeOffcanvas();
      }
    }
  };

  return (
    <div className="topbar-section">
      <div className="container">
        <div className="select-div">
          <h6>I am a: </h6>
          <select
            className="form-select"
            value={selectedInvestor || ""}
            onChange={handleInvestorChange}
            onMouseDown={(e) => {
              // Prevent navigation when opening dropdown
              e.stopPropagation();
            }}
            onClick={handleDropdownClick} // Add this line
          >
            <option value="foreign">Foreign Investor</option>
            <option value="nri">NRI Investor</option>
            <option value="startup">Startup Founder & Entrepreneur</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
