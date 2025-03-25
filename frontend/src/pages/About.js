import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink, useLocation } from "react-router-dom";

const About = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const teamContent = [
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "/",
      designation: "Team member",
    },
  ];

  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the DOM to update before trying to scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay ensures the element is rendered
    }
  }, [hash, pathname]); // Re-run when pathname or hash changes

  const handleNavClick = (event, targetHash) => {
    if (hash === targetHash) {
      event.preventDefault(); // Prevent scrolling when already at the target section
    }
  };

  const [activeTab, setActiveTab] = useState("fourteen");
  const [gifSources, setGifSources] = useState({
    fourteen: "/images/history/Getway-of-India-2004-GIF.gif",
    fifteen: "/images/history/Target-2015-GIF.gif",
    nineteen: "/images/history/UpArrow-2019-GIF.gif",
    twenty: "/images/history/Globe-2020-GIF.gif",
    "twenty-two": "/images/history/Rocket-2024-GIF.gif",
  });

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);

    // Reload all GIFs by appending a timestamp
    setGifSources((prevSources) => {
      const updatedSources = {};
      Object.keys(prevSources).forEach((key) => {
        updatedSources[key] = `${prevSources[key]}?t=${Date.now()}`;
      });
      return updatedSources;
    });
  };

  return (
    <Layout>
      <section className="banner-section" id="banner-div">
        <div className="row">
          <div className="banner-img-div">
            <video
              src={`${process.env.PUBLIC_URL}/videos/AboutPageVideo.mp4`}
              muted
              autoPlay
              loop
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">About Piper Serica</h1>
                {/* <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="investment-journey-section">
        <div className="container">
          <h6 className="section-subtitle mb-4">
            Investing in future. Backing emerging companies.
          </h6>

          <p className="para justify-para">
            Piper Serica is a long-only active equity asset manager that
            traverses various strategies of equity investment in India. We
            manage multiple funds that invest in Indian listed companies for
            domestic and foreign individuals and institutions. We also manage a
            fund that invests in Indian startups that are building business
            models based on deep tech. We have been investing in Indian
            companies for over 30 years and have a very solid understanding of
            how to succeed while investing in India navigating through various
            risks, most of them unique to India as an emerging market.
          </p>
          <p className="para justify-para">
            The funds that we manage cater to different risk and return profiles
            and objectives of our investors. We have an edge over our peers due
            to our deep research and disciplined approach to investing. Our
            research team is extensively trained in our proprietary research
            processes that we have developed and mostly automated. To ensure
            full skin in the game our fund management team makes all their
            public and private investments through the funds managed by Piper
            Serica. We are a fund management company owned by its management
            team. Our management company is majority owned by women.
          </p>
          {/* <div className="row align-items-start"> */}
          {/* <div className="col-lg-5">
              <h2 className="section-title mt-5 journey-text">
                <i class="fa-solid fa-quote-left journey-left-quote"></i>
                We commit to being the <strong>lighthouse</strong> for our
                investors and clients across asset management, wealth
                management, and founder ecosystems.
                <i class="fa-solid fa-quote-right journey-right-quote"></i>
              </h2>
            </div> */}
          {/* <div className="col-lg-7"> */}
          {/* <NavLink
                to="#history-div"
                className="banner-btn blue-btn tabs-btn mt-lg-3 mt-5"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  const element = document.querySelector("#history-div");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                our history
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
      <div id="history-section"></div>
      <section className="history-section">
        <div className="container">
          <h6 className="section-subtitle">History</h6>
          <div className="row align-items-start">
            {/* <div className="col-lg-3"> */}
            {/* <h2 className="section-title mt-lg-3 mt-4">We've come so far!</h2> */}
            {/* </div> */}
            {/* <div className="col-lg-8 offset-lg-1 offset-0 mt-lg-0 mt-5">
              <div className="fund-content-div">
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Piper Serica started operations in 2004.
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2015, Piper Serica received its first registration from
                    the Securities and Exchange Board of India (SEBI) as a
                    Registered Investment Advisor.
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2019, we received the registration from the Securities
                    and Exchange Board of India (SEBI) for launching Portfolio
                    Management Service (PMS).
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2020, Piper Serica launched its Foreign Portfolio
                    Investor (FPI) Fund based in Mauritius.
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2022, launched Piper Serica Angel Fund, an early-stage VC
                    fund registered with SEBI as a Category 1 AIF.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="row mt-4 history-row">
            <div className="col-lg-2">
              <div className="year-tab-links">
                <a
                  href="#"
                  onClick={(event) => handleTabClick("fourteen", event)}
                  className={activeTab === "fourteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2004</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("fifteen", event)}
                  className={activeTab === "fifteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2015</h4>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  onClick={(event) => handleTabClick("nineteen", event)}
                  className={activeTab === "nineteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("twenty", event)}
                  className={activeTab === "twenty" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("twenty-two", event)}
                  className={activeTab === "twenty-two" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2022</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-10">
              <div className="history-tab-content">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "fourteen" ? "show active" : ""
                    }`}
                    id="fourteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2004</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica started{" "}
                            <strong>operations in 2004</strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.fourteen}
                          className="w-100"
                          alt="history-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "fifteen" ? "show active" : ""
                    }`}
                    id="fifteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2015</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica received its first registration from
                            the{" "}
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) as a
                              Registered Investment Advisor
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.fifteen}
                          className="w-100"
                          alt="history-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "nineteen" ? "show active" : ""
                    }`}
                    id="nineteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2019</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            {" "}
                            We received the registration from the 
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) for launching Portfolio Management Service (PMS).
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.nineteen}
                          className="w-100"
                          alt="history-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "twenty" ? "show active" : ""
                    }`}
                    id="twenty"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2020</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica launched its
                            <strong>
                              {" "}
                              Foreign Portfolio Investor (FPI) Fund based in
                              Mauritius.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.twenty}
                          className="w-100"
                          alt="history-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "twenty-two" ? "show active" : ""
                    }`}
                    id="twenty-two"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2022</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Launched
                            <strong>
                              {" "}
                              Piper Serica Angel Fund, an early-stage VC fund
                              registered with SEBI as a Category 1 AIF.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources["twenty-two"]}
                          className="w-100"
                          alt="history-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="purpose-section"></div>
      <section className="why-us-section vision-mission-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div">
                      <NavLink to="/">
                        <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Vision
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div>

                        <div className="why-content-para vision-mission-para">
                          <h2 className="banner-title why-content-main-title">
                            Vision
                          </h2>
                          <p className="para why-para justify-para">
                            To be a highly respected long-only equity asset
                            management company, offering multiple strategies
                            that cater to the diverse objectives of our
                            investors.
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div">
                      <NavLink to="/">
                        <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Mission
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div>

                        <div className="why-content-para vision-mission-para">
                          <h2 className="banner-title why-content-main-title">
                            Mission
                          </h2>
                          <p className="para why-para justify-para">
                            At Piper Serica, we empower investors to achieve
                            their financial goals through a diverse portfolio of
                            actively managed strategies. Committed to
                            transparency, rigorous analysis, and strategic asset
                            allocation, we balance growth and risk to deliver
                            consistent returns. Our mission extends beyond
                            wealth creation—we strive to foster financial
                            literacy, ensure long-term stability, and drive
                            sustainable economic progress. Through innovation
                            and discipline, we create enduring value for our
                            investors and the broader ecosystem.
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
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
                  Vision
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
                      <h4 className="why-content-title">Vision</h4>
                      <p className="para why-para justify-para">
                        To be a highly respected long-only equity asset
                        management company, offering multiple strategies that
                        cater to the diverse objectives of our investors.
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
                  Mission
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
                      <h4 className="why-content-title">Mission</h4>
                      <p className="para why-para justify-para">
                        At Piper Serica, we empower investors to achieve their
                        financial goals through a diverse portfolio of actively
                        managed strategies. Committed to transparency, rigorous
                        analysis, and strategic asset allocation, we balance
                        growth and risk to deliver consistent returns. Our
                        mission extends beyond wealth creation—we strive to
                        foster financial literacy, ensure long-term stability,
                        and drive sustainable economic progress. Through
                        innovation and discipline, we create enduring value for
                        our investors and the broader ecosystem.
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
            </div>
          </div>
        </div>
      </section>
      <div id="philosophy-div"></div>
      <section className="philosophy-section">
        <div className="container">
          <h5 className="section-subtitle mb-5">our philosophy</h5>
          <div className="row image-row align-items-center">
            <div className="col-lg-12 order-lg-1 order-2">
              <h2 className="para mt-lg-0 justify-para">
                Our core philosophy is to benefit from long term investment
                opportunities while ignoring market cycles. We like to identify
                and invest in companies that are leaders in emerging spaces led
                by a change in consumer behavior, technology changes and product
                innovations. Once we identify such companies we like to stay
                invested as they create shareholder value while moving from
                small cap to mid cap and ultimately large cap. We believe that
                companies like these, with great management, good corporate
                governance, financially disciplined and shareholder friendly are
                quite rare and should not be looked at the same valuation prism
                as the rest of the market. We like to interact with the
                management of our portfolio companies regularly to stay abreast
                of the trends shaping their industry and explore other
                investment opportunities. We believe that long term investing
                requires deep knowledge and good temperament. Our team members
                are always curious to learn more at the same time tune out
                noise. We see market volatility as an opportunity to increase
                our equity allocations rather than reduce them. We believe that
                conviction comes only from deep research and understanding of
                our portfolio companies.
              </h2>
            </div>
            {/* <div className="col-lg-6 order-lg-2 order-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund1.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div> */}
          </div>

          {/* <div className="row mt-5 image-row">
            <div className="col-lg-6">
              <p className="">
                We manage and advise on a range of investment strategies and
                products which touch the lives of investors, communities,
                corporate borrowers, investee companies, and our people. We act
                as investment partners to a diverse set of investors, from
                pension funds and insurance companies to single-family offices.
                Some of our institutional investors or LPs manage funds on
                behalf of the state or the public. When we invest or make an
                investment recommendation, we ensure that our investment
                philosophy directs decision-making.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="para">
                Our fund investment strategies unlock unique opportunities,
                which deliver enhanced returns with capital preservation to our
                investors and positively impact our stakeholders, society, and
                the economy. Our clients’ advisory portfolios result from
                careful curation led by our experienced investment advisors, who
                constantly strive to allocate to investment opportunities that
                offer attractive risk-adjusted returns. Our advisors apply
                quantitative methods to monitor and manage portfolio risk and
                work closely with our clients to increase diversification
                without compromising returns.
              </p>
            </div>
          </div> */}

          {/* <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <h2 className="para mt-lg-0">
                We like to interact with the management of our portfolio
                companies regularly to stay abreast of the trends shaping their
                industry and explore other investment opportunities. We believe
                that long term investing requires deep knowledge and good
                temperament. Our team members are always curious to learn more
                at the same time tune out noise. We see market volatility as an
                opportunity to increase our equity allocations rather than
                reduce them. We believe that conviction comes only from deep
                research and understanding of our portfolio companies.
              </h2>
            </div>

            <div className="col-lg-6 d-lg-block d-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund2.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div>
          </div> */}
        </div>
      </section>
      <div id="note-section"></div>
      <section className="founders-note-section">
        <div className="container">
          <div className="row">
            <h6 className="section-subtitle pb-4">Founder’s note</h6>
            <div className="col-lg-11">
              {/* <h2 className="banner-title offerings-title founders-text px-5">
                <i class="fa-solid fa-quote-left founders-left-quote"></i>
                Our courage to go beyond conventions and constantly explore new
                possibilities has been one of our core strengths.
                <i class="fa-solid fa-quote-right founders-right-quote"></i>
              </h2> */}
            </div>
          </div>

          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="founders-img-div pe-lg-5 pe-auto">
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay-agarwal-560x560.jpeg`}
                  className="w-100"
                  alt="founders-img"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <p className="para justify-para">
                Our journey began with a simple yet powerful vision: to create
                an investment company that not only delivers superior financial
                performance but also fosters innovation and positive economic
                impact. With decades of combined experience in public equities,
                asset management, and financial markets, our team is uniquely
                positioned to identify high-potential opportunities and create
                lasting value for our investors.
              </p>

              <p className="para justify-para">
                Our approach is rooted in discipline, transparency, and
                alignment of interests. We deploy a research-driven methodology,
                leveraging data insights and industry expertise to make informed
                investment decisions. Our portfolio is curated to ensure
                diversification, resilience, and adaptability in a dynamic
                market landscape.
              </p>

              <p className="para justify-para">
                At Piper Serica, we prioritize partnerships and long-term
                relationships. We work closely with industry experts to support
                strategic growth, risk management, and sustainable financial
                outcomes. Our commitment to responsible investing ensures that
                we not only seek financial returns but also contribute to
                broader societal and economic progress.
              </p>
              <p className="para justify-para">
                We are excited about the opportunities ahead and deeply
                appreciate the trust and confidence that our investors place in
                us. Together, we build a legacy of success, innovation, and
                enduring value.
              </p>

              <h6 className="founders-name">
                <em>- Abhay Agarwal, Founder & Fund Manager, Piper Serica</em>
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="teams-bg-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/banners/Team.jpg`}
          alt="team-bg"
          className="w-100"
        />
      </section>
      <div id="team-section"></div>
      <section className="teams-section">
        <div className="container">
          <h6 className="section-subtitle">Meet the team</h6>
          {/* <h2 className="section-title mt-lg-3 mt-4">The Driving Force</h2> */}
          <div className="row mt-3 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="team-div">
                {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay-agarwal-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
                <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Abhay Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/abhay-agarwal-piper/">
                      <i class="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>

                  <h5 className="team-designation">Managing Director, CIO</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-0 mt-4">
              <div className="team-div">
                {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/rajni-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
                <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Rajni Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/rajni-agarwal-99352218b/">
                      <i class="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Research</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-3 mt-4">
              <div className="team-div">
                {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/Ajay-modi-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
                <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Ajay Modi</h3>
                    <NavLink to="https://www.linkedin.com/in/ajmodi/">
                      <i class="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Investments</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mb-5">
            {teamContent.map((team, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div className="team-div small-team-div">
                  <img
                    src={`${process.env.PUBLIC_URL}${team.image}`}
                    alt="team-img"
                    className="w-100"
                  />
                  <div className="team-content small-team-content">
                    <div className="team-title-div">
                      <h3 className="section-title team-name">{team.name}</h3>
                      <NavLink to={team.linkedin_url}>
                        <i class="fa-brands fa-linkedin"></i>
                      </NavLink>
                    </div>

                    <h5 className="section-subtitle">{team.designation}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
