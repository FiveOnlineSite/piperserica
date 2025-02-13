import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedInvestor, setSelectedInvestor] = useState("");

  const pathToInvestorMap = {
    "/foreign-investor": "foreign",
    "/nri-investor": "nri",
    "/startup-founder-entrepreneur": "startup",
  };

  // This function sets selectedInvestor based on the current pathname
  const updateSelectedInvestor = (currentPath) => {
    const currentInvestor = Object.keys(pathToInvestorMap).find(
      (path) => path === currentPath
    );
    if (currentInvestor) {
      setSelectedInvestor(pathToInvestorMap[currentInvestor]);
    }
  };

  // Handle initial state when the component is mounted or path changes
  useEffect(() => {
    const storedInvestor = localStorage.getItem("selectedInvestor");
    if (storedInvestor) {
      setSelectedInvestor(storedInvestor);
    } else {
      updateSelectedInvestor(location.pathname);
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

    const targetPath = investorToPathMap[value];

    // Log current and target paths
    console.log("Current URL:", location.pathname);
    console.log("Target URL:", targetPath);

    // Check if the selected value corresponds to a path different from the current one, even if the option is already selected
    if (location.pathname !== targetPath) {
      // If the URL is not the same as the selected path, navigate to the target path
      navigate(targetPath);
    }

    // Update the selected investor state and store the selection in localStorage
    setSelectedInvestor(value);
    localStorage.setItem("selectedInvestor", value);
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
