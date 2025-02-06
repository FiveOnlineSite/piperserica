import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedInvestor, setSelectedInvestor] = useState("");

  // This function updates the state and localStorage whenever the path changes
  const updateSelectedInvestor = (currentPath) => {
    const pathToInvestorMap = {
      "/foreign-investor": "foreign",
      "/nri-investor": "nri",
      "/startup-founder-entrepreneur": "startup",
    };

    const currentInvestor = pathToInvestorMap[currentPath];
    if (currentInvestor) {
      localStorage.setItem("selectedInvestor", currentInvestor); // Update localStorage
      setSelectedInvestor(currentInvestor); // Update local state
    }
  };

  // Handle initial state when the component is mounted or path changes
  useEffect(() => {
    // Check if there's already a value in localStorage
    const storedInvestor = localStorage.getItem("selectedInvestor");

    if (storedInvestor) {
      setSelectedInvestor(storedInvestor);
    } else {
      updateSelectedInvestor(location.pathname); // Set based on current pathname
    }
  }, []); // This ensures this runs only once on mount

  // Re-run logic when the pathname changes (URL changes)
  useEffect(() => {
    updateSelectedInvestor(location.pathname);
  }, [location.pathname]);

  const handleInvestorChange = (e) => {
    const value = e.target.value;
    const investorToPathMap = {
      foreign: "/foreign-investor",
      nri: "/nri-investor",
      startup: "/startup-founder-entrepreneur",
    };

    setSelectedInvestor(value); // Update state
    localStorage.setItem("selectedInvestor", value); // Update localStorage
    navigate(investorToPathMap[value]); // Navigate to the appropriate path
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
