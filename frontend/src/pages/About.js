import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const About = () => {
  const [activeTab, setActiveTab] = useState("fourteen");

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
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
                <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6>
                <h1 className="banner-title">About Piper Serica</h1>
                <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-journey-section">
        <div className="container">
          <h6 className="section-subtitle">
            A BEACON OF SAFETY ON YOUR INVESTMENT JOURNEY
          </h6>
          <div className="row align-items-start">
            <div className="col-lg-5">
              <h2 className="section-title mt-5 journey-text">
                <i class="fa-solid fa-quote-left journey-left-quote"></i>
                We commit to being the <strong>lighthouse</strong> for our
                investors and clients across asset management, wealth
                management, and founder ecosystems.
                <i class="fa-solid fa-quote-right journey-right-quote"></i>
              </h2>
            </div>
            <div className="col-lg-7">
              <p className="para mt-5">
                Piper Serica is a global investment institution offering wealth
                and asset management services. Led by an experienced senior
                management team, we work with clients across geographies from
                our Singapore, Dubai, and India offices.
              </p>
              <p className="para">
                We provide our clients and investors with data-backed,
                well-researched investment guidance, aided by our robust
                institutional framework. No matter what a client's specific
                need, we bring the same diligence and care, working together to
                achieve sustainable goals.
              </p>

              <NavLink
                to="/"
                className="banner-btn blue-btn tabs-btn mt-lg-3 mt-5"
              >
                our history
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <h6 className="section-subtitle">History</h6>
          <div className="row align-items-start">
            <div className="col-lg-3">
              <h2 className="section-title mt-lg-3 mt-4">We've come so far!</h2>
            </div>
            <div className="col-lg-9 mt-lg-0 mt-5">
              <p className="para">
                Piper Serica has been built block by block with the vision of
                being your guide in making informed investment decisions. Our
                ability to cater to a diverse array of investors reflects our
                design-thinking capability to create innovative client
                experiences held together by an institutional framework. Your
                investment journey in the 21st Century promises to be smooth
                sailing and rewarding with us as your beacon of growth.
              </p>
            </div>
          </div>

          <div className="row mt-5 history-row">
            <div className="col-lg-2">
              <div className="year-tab-links">
                <a
                  href="#fourteen"
                  onClick={() => handleTabClick("fourteen")}
                  className={activeTab === "fourteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2014</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#fifteen"
                  onClick={() => handleTabClick("fifteen")}
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
                  href="#sixteen"
                  onClick={() => handleTabClick("sixteen")}
                  className={activeTab === "sixteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2016</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#seventeen"
                  onClick={() => handleTabClick("seventeen")}
                  className={activeTab === "seventeen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2017</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#eighteen"
                  onClick={() => handleTabClick("eighteen")}
                  className={activeTab === "eighteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2018</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#nineteen"
                  onClick={() => handleTabClick("nineteen")}
                  className={activeTab === "nineteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-10">
              <div className="history-tab-content">
                <div className="tab-content">
                  {/* Tab 1 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "fourteen" ? "show active" : ""
                    }`}
                    id="fourteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2014</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Incorporation of{" "}
                            <strong>
                              Lighthouse Canton Pte Ltd in Singapore
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2 */}
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
                            Launch of{" "}
                            <strong> SageOne India Growth Fund</strong> , an{" "}
                            <strong>
                              {" "}
                              ​​India dedicated long-only equities fund
                            </strong>
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Exceeded
                            <strong> USD$100m</strong> of AUM & Advisory
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "sixteen" ? "show active" : ""
                    }`}
                    id="sixteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2016</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 4 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "seventeen" ? "show active" : ""
                    }`}
                    id="seventeen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2017</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 4 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "eighteen" ? "show active" : ""
                    }`}
                    id="eighteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2018</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
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
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Named{" "}
                            <strong>
                              Best Independent Wealth Manager for Asia Pacific
                            </strong>{" "}
                            at the Asian Private Banker Awards for Distinction
                            2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section vision-mission-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="why-us-div ">
                      <NavLink to="/">
                        <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Our Vision
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div>

                        <div className="why-content-para vision-mission-para">
                          <p className="para why-para">
                            Our investment strategies offer our investors
                            exposure to differentiated opportunities which have
                            a low correlation to broader markets. Our unwavering
                            focus on delivering attractive risk-adjusted returns
                            with capital preservation drives us to minimize
                            market cycle risks across our strategies.
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="why-us-div">
                      <NavLink to="/">
                        <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Our Mission
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div>

                        <div className="why-content-para vision-mission-para">
                          <p className="para why-para">
                            Our investment strategies offer our investors
                            exposure to differentiated opportunities which have
                            a low correlation to broader markets. Our unwavering
                            focus on delivering attractive risk-adjusted returns
                            with capital preservation drives us to minimize
                            market cycle risks across our strategies.
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
                  Our Vision
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
                      <h4 className="why-content-title">Our Vision</h4>
                      <p className="para why-para">
                        Our investment strategies offer our investors exposure
                        to differentiated opportunities which have a low
                        correlation to broader markets. Our unwavering focus on
                        delivering attractive risk-adjusted returns with capital
                        preservation drives us to minimize market cycle risks
                        across our strategies.
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
                  Our Mission
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
                      <h4 className="why-content-title">Our Mission</h4>
                      <p className="para why-para">
                        Our investment strategies offer our investors exposure
                        to differentiated opportunities which have a low
                        correlation to broader markets. Our unwavering focus on
                        delivering attractive risk-adjusted returns with capital
                        preservation drives us to minimize market cycle risks
                        across our strategies.
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

      <section className="philosophy-section">
        <div className="container">
          <h5 className="section-subtitle mb-5">our philosophy</h5>
          <div className="row image-row align-items-center">
            <div className="col-lg-6">
              <img
                src="/images/banners/market-fund1.webp"
                alt="philosophy-img"
                className="w-100"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="section-title mt-lg-0 mt-4">
                At Lighthouse Canton, enhanced risk-adjusted returns, capital
                preservation, and value creation for our stakeholders form the
                core of our investment philosophy.
              </h2>
            </div>
          </div>

          <div className="row mt-5 image-row">
            <div className="col-lg-6">
              <p className="para">
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
          </div>

          <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title mt-lg-0">
                Our approach of staying true to our core has been the
                cornerstone of our capital stewardship, with an unwavering focus
                on high governance standards. We are the preferred partners of
                our investors.
              </h2>
            </div>

            <div className="col-lg-6 d-lg-block d-none">
              <img
                src="/images/banners/market-fund2.webp"
                alt="philosophy-img"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="founders-note-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <h6 className="section-subtitle pb-5">Founder’s note</h6>
              <h2 className="banner-title offerings-title founders-text px-5">
                <i class="fa-solid fa-quote-left founders-left-quote"></i>
                Our courage to go beyond conventions and constantly explore new
                possibilities has been one of our core strengths.
                <i class="fa-solid fa-quote-right founders-right-quote"></i>
              </h2>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-5">
              <div className="founders-img-div pe-lg-5 pe-auto">
                <img
                  src="/images/team/abhay-agarwal-560x560.jpeg"
                  className="w-100"
                  alt="founders-img"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <p className="para">
                Since our inception in 2014, we have served a diverse range of
                investors. We strive to deliver systematic, resilient, and
                diversified strategies to help investors grow, manage and
                protect their wealth. Our robust value system drives our
                decision-making process to put your best interests forward. Our
                culture, integrity, passion, and expertise have spearheaded our
                fast growth as one of Asia's emerging financial institutions.
              </p>

              <p className="para">
                I have always wanted to create a sustainable global business
                that celebrates people's investment dreams. It is humbling to
                see our progress as an enterprising team that investors want to
                work with. Our courage to go beyond conventions and constantly
                explore new possibilities has been one of our core strengths. We
                offer an institutional framework to every client of Lighthouse
                Canton—one of our biggest differentiators.
              </p>

              <p className="para">
                We are a new-age global investment group with the ecosystem of a
                technology start-up and the culture of a seasoned financial
                institution. Our ability to anticipate and embrace change as we
                focus on your needs in this ever-evolving world is paramount to
                us. We remain committed to building a business that not only
                serves you now but also for many generations to come.
              </p>

              <h6 className="founders-name">
                <em>
                  - Shilpi Chowdhary, Group Chief Executive Officer, Lighthouse
                  Canton
                </em>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="teams-bg-section">
        <img
          src="/images/banners/team-bg.jpg"
          alt="team-bg"
          className="w-100"
        />
      </section>

      <section className="teams-section">
        <div className="container">
          <h6 className="section-subtitle">Meet the team</h6>
          <h2 className="section-title">The Driving Force</h2>
          <div className="row">
            <div className="col-lg-4 col-lg-6">
              <div className="team-div">
                <img
                  src="/images/team/abhay-agarwal-560x560.jpeg"
                  alt="team-img"
                  className="w-100"
                />
                <div className="team-content">
                  <h3 className="section-title team-name">Abhay Agarwal</h3>
                  <h5 className="section-subtitle">Managing Director, CIO</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-lg-6 mt-lg-0 mt-5">
              <div className="team-div">
                <img
                  src="/images/team/rajni-560x560.jpeg"
                  alt="team-img"
                  className="w-100"
                />
                <div className="team-content">
                  <h3 className="section-title team-name">Rajni Agarwal</h3>
                  <h5 className="section-subtitle">Director, Research</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-lg-6 mt-lg-0 mt-5">
              <div className="team-div">
                <img
                  src="/images/team/Ajay-modi-560x560.jpeg"
                  alt="team-img"
                  className="w-100"
                />
                <div className="team-content">
                  <h3 className="section-title team-name">Ajay Modi</h3>
                  <h5 className="section-subtitle">Director, Investments</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
