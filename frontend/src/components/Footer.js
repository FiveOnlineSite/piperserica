import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-2 col-12">
            <div>
              <NavLink className="navbar-brand" to="/">
                <img
                  src="/images/footer-logo.png"
                  alt="logo"
                  width={"100px"}
                  height="100%"
                />
              </NavLink>
            </div>
          </div>
          <div className="col-lg-9 col-md-10 col-12 d-flex justify-content-lg-end justify-content-md-end justify-content-start mt-lg-0 mt-5">
            <div className="footer-links">
              <ul className="d-lg-flex d-md-flex d-block ps-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    About
                  </NavLink>
                </li>
                <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                  {" "}
                  <NavLink className="nav-link" to="/">
                    Our Services
                  </NavLink>
                </li>
                <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                  <NavLink className="nav-link" to="/">
                    Our Impact
                  </NavLink>
                </li>
                <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                  <NavLink className="nav-link" to="/">
                    Insights
                  </NavLink>
                </li>
                <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                  <NavLink className="nav-link" to="/">
                    Careers
                  </NavLink>
                </li>

                <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="privacy-policy-row">
            <div className="footer-links ">
              <ul className="d-flex justify-content-lg-end justify-content-md-end justify-content-start ps-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Disclaimer
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
