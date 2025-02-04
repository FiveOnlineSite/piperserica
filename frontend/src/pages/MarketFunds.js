import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const MarketFunds = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("asset");

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src="/images/banners/market-fund-banner.webp"
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">Our Businesses</h6>
                <h1 className="banner-title">Public Market Funds</h1>
                <p className="banner-para">
                  We provide investors access to unique investment opportunities
                  that deliver superior risk-adjusted returns in today's
                  challenging markets. Our investments provide growth capital
                  and infrastructure, resulting in a broader progressive impact
                  within Asia.
                </p>

                <div className="banner-btn">
                  <NavLink>
                    Investor Letter
                    <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-solution-section">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-lg-5">
            <div className="container">
              <div className="investment-solution-content">
                <h6 className="section-subtitle ">Investment SOLUTIONS</h6>
                <h2 className="section-title small-section-title mt-lg-3 mt-5">
                  Our insights. Your investments
                </h2>
                <p className="para small-para mt-lg-3 mt-5">
                  With your interests in mind, we work closely with you to
                  understand your risk appetite and long-term goals. Our
                  experienced investments team combines their insights and
                  analysis with a global network of top managers and independent
                  research houses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="investment-solution-img">
              <img
                src="/images/banners/market-fund1.webp"
                alt="market-fund"
                className="w-100"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="container">
              <div className="tab-links">
                <a
                  href="#asset"
                  onClick={() => handleTabClick("asset")}
                  className={activeTab === "asset" ? "active" : ""}
                >
                  <h4>Asset Allocation</h4>
                </a>
                <a
                  href="#treasury"
                  onClick={() => handleTabClick("treasury")}
                  className={activeTab === "treasury" ? "active" : ""}
                >
                  <h4>Treasury Solutions</h4>
                </a>
                <a
                  href="#global"
                  onClick={() => handleTabClick("global")}
                  className={activeTab === "global" ? "active" : ""}
                >
                  <h4>Global Investment Platform</h4>
                </a>
                <a
                  href="#alternative"
                  onClick={() => handleTabClick("alternative")}
                  className={activeTab === "alternative" ? "active" : ""}
                >
                  <h4>Alternative Investments</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="investment-tab-content">
              <div className="tab-content">
                {/* Tab 1 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "asset" ? "show active" : ""
                  }`}
                  id="asset"
                >
                  <div className="tabs-content-div">
                    <h3>Tailored and optimized portfolio allocation</h3>
                    <p className="para small-para">
                      We match your investment requirements with your needs,
                      preferences, risk appetite, and long-term goals and create
                      an optimal global portfolio tailored for you. Our
                      world-class institutional framework aims to maximize
                      risk-adjusted returns through the modern portfolio theory
                      approach.
                    </p>

                    <div className="banner-btn blue-btn tabs-btn mt-0">
                      <NavLink>
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* Tab 2 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "treasury" ? "show active" : ""
                  }`}
                  id="treasury"
                >
                  <div className="tabs-content-div">
                    <h3>Outsourced treasury management services</h3>
                    <p>
                      We match your investment requirements with your needs,
                      preferences, risk appetite, and long-term goals and create
                      an optimal global portfolio tailored for you. Our
                      world-class institutional framework aims to maximize
                      risk-adjusted returns through the modern portfolio theory
                      approach.
                    </p>
                    <div className="banner-btn blue-btn tabs-btn mt-0">
                      <NavLink>
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* Tab 3 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "global" ? "show active" : ""
                  }`}
                  id="global"
                >
                  <div className="tabs-content-div">
                    <h3>
                      Diversify your portfolio with downside risk protection
                    </h3>
                    <p>
                      We match your investment requirements with your needs,
                      preferences, risk appetite, and long-term goals and create
                      an optimal global portfolio tailored for you. Our
                      world-class institutional framework aims to maximize
                      risk-adjusted returns through the modern portfolio theory
                      approach.
                    </p>

                    <div className="banner-btn blue-btn tabs-btn mt-0">
                      <NavLink>
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* Tab 4 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "alternative" ? "show active" : ""
                  }`}
                  id="alternative"
                >
                  <div className="tabs-content-div">
                    <h3>
                      Integrating alternatives into the traditional portfolio
                    </h3>
                    <p>
                      We match your investment requirements with your needs,
                      preferences, risk appetite, and long-term goals and create
                      an optimal global portfolio tailored for you. Our
                      world-class institutional framework aims to maximize
                      risk-adjusted returns through the modern portfolio theory
                      approach.
                    </p>

                    <div className="banner-btn blue-btn tabs-btn mt-0">
                      <NavLink>
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketFunds;
