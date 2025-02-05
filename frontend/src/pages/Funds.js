import React from "react";
import Layout from "../components/Layout";

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

      <section className="industries-portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h6 className="section-subtitle">Industries</h6>
              <h3 className="section-title">Portfolio Companies</h3>
            </div>
            <div className="col-lg-3">
              <div className="industries-filter-div">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Industry</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="industries-div">
              <div className="row">
                <div className="col-lg-3">
                  <div className="industires-logo-div">
                    <img
                      src="/images/industries/industry1.png"
                      alt="industry"
                      className="w-100"
                    />
                    <div className="industries-content">
                      <p className="para small-para">
                        The Fund seeks to empower early and growth stage
                        companies in India and Southeast Asia, providing them
                        capital to scale without significantly diluting equity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="industires-logo-div">
                    <img
                      src="/images/industries/industry1.png"
                      alt="industry"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="industires-logo-div">
                    <img
                      src="/images/industries/industry1.png"
                      alt="industry"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <div className="industires-logo-div">
                    <img
                      src="/images/industries/industry1.png"
                      alt="industry"
                      className="w-100"
                    />
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

export default Funds;
