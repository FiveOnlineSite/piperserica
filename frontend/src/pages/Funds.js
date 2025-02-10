import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import StickyContact from "../components/StickyContact";
import CompanyPortfolio from "../components/CompanyPortfolio";

const Funds = () => {
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
                <h6 className="banner-subtitle">Private market funds</h6>
                <h1 className="banner-title">LC Venture Debt Fund</h1>
                <p className="banner-para">Capital to scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-fund-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="about-fund-div">
              <h6 className="section-subtitle mb-4">
                about lc venture debt fund
              </h6>
              <p className="para">
                The Fund seeks to empower early and growth stage companies in
                India and Southeast Asia, providing them capital to scale
                without significantly diluting equity. The Southeast Asia and
                India's venture debt market has the potential to scale up by 4 -
                5x over the next few years. The Fund presents investors a unique
                opportunity to participate in Southeast Asia and India's venture
                debt story and a fast growing segment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="facts-div">
                    <h2 className="facts-title">35</h2>
                    <h6 className="para">Companies</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">₹350 Cr</h2>
                    <h6 className="para">Fund Size</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">₹344.75 Cr</h2>
                    <h6 className="para">Called in Capital</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">features</h6>
                <h3 className="section-title mb-lg-3 mb-4">Why This Fund</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Provide senior-secured loans, with an equity upside, to 35 -
                    40 companies in India and Southeast Asia at stages Series A
                    and above with a ticket size of US$1 to US$5 million.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Managed by experienced credit professionals with combined
                    experience of over 25 years in institutions such as IFC,
                    GIC, Deutsche Bank and with investment and asset management
                    experience of over US$1 billion in Asia.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Sector-agnostic mandate with focus on partnering with
                    companies with strong business fundamentals and run by
                    passionate founders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-thesis-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">Growth Strategy</h6>
                <h3 className="section-title mb-lg-3 mb-4">Investor Thesis</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Provide senior-secured loans, with an equity upside, to 35 -
                    40 companies in India and Southeast Asia at stages Series A
                    and above with a ticket size of US$1 to US$5 million.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Managed by experienced credit professionals with combined
                    experience of over 25 years in institutions such as IFC,
                    GIC, Deutsche Bank and with investment and asset management
                    experience of over US$1 billion in Asia.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Sector-agnostic mandate with focus on partnering with
                    companies with strong business fundamentals and run by
                    passionate founders.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Sector-agnostic mandate with focus on partnering with
                    companies with strong business fundamentals and run by
                    passionate founders.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Sector-agnostic mandate with focus on partnering with
                    companies with strong business fundamentals and run by
                    passionate founders.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Sector-agnostic mandate with focus on partnering with
                    companies with strong business fundamentals and run by
                    passionate founders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyPortfolio />

      <section className="fund-info-section mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="fund-title-div">
                <h6 className="section-subtitle mb-4">Insights</h6>
                <h3 className="section-title mb-lg-3 mb-4">Fund Information</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="fund-content-div">
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of Fund: </strong> Piper Serica Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Category: </strong> Category I AIF - Venture Capital
                    Fund - Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address: </strong> 127, T.V. Industrial Estate,
                    Sudam Kalu Marg, Opposite Glaxo Smith Kline, Worli Mumbai -
                    400030
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Registration Number: </strong> IN/ AIF1/ 21-22/ 1028
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of Fund Manager: </strong> Piper Serica
                    Advisors Private Limited
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address of Fund Manager: </strong> No. 905 & 906, A
                    Wing, 9th Floor, Marathon Innova Nextgen, Off K. K. Marg,
                    Lower Parel, Mumbai - 400013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyContact />
    </Layout>
  );
};

export default Funds;
