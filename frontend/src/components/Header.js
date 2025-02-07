import React from "react";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg desktop-navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/images/Piper-Serica-logo-1.png"
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </NavLink>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown desktop-dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </NavLink>
                <ul className="dropdown-menu desktop-dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/public-market">
                      Public Market
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/private-market">
                      Private Market
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/our-impact">
                  Our Impact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insights">
                  Insights
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news-article">
                  News Article
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/careers">
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item login-btn">
                <NavLink className="nav-link" to="/login">
                  Login <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar fixed-top mobile-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/images/Piper-Serica-logo-1.png"
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <NavLink className="navbar-brand" to="/">
                <img
                  src="/images/Piper-Serica-logo-1.png"
                  alt="logo"
                  width={"100px"}
                  height="100%"
                />
              </NavLink>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <TopBar />
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/public-market">
                        Public Market
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/private-market">
                        Private Market
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/our-impact">
                    Our Impact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/insights">
                    Insights
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news-article">
                    News Article
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item login-btn">
                  <NavLink className="nav-link" to="/">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
