import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateMarket = () => {
  return (
    <Layout>
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/market-fund-banner.webp`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Our Businesses</h6> */}
                <h1 className="banner-title">Private Market Fund</h1>
                {/* <p className="banner-para">
                  We provide investors access to unique investment opportunities
                  that deliver superior risk-adjusted returns in today's
                  challenging markets. Our investments provide growth capital
                  and infrastructure, resulting in a broader progressive impact
                  within Asia.
                </p> */}
                <NavLink
                  to="/private-market/piper-serica-angel-fund"
                  className="banner-btn"
                >
                  AIF Fund
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
                <h6 className="section-subtitle mt-5">CAT-1 AIF</h6>
                <h2 className="section-title small-section-title mt-lg-3 mt-4">
                  Piper Serica Angel Fund
                </h2>
                <p className="para small-para mt-lg-3 mt-4"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-5">
            <div className="investment-solution-img pb-5 pt-lg-5 pt-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund1.webp`}
                alt="market-fund"
                className="w-100"
              />

              <div className="tabs-content-div p-lg-5 p-md-5 p-4">
                {/* <h3>Piper Serica Angel Fund</h3> */}
                <p className="para small-para">
                  Piper Serica Angel Fund, launched in 2022 with a ₹300 crore
                  corpus, is a SEBI-registered Category 1 AIF. Focused on deep
                  tech and IP-driven startups in Spacetech, AI, fintech, and
                  semiconductors, it invests ₹10 crore per company, fostering
                  innovation through a collaborative, fast-moving investment
                  approach.
                </p>

                <NavLink
                  to="/private-market/piper-serica-angel-fund"
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

export default PrivateMarket;
