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
                <h6 className="banner-subtitle">Public market funds</h6>
                <h1 className="banner-title">Piper Serica Numero Uno Fund</h1>
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
                about Piper Serica Numero Uno Fund
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

              <div>
                <NavLink
                  to="/investor-letters"
                  className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4 me-lg-4 me-md-4 me-0 "
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
                    <h2 className="facts-title">840+</h2>
                    <h6 className="para">Investors</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">INR 1250+</h2>
                    <h6 className="para">Crore Asset Under Management</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">20%+</h2>
                    <h6 className="para">CAGR over more than 9 years</h6>
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
              <p className="para">
                Provide senior-secured loans, with an equity upside, to 35 - 40
                companies in India and Southeast Asia at stages Series A and
                above with a ticket size of US$1 to US$5 million. Managed by
                experienced credit professionals with combined experience of
                over 25 years in institutions such as IFC, GIC, Deutsche Bank
                and with investment and asset management experience of over US$1
                billion in Asia. Provide senior-secured loans, with an equity
                upside, to 35 - 40 companies in India and Southeast Asia at
                stages Series A and above with a ticket size of US$1 to US$5
                million. Managed by experienced credit professionals with
                combined experience of over 25 years in institutions such as
                IFC, GIC, Deutsche Bank and with investment and asset management
                experience of over US$1 billion in Asia.
              </p>
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

      <StickyContact />
    </Layout>
  );
};

export default PublicFund;
