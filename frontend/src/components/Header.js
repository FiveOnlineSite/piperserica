import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg desktop-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/Piper-Serica-logo-1.png"
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </a>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu desktop-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Public Market
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Private Market
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Impact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Insights
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar fixed-top mobile-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/Piper-Serica-logo-1.png"
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </a>
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
              <a className="navbar-brand" href="#">
                <img
                  src="/images/Piper-Serica-logo-1.png"
                  alt="logo"
                  width={"100px"}
                  height="100%"
                />
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Public Market
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Private Market
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Impact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Insights
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
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
