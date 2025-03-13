import React, { useEffect } from "react";
import Header from "../components/Header";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToInvestorMap = {
      "/foreign-investor": "foreign",
      "/nri-investor": "nri",
      "/startup-founder-entrepreneur": "startup",
    };

    const currentInvestor = pathToInvestorMap[location.pathname];
    if (currentInvestor) {
      localStorage.setItem("selectedInvestor", currentInvestor); // Update localStorage based on URL
    }
  }, [location.pathname]); // Run whenever the location changes (i.e., user navigates)

  return (
    <>
      <Header />
      <section className="home-banner w-100 overflow-hidden">
        <div className="row">
          <div className="video-banner">
            <video
              src={`${process.env.PUBLIC_URL}/videos/HomePageVideo3.1.mp4`}
              loop
              muted
              autoPlay
              className="w-100"
            ></video>

            <div className="home-banner-content">
              <div className="container">
                <h1 className="section-title">
                  Investing in future. <br /> Backing emerging companies.
                </h1>
                <div className="im-a-content-div">
                  <h5>I am a ...</h5>
                </div>
                <div className="banner-contents">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <NavLink
                            to="/foreign-investor"
                            className="content-div"
                          >
                            <div className="content-div-title">
                              <h2>Foreign Investor</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5>Foreign Investor</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              {/* <p>
                                Piper Serica is a long-only active equity asset
                                manager that traverses various strategies of
                                equity investment in India.
                              </p> */}
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink to="/nri-investor" className="content-div">
                            <div className="content-div-title">
                              <h2>NRI Investor</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5>NRI Investor</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              {/* <p>
                                Piper Serica is a long-only active equity asset
                                manager that traverses various strategies of
                                equity investment in India.
                              </p> */}
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink
                            to="/family-office-and-indian-investor"
                            className="content-div"
                          >
                            <div className="content-div-title">
                              <h2>Family Office & Indian Investor</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5>Family Office & Indian Investor</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              {/* <p>
                                Piper Serica is a long-only active equity asset
                                manager that traverses various strategies of
                                equity investment in India.
                              </p> */}
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink
                            to="/startup-founder-entrepreneur"
                            className="content-div"
                          >
                            <div className="content-div-title">
                              <h2>Startup Founder & Entrepreneur</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5>Startup Founder & Entrepreneur</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              {/* <p>
                                The Fund invests in early-stage companies that
                                have developed a proprietary deep IP / deep tech
                                and is in the early stage of commercialization.
                              </p> */}
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
