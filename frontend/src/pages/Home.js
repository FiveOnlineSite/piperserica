import React from "react";

const Home = () => {
  return (
    <section className="home-banner w-100 overflow-hidden">
      <div className="row">
        <div className="video-banner">
          <video
            src="/videos/5726501-uhd_3840_2160_30fps.mp4"
            loop
            muted
            autoPlay
            className="w-100"
          ></video>

          <div className="home-banner-content">
            <div className="container">
              <h1 className="section-title">
                Innovative investments. <br /> Empowering growth.
              </h1>
              <div className="im-a-content-div">
                <h5>I am a ...</h5>
              </div>
              <div className="banner-contents">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <a href="#" className="content-div">
                          <div className="content-div-title">
                            <h2>
                              Corporate, Family Office & Individual Investor
                            </h2>
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>

                          <div className="content-para">
                            <div className="content-title">
                              <h5>
                                Corporate, Family Office & Individual Investor
                              </h5>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <p>
                              As a founder-led company, we foster innovative
                              ideas to build scalable businesses and personal
                              legacies that have a collective global impact.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="#" className="content-div">
                          <div className="content-div-title">
                            <h2>Institutional Investor</h2>
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                          <div className="content-para">
                            <div className="content-title">
                              <h5>Institutional Investor</h5>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <p>
                              As a founder-led company, we foster innovative
                              ideas to build scalable businesses and personal
                              legacies that have a collective global impact.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="#" className="content-div">
                          <div className="content-div-title">
                            <h2>Startup Founder & Entrepreneur</h2>
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                          <div className="content-para">
                            <div className="content-title">
                              <h5>Startup Founder & Entrepreneur</h5>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <p>
                              We leverage our intellectual capital and resources
                              to enhance entrepreneurial ecosystems.
                            </p>
                          </div>
                        </a>
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
  );
};

export default Home;
