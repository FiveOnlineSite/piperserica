import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { NavLink, useLocation } from "react-router-dom";

const MarketFunds = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("asset");

  const [activeTab2, setActiveTab2] = useState("bespoke");

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleTab2Click = (tab) => {
    setActiveTab2(tab);
  };

  // const location = useLocation();

  // // Determine banner text based on the URL
  // const bannerTitle = location.pathname.includes("private")
  //   ? "Private Market Funds"
  //   : "Public Market Funds";

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/market-fund-banner.webp`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">Our Businesses</h6>
                <h1 className="banner-title">Public Market Fund</h1>
                <p className="banner-para">
                  We provide investors access to unique investment opportunities
                  that deliver superior risk-adjusted returns in today's
                  challenging markets. Our investments provide growth capital
                  and infrastructure, resulting in a broader progressive impact
                  within Asia.
                </p>
                <NavLink to="/investor-letters" className="banner-btn">
                  Investor Letter
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
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
                <h6 className="section-subtitle ">Foreign Portfolio Investment (FPI)</h6>
                <h2 className="section-title small-section-title mt-lg-3 mt-4">
                  Piper Serica Numero Uno India Fund
                </h2>
                {/* <p className="para small-para mt-lg-3 mt-4">
                  With your interests in mind, we work closely with you to
                  understand your risk appetite and long-term goals. Our
                  experienced investments team combines their insights and
                  analysis with a global network of top managers and independent
                  research houses.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-5">
            <div className="investment-solution-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund1.webp`}
                alt="market-fund"
                className="w-100"
              />

              <div className="tabs-content-div p-lg-5 px-md-4">
                <h3>Tailored and optimized portfolio allocation</h3>
                <p className="para small-para">
                  We match your investment requirements with your needs,
                  preferences, risk appetite, and long-term goals and create an
                  optimal global portfolio tailored for you. Our world-class
                  institutional framework aims to maximize risk-adjusted returns
                  through the modern portfolio theory approach.
                </p>

                <NavLink
                  to="/public-funds"
                  className="banner-btn blue-btn tabs-btn mt-0"
                >
                  View Fund
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 pt-lg-0 pt-5">
            <div className="container pt-5">
              <div className="investment-solution-content">
                <h6 className="section-subtitle">
                Portfolio Management Services (PMS)
                </h6>
                <h2 className="section-title small-section-title mt-lg-3 mt-4">
                Piper Serica Leader Portfolio
                </h2>
                {/* <p className="para small-para mt-lg-3 mt-4">
                  Our in-house experts provide solutions supported by a
                  comprehensive network of intermediaries and partners. Together
                  with our partners, our capabilities empower you to attain
                  legacy objectives and facilitate the intergenerational
                  transfer of wealth.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-5">
            <div className="investment-solution-img pt-lg-5 pt-0 pb-5">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund2.webp`}
                alt="market-fund"
                className="w-100"
              />

              <div className="tabs-content-div p-lg-5 px-md-4">
                <h3>Finding the best fit for your requirements</h3>
                <p className="para small-para">
                  We find innovative, personalized solutions that meet your
                  sophisticated needs. From legacy governance guidance,
                  traditional investments, and credit solutions to philanthropy,
                  luxury assets, and art, we can provide you with bespoke
                  solutions that meet your unique requirements.
                </p>

                <NavLink
                  to="/public-funds"
                  className="banner-btn blue-btn tabs-btn mt-0"
                >
                  View Fund
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketFunds;
