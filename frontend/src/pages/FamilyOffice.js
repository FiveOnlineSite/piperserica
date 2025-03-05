import React, { useState } from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import OfferingsSlider from "../components/OfferingsSlider";
import NewsSection from "../components/NewsSection";

const FamilyOffice = () => {
  const investorItem = [
    {
      image:
        "/images/banners/62184b3cd78853ebf6106ba5_2560a237988ae07923f488781b91dfd7.webp",
      subtitle: "",
      title: "All-weather, purposeful investment strategies",
      text: "Read More",
    },
    {
      image:
        "/images/banners/67864f896fdad3b987fea826_Website - Header Banners (60).png",
      subtitle: "Knowledge",
      title:
        "Goldilocks and The Bears - Lighthouse Canton Global Outlook Report 2025",
      text: "Our Strategies",
    },
  ];

  const investorSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const offeringsSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 2, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offeringsItems = [
    {
      strategy_title: "Public Market",
      funds: "Piper Serica Numero Uno Fund",
      fund_type: "NRI Investor",
      link:"/public-market/piper-serica-nemero-uno-india-fund",
    },
    {
      strategy_title: "Public Market",
      funds: "Piper Serica Leader Portfolio Fund",
      fund_type: "NRI Investor",
      link: "/public-market/piper-serica-leader-portfolio",
    },
    // {
    //   strategy_title: "Private Credit",
    //   funds: "LC Venture Debt",
    // },
    // {
    //   strategy_title: "Venture Debt",
    //   funds: "LC Supply Chain",
    // },
  ];

  return (
    <Layout>
      <section className="investor-banner-section">
        <div className="row">
          <Slider {...investorSettings}>
            {investorItem.map((item, index) => (
              <div key={index} className="investor-banner-img">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={`banner-img-${index}`}
                />

                <div className="investor-banner-content">
                  <div className="container">
                    {item.subtitle && (
                      <h6 className="banner-subtitle">{item.subtitle}</h6>
                    )}
                    <h1 className="banner-title">{item.title}</h1>

                    <NavLink to="/" className="banner-btn">
                      {item.text}
                      <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="section-subtitle">What we do</h5>
              <h2 className="section-title mt-5">
                Unlocking differentiated growth opportunities across market
                cycles
              </h2>
            </div>
            <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-5">
              <p className="para">
              Piper Serica is a long-only active equity asset manager that traverses various 
              strategies of equity investment in India. We manage multiple funds that invest 
              in Indian listed companies for domestic and foreign individuals and institutions. 
              We also manage a fund that invests in Indian startups that are building business 
              models based on deep tech. We have been investing in Indian companies for over 
              30 years and have a very solid understanding of how to succeed while investing in 
              India navigating through various risks, most of them unique to India as an emerging
               market. The funds that we manage cater to different risk and return profiles and 
               objectives of our investors. We have an edge over our peers due to our deep research 
               and disciplined approach to investing. Our research team is extensively trained in 
               our proprietary research processes that we have developed and mostly automated. 
               To ensure full skin in the game our fund management team makes all their public 
               and private investments through the funds managed by Piper Serica. We are a 
               fund management company owned by its management team. Our management company 
               is majority owned by women.
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
                    <h2 className="facts-title">USD $3.7bn+</h2>
                    <h6 className="para">
                      Assets Under Management & Advisory
                      <i> (as of 30 June 2024)</i>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">160+</h2>
                    <h6 className="para">Committed Professionals</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">07</h2>
                    <h6 className="para">Global Offices</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row">
              <div className="col-lg-4">
                <div className="why-us-div ">
                  <NavLink to="/">
                    <div className="why-us-content">
                      <h2 className="banner-title why-content-main-title">
                        Focus on risk-adjusted returns:
                      </h2>
                      <h6 className="read-more">
                        Read More <i className="fa-solid fa-plus"></i>
                      </h6>
                    </div>

                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>

                      <h4 className="why-content-title">
                        Focus on risk-adjusted returns:
                      </h4>
                      <p className="para why-para">
                      We focus not only on returns but also the systemic and non-systemic 
                      risks while building our model portfolio. We have built strict guard rails 
                      of risk metrics that have helped us deliver steady long-term returns. 
                      Our Portfolio Management Process is devoid of human biases due to highly 
                      objective decision making processes that we have developed over three decades.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-us-div">
                  <NavLink to="/">
                    <div className="why-us-content">
                      <h2 className="banner-title why-content-main-title">
                        Research Process:
                      </h2>
                      <h6 className="read-more">
                        Read More <i className="fa-solid fa-plus"></i>
                      </h6>
                    </div>

                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>

                      <h4 className="why-content-title">
                        Research Process:
                      </h4>
                      <p className="para why-para">
                      We have a very strong on-ground research presence which is required 
                      to be successful in an Emerging Market like India. Our research team 
                      understands local nuances while engaging with investee company management 
                      and their stakeholders. We have built deep and meaningful networks across 
                      industries that allow us to assess investment opportunities in depth. This 
                      allows us to understand long term trends as we build our investment thesis. 
                      We have built a blue chip reputation as an asset manager over three decades 
                      that provides us market access of the kind that is not available to new fund 
                      managers. Our fund management team has a combined experience of almost 100 
                      years making it one of the most experienced teams in the country.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-us-div">
                  <NavLink to="/">
                    <div className="why-us-content">
                      <h2 className="banner-title why-content-main-title">
                        Investor Friendliness:
                      </h2>
                      <h6 className="read-more">
                        Read More <i className="fa-solid fa-plus"></i>
                      </h6>
                    </div>

                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>

                      <h4 className="why-content-title">
                        Investor Friendliness:
                      </h4>
                      <p className="para why-para">
                      We love to communicate with our investors on a regular basis. 
                      While the regulatory compliance requires us to send standard 
                      portfolio and valuation reports to our investors we go beyond that. 
                      Through monthly, quarterly and annual investor letters and regular 
                      webinars we share our portfolio strategy and market outlook on a 
                      regular basis with our investors.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-row">
            <div className="accordion" id="accordionExample">
              {/* Accordion Item 1 */}
              <div
                className={`accordion-item ${
                  openAccordion === 0 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <h2
                  className={`accordion-header ${
                    openAccordion === 0 ? "d-none" : ""
                  }`}
                >
                  Focus on risk-adjusted returns:
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    openAccordion === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">
                        Focus on risk-adjusted returns:
                      </h4>
                      <p className="para why-para">
                      We focus not only on returns but also the systemic and non-systemic 
                      risks while building our model portfolio. We have built strict guard rails 
                      of risk metrics that have helped us deliver steady long-term returns. 
                      Our Portfolio Management Process is devoid of human biases due to highly 
                      objective decision making processes that we have developed over three decades.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button ${
                    openAccordion === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openAccordion === 0 ? "true" : "false"}
                  aria-controls="collapseOne"
                >
                  {openAccordion === 0 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`accordion-item ${
                  openAccordion === 1 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <h2
                  className={`accordion-header ${
                    openAccordion === 1 ? "d-none" : ""
                  }`}
                >
                  Research Process:
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    openAccordion === 1 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">
                        Research Process:
                      </h4>
                      <p className="para why-para">
                      We have a very strong on-ground research presence which is required to be successful in an Emerging Market like India. Our research team understands local nuances while engaging with investee company management and their stakeholders. We have built deep and meaningful networks across industries that 
                      allow us to assess investment opportunities in depth. This allows us to 
                      understand long term trends as we build our investment thesis. We have 
                      built a blue chip reputation as an asset manager over three decades that
                       provides us market access of the kind that is not available to new fund 
                       managers. Our fund management team has a combined experience of almost 
                       100 years making it one of the most experienced teams in the country.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button ${
                    openAccordion === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  aria-controls="collapseTwo"
                >
                  {openAccordion === 1 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 3 */}
              <div
                className={`accordion-item ${
                  openAccordion === 2 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <h2
                  className={`accordion-header ${
                    openAccordion === 2 ? "d-none" : ""
                  }`}
                >
                  Investor Friendliness:
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    openAccordion === 2 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">
                        Investor Friendliness:
                      </h4>
                      <p className="para why-para">
                      We love to communicate with our investors on a regular basis. 
                      While the regulatory compliance requires us to send standard 
                      portfolio and valuation reports to our investors we go beyond that. 
                      Through monthly, quarterly and annual investor letters and regular 
                      webinars we share our portfolio strategy and market outlook on a 
                      regular basis with our investors.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button ${
                    openAccordion === 2 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(2)}
                  aria-expanded={openAccordion === 2 ? "true" : "false"}
                  aria-controls="collapseThree"
                >
                  {openAccordion === 2 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-offerings-section">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Our Offerings</h5>
            <h2 className="banner-title offerings-title mt-3">
              Innovative. Sustainable. Rewarding.
            </h2>

            {/* <h3 className="section-title my-lg-3 my-4">
                Private Markets Funds
              </h3> */}
            <div className="row align-items-center my-lg-3 my-4">
              <div className="col-lg-9">
                <p className="para small-para">
                Our onshore PMS offers a structured investment approach for both 
                corporate and Indian investors seeking long-term wealth creation. 
                Designed for transparency and disciplined portfolio management, our 
                PMS strategy optimizes returns with expert guidance. Our team is available 
                to assist investors in making informed investment decisions.
                </p>
              </div>
              {/* <div className="col-lg-3">
                  <NavLink to="/" className="banner-btn blue-btn mt-0">
                    All funds
                    <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div> */}
            </div>

            <div className="row mt-5">
              {offeringsItems.map((item, index) => (
                <div className="col-lg-6">
                  <div key={index} className="offerings-div">
                    {/* <h6 className="section-subtitle">Investment Strategy</h6> */}
                    <div className="strategy-title-div">
                      <h5>{item.strategy_title}</h5>{" "}
                      {/* <i className="fa-solid fa-arrow-right"></i> */}
                    </div>
                    <div className="strategy-funds-div">
                      {/* <h6 className="section-subtitle mt-5">funds</h6> */}

                      <div className="funds-container">
                        <NavLink to={item.link} className="mt-2">
                          <div className="funds-div">
                            <h5>{item.funds}</h5>
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                        </NavLink>
                        {/* <p className="para small-para">
                                               Lorem ipsum dolor sit amet, consectetur adipiscing
                                               elit, sed do eiusmod tempor incididunt ut labore et
                                               dolore magna aliqua. Ut enim ad minim veniam, quis
                                               nostrud exercitation ullamco laboris nisi ut aliquip
                                               ex ea commodo consequat.
                                             </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="outlook-section">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Outlook</h5>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="banner-title offerings-title mt-3">
                  Investor Letters
                </h2>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-4">
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Discover all
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-news-section">
        <NewsSection />
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="banner-title blue-title mt-3">
                Subscribe to our insights & updates
              </h2>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="newsletter-div">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          for="first-name"
                          className="form-label section-subtitle"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                          //   placeholder="first name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          for="last-name"
                          className="form-label section-subtitle"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                          //   placeholder="last name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <label
                          for="email"
                          className="form-label section-subtitle"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          //   placeholder="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-start">
                          <NavLink
                            to="/"
                            className="banner-btn blue-btn mt-0 mb-3"
                          >
                            Subscribe
                          </NavLink>
                        </div>
                        <div className="col-lg-8">
                          <p className="para subscribe-para mb-0">
                            <i>
                              *By submitting the contact form, you consent to
                              all data in the form being used in accordance with
                              <a href="#">Piper Serics's data privacy policy</a>
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <h6 className="banner-subtitle">Contact us</h6>
                <h2 className="banner-title why-content-main-title">
                  Get in touch
                </h2>
                <p className="para contact-para">
                  To discuss investment opportunities and funds, or for more
                  information, please contact us and a member of the team will
                  be in touch.
                </p>

                <NavLink to="/" className="banner-btn">
                  contact us
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

export default FamilyOffice;
