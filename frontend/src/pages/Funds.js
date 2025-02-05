import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Funds = () => {
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

  const handleFilterChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const getFilteredImages = () => {
    if (selectedIndustry === "Industry" || selectedIndustry === "") {
      return images; // Show all images if no specific industry is selected
    }
    return images.filter((image) => image.label === selectedIndustry);
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

      <section className="industries-portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h6 className="section-subtitle">Industries</h6>
              <h3 className="section-title mb-lg-3 mb-4">
                Portfolio Companies
              </h3>
            </div>
            <div className="col-lg-3">
              <div className="industries-filter-div">
                <select
                  class="form-select"
                  onChange={handleFilterChange}
                  aria-label="Default select example"
                >
                  <option selected>Industry</option>
                  <option value="B2B">B2B</option>
                  <option value="Consumer">Consumer</option>
                  <option value="Creator Economy">Creator Economy</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-lg-4 mt-5">
            <div className="industries-div">
              <div className="row">
                {getFilteredImages().map((images) => (
                  <div key={images.id} className="col-lg-3 col-md-6 col-6">
                    <div className="industires-logo-div">
                      <img src={images.src} alt="industry" className="w-100" />
                      <div className="industries-content">
                        <p className="para small-para">
                          The Fund seeks to empower early and growth stage
                          companies in India and Southeast Asia, providing them
                          capital to scale without significantly diluting
                          equity.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="sticky-contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="section-title">
                Want to know more about LC Nueva AIF?
              </h4>
            </div>

            <div className="col-lg-6">
              <div className="banner-btn blue-btn mt-0">
                <NavLink>
                  Contact us
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

export default Funds;
