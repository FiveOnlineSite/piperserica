import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const MarketFunds = () => {
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

      <section className="investment-solution-section"></section>
    </Layout>
  );
};

export default MarketFunds;
