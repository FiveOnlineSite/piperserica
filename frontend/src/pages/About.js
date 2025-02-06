import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const About = () => {
  const [activeTab, setActiveTab] = useState("asset");

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              <h2 className="section-title mt-5 d-flex flex-column">
                <i class="fa-solid fa-quote-left"></i>
                We commit to being the <strong>lighthouse</strong> for our
                investors and clients across asset management, wealth
                management, and founder ecosystems.
                <i class="fa-solid fa-quote-right"></i>
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

              <NavLink to="/" className="banner-btn blue-btn tabs-btn mt-0">
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
              <h2 className="section-title">We've come so far!</h2>
            </div>
            <div className="col-lg-9">
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

          <div className="row">
            <div className="col-lg-3">
              <div className="year-tab-links">
                <a
                  href="#fourteen"
                  onClick={() => handleTabClick("fourteen")}
                  className={activeTab === "fourteen" ? "active" : ""}
                >
                  <h4>2014</h4>
                </a>
                <a
                  href="#fifteen"
                  onClick={() => handleTabClick("fifteen")}
                  className={activeTab === "fifteen" ? "active" : ""}
                >
                  <h4>2015</h4>
                </a>
                <a
                  href="#sixteen"
                  onClick={() => handleTabClick("sixteen")}
                  className={activeTab === "sixteen" ? "active" : ""}
                >
                  <h4>2016</h4>
                </a>
                <a
                  href="#seventeen"
                  onClick={() => handleTabClick("seventeen")}
                  className={activeTab === "seventeen" ? "active" : ""}
                >
                  <h4>2017</h4>
                </a>
                <a
                  href="#seventeen"
                  onClick={() => handleTabClick("seventeen")}
                  className={activeTab === "seventeen" ? "active" : ""}
                >
                  <h4>2017</h4>
                </a>
                <a
                  href="#seventeen"
                  onClick={() => handleTabClick("seventeen")}
                  className={activeTab === "seventeen" ? "active" : ""}
                >
                  <h4>2017</h4>
                </a>
                <a
                  href="#seventeen"
                  onClick={() => handleTabClick("seventeen")}
                  className={activeTab === "seventeen" ? "active" : ""}
                >
                  <h4>2017</h4>
                </a>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="history-tab-content">
                <div className="tab-content">
                  {/* Tab 1 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "fourteen" ? "show active" : ""
                    }`}
                    id="asset"
                  >
                    <div className="history-content-div">
                      <h2>2014</h2>
                      <div className=""></div>

                      <NavLink
                        to="/"
                        className="banner-btn blue-btn tabs-btn mt-0"
                      >
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>

                  {/* Tab 2 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "treasury" ? "show active" : ""
                    }`}
                    id="treasury"
                  >
                    <div className="tabs-content-div">
                      <h3>Outsourced treasury management services</h3>
                      <p>
                        We match your investment requirements with your needs,
                        preferences, risk appetite, and long-term goals and
                        create an optimal global portfolio tailored for you. Our
                        world-class institutional framework aims to maximize
                        risk-adjusted returns through the modern portfolio
                        theory approach.
                      </p>

                      <NavLink
                        to="/"
                        className="banner-btn blue-btn tabs-btn mt-0"
                      >
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>

                  {/* Tab 3 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "global" ? "show active" : ""
                    }`}
                    id="global"
                  >
                    <div className="tabs-content-div">
                      <h3>
                        Diversify your portfolio with downside risk protection
                      </h3>
                      <p>
                        We match your investment requirements with your needs,
                        preferences, risk appetite, and long-term goals and
                        create an optimal global portfolio tailored for you. Our
                        world-class institutional framework aims to maximize
                        risk-adjusted returns through the modern portfolio
                        theory approach.
                      </p>

                      <NavLink
                        to="/"
                        className="banner-btn blue-btn tabs-btn mt-0"
                      >
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>

                  {/* Tab 4 */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "alternative" ? "show active" : ""
                    }`}
                    id="alternative"
                  >
                    <div className="tabs-content-div">
                      <h3>
                        Integrating alternatives into the traditional portfolio
                      </h3>
                      <p>
                        We match your investment requirements with your needs,
                        preferences, risk appetite, and long-term goals and
                        create an optimal global portfolio tailored for you. Our
                        world-class institutional framework aims to maximize
                        risk-adjusted returns through the modern portfolio
                        theory approach.
                      </p>

                      <NavLink
                        to="/"
                        className="banner-btn blue-btn tabs-btn mt-0"
                      >
                        contact us
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 328 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 176L155.5 176"
          stroke="#E50025"
          strokeMiterlimit="10"
          style={{ strokeDasharray: "146, 148", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M227.5 176L323.5 176"
          stroke="#E50025"
          strokeMiterlimit="10"
          style={{ strokeDasharray: "96, 98", strokeDashoffset: 0 }}
        ></path>
        <path
          width="7.77817"
          height="7.77817"
          transform="rotate(45 6 170)"
          fill="#E50025"
          d="M6 170 L13.77817 170 L13.77817 177.77817 L6 177.77817 Z"
          style={{ strokeDasharray: "32, 34", strokeDashoffset: 0 }}
        ></path>
        <path
          width="5.88856"
          height="5.88856"
          transform="rotate(45 323.039 171.672)"
          fill="#E50025"
          d="M323.039 171.672 L328.92755999999997 171.672 L328.92755999999997 177.56056 L323.039 177.56056 Z"
          style={{ strokeDasharray: "24, 26", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M139.812 53.3132V41.584H261.562V53.3132"
          stroke="#E50025"
          style={{ strokeDasharray: "146, 148", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M142.867 41.583V31.7305H257.814V41.583"
          stroke="#E50025"
          style={{ strokeDasharray: "135, 137", strokeDashoffset: 0 }}
        ></path>
        <path
          stroke="#E50025"
          d="M168.23397,22.3468A5.13003,5.13003 0,1,1 178.49403,22.3468A5.13003,5.13003 0,1,1 168.23397,22.3468"
          style={{ strokeDasharray: "33, 35", strokeDashoffset: 0 }}
        ></path>
        <path
          stroke="#E50025"
          d="M222.18797,22.3468A5.13003,5.13003 0,1,1 232.44803000000002,22.3468A5.13003,5.13003 0,1,1 222.18797,22.3468"
          style={{ strokeDasharray: "33, 35", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M155.062 18.5933V10.3828H245.847V18.5933"
          stroke="#E50025"
          style={{ strokeDasharray: "108, 110", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M152.484 31.2611V18.8281H168.202"
          stroke="#E50025"
          style={{ strokeDasharray: "29, 31", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M248.194 31.4959V18.5938H232.242"
          stroke="#E50025"
          style={{ strokeDasharray: "29, 31", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M176.174 10.3836L174.297 7.33398H226.844L224.498 10.3836"
          stroke="#E50025"
          style={{ strokeDasharray: "60, 62", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M185.328 6.86461L189.785 5.22252L192.835 3.34584L194.008 1H200.576"
          stroke="#E50025"
          style={{ strokeDasharray: "18, 20", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M215.82 6.86461L211.363 5.22252L208.314 3.34584L207.141 1H200.572"
          stroke="#E50025"
          style={{ strokeDasharray: "18, 20", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M193.062 3.11133H208.31"
          stroke="#E50025"
          style={{ strokeDasharray: "16, 18", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M190.25 4.98828L211.363 4.98828"
          stroke="#E50025"
          style={{ strokeDasharray: "22, 24", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M179.227 18.3591H188.61L190.252 16.4824H209.723L211.13 18.3591H220.983C221.765 20.0794 222.859 24.4114 220.983 27.9771"
          stroke="#E50025"
          style={{ strokeDasharray: "54, 56", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M221.313 27.7425L211.929 27.7425L210.287 29.6191L190.817 29.6191L189.409 27.7425L179.556 27.7425C178.775 26.0222 177.68 21.6902 179.556 18.1245"
          stroke="#E50025"
          style={{ strokeDasharray: "54, 56", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M138.643 57.0664V95.0691L136.766 97.4149L137.235 98.5878V112.897L136.062 115.009H134.655L136.766 118.997V146.912L134.655 148.554L136.062 150.431L134.655 157.703V159.814V165.21H133.716V168.963H132.309V173.42H127.617V176.001H182.041V174.593H177.349L180.164 98.5878L181.572 96.4766L180.633 95.5383H179.46C180.868 89.9864 187.014 79.0235 200.338 79.5865"
          stroke="#E50025"
          style={{ strokeDasharray: "301, 303", strokeDashoffset: 0 }}
        ></path>
        <path
          d="M262.037 57.0664V95.0691L263.914 97.4149L263.445 98.5878V112.897L264.617 115.009H266.025L263.914 118.997V146.912L266.025 148.554L264.617 150.431L266.025 157.703V159.814V165.21H266.963V168.963H268.371V173.42H273.062V176.001H218.639V174.593H223.331L220.516 98.5878L219.108 96.4766L220.046 95.5383H221.219C219.812 89.9864 213.666 79.0235 200.341 79.5865"
          stroke="#E50025"
          style={{ strokeDasharray: "301, 303", strokeDashoffset: 0 }}
        ></path>
      </svg>
    </Layout>
  );
};

export default About;
