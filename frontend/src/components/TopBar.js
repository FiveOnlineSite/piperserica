import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-section">
      <div className="container">
        <div className="select-div">
          <h6>I am a: </h6>
          <select class="form-select">
            <option value="1" selected>
              Foreign Investor
            </option>
            <option value="2">NRI Investor</option>
            <option value="3">Startup Founder & Entrepreneur</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
