import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedInvestor, setSelectedInvestor] = useState("");

  useEffect(() => {
    // Set dropdown value based on the current URL path
    const pathToInvestorMap = {
      "/foreign-investor": "foreign",
      "/nri-investor": "nri",
      "/startup-founder-entrepreneur": "startup",
    };
    setSelectedInvestor(pathToInvestorMap[location.pathname]);
  }, [location.pathname]);

  const handleInvestorChange = (e) => {
    const value = e.target.value;
    const investorToPathMap = {
      foreign: "foreign-investor",
      nri: "/nri-investor",
      startup: "/startup-founder-entrepreneur",
    };
    setSelectedInvestor(value);
    navigate(investorToPathMap[value]);
  };

  return (
    <div className="topbar-section">
      <div className="container">
        <div className="select-div ">
          <h6>I am a: </h6>
          <select
            class="form-select"
            value={selectedInvestor || "foreign"}
            onChange={handleInvestorChange}
          >
            <option value="fireign" selected>
              Foreign Investor
            </option>
            <option value="nri">NRI Investor</option>
            <option value="startup">Startup Founder & Entrepreneur</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
