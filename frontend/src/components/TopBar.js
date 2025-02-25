import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ closeOffcanvas }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedInvestor, setSelectedInvestor] = useState("");
  const [prevInvestor, setPrevInvestor] = useState(""); // Track previous value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown open state

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
      setPrevInvestor(storedInvestor); // Save the initial value as previous value
    }

    const currentInvestor = pathToInvestorMap[location.pathname];
    if (currentInvestor) {
      setSelectedInvestor(currentInvestor);
      setPrevInvestor(currentInvestor);
      localStorage.setItem("selectedInvestor", currentInvestor);
    }
  }, [location.pathname]);

  const handleInvestorChange = (e) => {
    const newSelection = e.target.value;
    setSelectedInvestor(newSelection);
    setPrevInvestor(newSelection); // Update previous value
    localStorage.setItem("selectedInvestor", newSelection);
    navigate(investorToPathMap[newSelection], { replace: true });

    if (typeof closeOffcanvas === "function") {
      closeOffcanvas();
    }

    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownOpen(false);
    // Restore previous value if user does not select anything
    setSelectedInvestor(prevInvestor);
    localStorage.setItem("selectedInvestor", prevInvestor);
  };

  return (
    <div className="topbar-section">
      <div className="container">
        <div className="select-div">
          <h6>I am a: </h6>
          <select
            className="form-select"
            value={isDropdownOpen ? "" : selectedInvestor} // Show empty when dropdown opens
            onChange={handleInvestorChange}
            onFocus={handleDropdownFocus} // Track when dropdown opens
            onBlur={handleDropdownBlur} // Restore if not selected
          >
            <option value="" disabled>
              Select an option
            </option>
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
