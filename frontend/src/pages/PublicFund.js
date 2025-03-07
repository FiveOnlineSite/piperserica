import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import StickyContact from "../components/StickyContact";

const PublicFund = () => {
  const handleFilterChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const getFilteredImages = () => {
    if (selectedIndustry === "Industry" || selectedIndustry === "") {
      return images; // Show all images if no specific industry is selected
    }
    return images.filter((image) => image.label === selectedIndustry);
  };

  const [selectedIndustry, setSelectedIndustry] = useState("Industry");

  const images = [
    {
      id: 1,
      src: "/images/industries/industry1.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 2,
      src: "/images/industries/industry2.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 3,
      src: "/images/industries/industry3.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 4,
      src: "/images/industries/industry4.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 5,
      src: "/images/industries/industry5.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 6,
      src: "/images/industries/industry6.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 7,
      src: "/images/industries/industry7.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 8,
      src: "/images/industries/industry8.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
  ];

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
                {/* <h6 className="banner-subtitle">Public market funds</h6> */}
                <h1 className="banner-title">Piper Serica Numero Uno Fund</h1>
                {/* <p className="banner-para">Capital to scale</p> */}
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
                about Piper Serica Numero Uno Fund
              </h6>
              <p className="para">
                Piper Serica Numero Uno India Fund is a Foreign Portfolio
                Investor (FPI) fund designed to provide global investors
                seamless access to India’s dynamic equity markets. Following the
                same strategy as our PMS, the fund combines growth and value
                investing, rigorous research, and disciplined risk management to
                identify high-quality businesses with strong fundamentals. With
                a multi-cap approach and a focus on fair valuations, the fund
                aims to generate consistent alpha, ensuring long-term wealth
                creation while mitigating market risks.
              </p>

              <div>
                <NavLink
                  to="/investor-letters"
                  className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4 me-lg-4 me-md-4 me-4 "
                >
                  Factsheet
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/investor-letters"
                  className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4"
                >
                  Presentation
                </NavLink>
              </div>
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
                    <h2 className="facts-title">INR 400cr+</h2>
                    <h6 className="para">AUM</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">15%+</h2>
                    <h6 className="para">CAGR</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">20-22</h2>
                    <h6 className="para">stocks</h6>
                    {/* <p className="para">Figures as of 30th June 2024.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-philosophy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="investment-philosophy-title-div">
                <h6 className="section-subtitle mb-4">Investment philosophy</h6>
                <h3 className="section-title mb-lg-3 mb-4">Our Approach</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para">
                  <strong>Unlocking the India Opportunity</strong> by investing
                  in high-growth sectors benefiting from India’s economic
                  transformation, rising consumption, and structural market
                  shifts.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para">
                  <strong>Leveraging Expert-Led Strategy</strong> with a
                  seasoned equity team that combines deep market insights and
                  disciplined execution to drive sustainable returns.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para">
                  <strong>Balancing Growth and Value Investing</strong> through
                  a flexible approach that optimizes performance across
                  different market cycles.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para">
                  <strong>Conducting Meticulous Stock Selection</strong> using
                  rigorous screening processes that blend qualitative and
                  quantitative analysis to identify future market leaders.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para">
                  <strong>
                    Ensuring a Resilient and Alpha-Driven Portfolio
                  </strong>{" "}
                  with a structured investment framework designed to outperform
                  while mitigating risks in volatile market conditions.
                </p>
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
                    <strong>Multi-Cap Investment Strategy</strong> that
                    identifies high-quality opportunities across different
                    market capitalizations, ensuring superior risk-adjusted
                    returns.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Focus on Fair Valuations </strong>by investing in
                    fundamentally strong businesses trading at attractive
                    prices, leveraging deep research and a long-term
                    perspective.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Robust Research and Due Diligence</strong> involving
                    engagement with key stakeholders, in-depth financial
                    analysis, and assessment of management quality and
                    governance standards.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Strategic Risk Management Framework</strong> that
                    limits exposure with a maximum of 6% allocation per stock,
                    25% per sector, and ensures liquidity to exit holdings
                    within seven trading days.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>
                      Consistent Portfolio Rebalancing and Sectoral
                      Diversification
                    </strong>{" "}
                    to optimize returns while mitigating risks, ensuring
                    long-term wealth creation for investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="factsheet-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">Lorem Ipsum</h6>
                <h3 className="section-title mb-lg-3 mb-4">Lorem Ipsum</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="factsheet-content-div d-flex align-items-center justify-content-between">
                <h4>Download Latest Factsheet</h4>
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Factsheet
                  </NavLink>
                </div>
              </div>

              <div className="factsheet-content-div d-flex align-items-center justify-content-between mt-5">
                <h4>Download Presentation</h4>
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Presentation
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="investor-letter-section">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Download</h5>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h2 className="banner-title offerings-title mt-3">
                  Disclosures
                </h2>
              </div>
              <div className="col-lg-7 mt-lg-0 mt-4 d-flex justify-conten-lg-end justify-content-start">
                {/* <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Explore
                  </NavLink>
                </div> */}
                <div className="row">
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Disclosure Document 1</h6>
                    </div>
                  </NavLink>
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Management Fees Calculator</h6>
                    </div>
                  </NavLink>
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Management Fees Calculator</h6>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyContact title="Want to know more about Piper Serica Numero Uno India Fund?" />
    </Layout>
  );
};

export default PublicFund;
