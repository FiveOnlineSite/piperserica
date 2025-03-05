import React, { useState } from "react";
import Layout from "../components/Layout";
import NewsSection from "../components/NewsSection";

const OurImpact = () => {
  const [activeTab, setActiveTab] = useState("life");

  // Handle tab click
  const handleTabClick = (tab, event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    setActiveTab(tab);
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/our-impact-banner.webp`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">Creating Meaningful Change</h6>
                <h1 className="banner-title">Our Impact</h1>
                <p className="banner-para">
                  Our commitment to making a positive impact drives everything
                  we do. Through innovative solutions, community engagement, and
                  sustainable initiatives, we strive to make a lasting
                  difference in the lives we touch and the environments we care
                  for.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-commitment-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="commitment-title-div">
                <h6 className="section-subtitle">Our Commitment to</h6>
                <h2 className="section-title offerings-title mt-4">
                  Responsible Investments
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="para">
              At Piper Serica, we are deeply committed to responsible investing across both listed companies and startups. We integrate Environmental, Social, and Governance (ESG) criteria into our investment process, ensuring that the businesses we support align with sustainable and ethical practices.
              </p>

              <p className="para">
              Our approach goes beyond financial growth—we actively seek innovative companies that drive positive social and environmental impact while delivering strong returns. We engage with our portfolio companies to foster responsible business practices, ensuring that our investments contribute not only to wealth creation but also to sustainable development within India’s dynamic market.
              </p>

              <div className="our-commitment-tabs">
                <a
                  href="#"
                  onClick={(event) => handleTabClick("life", event)}
                  className={activeTab === "life" ? "active" : ""}
                >
                  <h4>Life Sciences Real Estate</h4>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("smes", event)}
                  className={activeTab === "smes" ? "active" : ""}
                >
                  <h4>SMEs across Asia</h4>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("early", event)}
                  className={activeTab === "early" ? "active" : ""}
                >
                  <h4>Early Stage and Growth Companies</h4>
                </a>
              </div>

              <div className="tab-content">
                {/* Tab 1 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "life" ? "show active" : ""
                  }`}
                  id="life"
                >
                  <div className="commitment-content-div">
                    {" "}
                    <h6 className="commitment-title">
                      Supporting innovation through the leasing and management
                      of sustainable spaces.
                    </h6>
                    <div className="commitment-content">
                      <p className="para small-para">
                        Responsible Investing is a critical part of our
                        objective to ensure that our life science infrastructure
                        is energy efficient and withstands the tests of time and
                        the changing climate. We pursue green building
                        certifications for all our new developments. The
                        portfolio’s commitment to LEED certifications creates
                        sustainability and value for tenants, the ecosystem and
                        ultimately benefits investors as well. Within
                        Neovantage’s operating portfolio 65% is LEED certified.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 2 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "smes" ? "show active" : ""
                  }`}
                  id="smes"
                >
                  <div className="commitment-content-div">
                    {" "}
                    <h6 className="commitment-title">
                      Bridging Capital through supply chain financing and credit
                      facilities.
                    </h6>
                    <div className="commitment-content">
                      <p className="para small-para">
                        SMEs are the backbone of the Asian economy, accounting
                        for a significant portion of the region's GDP and
                        providing employment opportunities for a large number of
                        people. Private market strategies have helped bridge the
                        gap in financing from traditional lenders by providing
                        SMEs with access to adaptable alternative financing
                        options, such as supply chain financing and secured
                        bridge financing, that can help them to grow and expand.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 3 */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "early" ? "show active" : ""
                  }`}
                  id="early"
                >
                  <div className="commitment-content-div">
                    {" "}
                    <h6 className="commitment-title">
                      Empowering growth through venture capital and venture debt
                      investments
                    </h6>
                    <div className="commitment-content">
                      <p className="para small-para">
                        By providing innovative startups and technology
                        companies with the capital and resources they need to
                        grow and expand, our strategies are helping to drive
                        innovation and technological progress across the region
                        with the potential to disrupt traditional industries and
                        create new markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="empowering-growth-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="empowering-title-div">
                <h6 className="section-subtitle">Empowering Growth Through</h6>
                <h2 className="section-title offerings-title mt-4">
                Purposeful Investing
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="para">
              At Piper Serica Advisors, we believe in investing with purpose—driving sustainable outcomes for our investors while fostering positive societal impact. Our approach extends beyond traditional financial metrics, identifying opportunities in listed companies and startups that champion innovation, sustainability, and inclusive economic development.
              </p>
              <p className="para">
              By backing businesses that uphold strong governance, environmental responsibility, and social impact, we empower entrepreneurs to scale their ventures while contributing to India’s long-term growth. This commitment to purposeful investing allows us to create lasting value not just for our investors but also for the communities and industries we support, shaping a more resilient and responsible economic future.
              </p>

              <div className="empowering-points-div">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        01
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        02
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        03
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        04
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        05
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="empowering-point">
                      <h3 className="section-title empowering-point-title">
                        06
                      </h3>
                      <p className="para small-para">
                        We will incorporate ESG issues into investment analysis
                        and decision-making processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 pt-0 news-insights-section">
        <NewsSection />
      </section>
    </Layout>
  );
};

export default OurImpact;
