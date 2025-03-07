import React, { useState } from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import OfferingsSlider from "../components/OfferingsSlider";
import NewsSection from "../components/NewsSection";
import CompanyPortfolio from "../components/CompanyPortfolio";
import CompanySlider from "../components/CompanySlider";
import SubscribeLetter from "../components/SubscribeLetter";
const Startup = () => {
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
      strategy_title: "Private Market",
      funds_list: [
        //  Add a key for the array
        {
          funds: "Piper Serica Angel Fund",
          link: "/private-market/piper-serica-angel-fund",
        },
      ],
    },
  ];

  return (
    <Layout>
      {/* <section className="investor-banner-section">
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
      </section> */}

      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/62184b3cd78853ebf6106ba5_2560a237988ae07923f488781b91dfd7.webp`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Creating Meaningful Change</h6> */}
                <h1 className="banner-title">
                  All-weather, purposeful investment strategies
                </h1>
                {/* <p className="banner-para">
                              Our commitment to making a positive impact drives everything
                              we do. Through innovative solutions, community engagement, and
                              sustainable initiatives, we strive to make a lasting
                              difference in the lives we touch and the environments we care
                              for.{" "}
                            </p> */}

                <NavLink to="#offerings" className="banner-btn">
                  Read More
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <div className="row">
            <h5 className="section-subtitle mb-4">What we do</h5>

            <p className="para">
              The Fund invests in early-stage companies that have developed a
              proprietary deep IP / deep tech and is in the early stage of
              commercialization. We are sector agnostic though our focus areas
              are Spacetech, AI, advanced electronics, semicon design and
              fintech. We like to invest in startups that are bringing a
              significant degree of value to their customers. We need to see
              some product market fit, even if early. Our ticket size is ₹10
              crore. While we are happy to co-invest with another lead investor
              there are instances where we are the lead or the sole investor.
              Our decision-making process is fairly quick. We have a very
              collaborative approach to investing and prefer to work with
              multiple co-investors bringing different value to the startup.
            </p>

            {/* <div className="col-lg-4">
            
              <h2 className="section-title mt-5">
                Unlocking differentiated growth opportunities across market
                cycles
              </h2>
            </div>
            <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-5">
            
            </div> */}
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
                        Value added partners:
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
                        Value added partners:
                      </h4>
                      <p className="para why-para">
                        Our founders look at us as value added partners beyond
                        the financial capital that we bring. We work with the
                        founders to scale up the company by helping build the
                        organization, acquire customers and help with further
                        fund raises.
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
                        Network:
                      </h2>
                      <h6 className="read-more">
                        Read More <i className="fa-solid fa-plus"></i>
                      </h6>
                    </div>

                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>

                      <h4 className="why-content-title">Network:</h4>
                      <p className="para why-para">
                        We believe that the biggest help we bring to the
                        founders is our extensive network that spans many
                        industries and skill sets. We have a very varied set of
                        LPs and through our public market funds we are connected
                        with some of the largest companies in the country.
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
                        Founder first approach:
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
                        Founder first approach:
                      </h4>
                      <p className="para why-para">
                        We love to get in the trenches with the founders and
                        help the founders ride through the tough times. Every
                        start up faces tough challenges. Our Founders always
                        find us by their side as they meet these challenges.
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
                  Value added partners:
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
                        Value added partners:
                      </h4>
                      <p className="para why-para">
                        Our founders look at us as value added partners beyond
                        the financial capital that we bring. We work with the
                        founders to scale up the company by helping build the
                        organization, acquire customers and help with further
                        fund raises.
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
                  Network:
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
                      <h4 className="why-content-title">Network:</h4>
                      <p className="para why-para">
                        We believe that the biggest help we bring to the
                        founders is our extensive network that spans many
                        industries and skill sets. We have a very varied set of
                        LPs and through our public market funds we are connected
                        with some of the largest companies in the country.
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
                  Founder first approach:
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
                        Founder first approach:
                      </h4>
                      <p className="para why-para">
                        We love to get in the trenches with the founders and
                        help the founders ride through the tough times. Every
                        start up faces tough challenges. Our Founders always
                        find us by their side as they meet these challenges.
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

      <section className="our-offerings-section" id="offerings">
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
                  We provide investors access to unique investment opportunities
                  that deliver superior risk-adjusted returns in today's
                  challenging markets. We have developed expertise across
                  alternative investment strategies with an eye on
                  sustainability, focusing on resilient sectors within the Asian
                  markets. Our investments provide growth capital and
                  infrastructure, resulting in a broader progressive impact
                  within the region.
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
              <div className="col-lg-6">
                <div className="offerings-div">
                  {/* <h6 className="section-subtitle">Investment Strategy</h6> */}

                  {offeringsItems.map((item, index) => (
                    <div key={index}>
                      {/* Add key to the outermost element */}
                      <div className="strategy-title-div">
                        <h5>{item.strategy_title}</h5>{" "}
                      </div>
                      <div className="strategy-funds-div">
                        {/* Check if funds_list exists before mapping */}
                        {item.funds_list?.map((fund, fundIndex) => (
                          <div className="funds-container" key={fundIndex}>
                            {/* Add key here */}
                            <NavLink to={fund.link} className="mt-2">
                              <div className="funds-div">
                                <h5>{fund.funds}</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="startup-news-section">
        <NewsSection />
      </section>

      <CompanySlider />

      <SubscribeLetter />

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

                <NavLink to="/contact" className="banner-btn">
                  contact
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

export default Startup;
