import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <a className="navbar-brand" href="#">
              <img
                src="/images/Piper-Serica-logo-1.png"
                alt="logo"
                width={"100px"}
                height="100%"
              />
            </a>
          </div>
          <div className="col-lg-9">
            <div className="footer-links">
              <ul className="d-flex">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    About
                  </NavLink>
                </li>
                <li className="">Our Services</li>
                <li className="">Our Impact</li>
                <li className="">Insights</li>
                <li className="">Career</li>
                <li className="">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
