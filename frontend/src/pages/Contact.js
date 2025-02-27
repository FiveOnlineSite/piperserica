import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Contact = () => {
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
                <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6>
                <h1 className="banner-title">Contact</h1>
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

      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <h6 className="section-subtitle">Get in touch</h6>
                <h2 className="section-title mt-lg-3 mt-4">Let's Talk</h2>
                <p className="para small-para">
                  Our global team of specialists is available to help with your
                  enquiry. Please provide us more details of what we can help
                  with and a member of the team will be in touch.
                </p>
                <form>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div class="mb-3">
                        <label for="name" class="form-label">
                          Name*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          // placeholder="eg: john"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div class="mb-3">
                        <label for="phone" class="form-label">
                          Phone Number*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          // placeholder="0000000000"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          // placeholder="eg: johndoe@xyz.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="message" class="form-label">
                          Message <span>(optional)</span>
                        </label>
                        <textarea
                          type="text"
                          class="form-control"
                          id="message"
                          rows={"4"}
                          // placeholder="start typing....."
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-3 d-flex justify-content-start">
                          <NavLink
                            to="/"
                            className="banner-btn blue-btn mt-0 mb-3"
                          >
                            Send Enquiry
                          </NavLink>
                        </div>
                        <div className="col-lg-9">
                          <p className="para subscribe-para mb-0">
                            <i>
                              *By submitting the contact form, you consent to
                              all data in the form being used in accordance with
                              <a href="#">
                                {" "}
                                Piper Serics's data privacy policy
                              </a>
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

      <section className="location-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="section-subtitle">our locations</h6>
              <h2 className="section-title mt-lg-3 mt-4">India</h2>

              <div className="location-div mt-5">
                <h6 className="section-subtitle mb-4">
                  Piper Serica Advisors Pvt. Ltd.
                </h6>
                {/* 
                <p className="para small-para">
                  Name of the fund: Piper Serica Angel Fund
                </p>

                <p className="para small-para">
                  Category: Category I AIF – Venture Capital Fund – Angel Fund
                </p>

                <p className="para small-para">
                  Address: A Wing, 905/906, Marathon Innova Nextgen, Ganpatrao
                  Kadam Marg, Opp-Peninsula Corporate Park, Lower Parel, Mumbai
                  – 400013
                </p>

                <p className="para small-para">
                  Registration Number: IN/AIF1/21-22/1028
                </p>

                <p className="para small-para ">
                  Name of the investment manager: Piper Serica Advisors Private
                  Limited
                </p>

                <p className="para small-para">
                  Address of the investment manager: A Wing, 905/906, Marathon
                  Innova Nextgen, Ganpatrao Kadam Marg, Opp-Peninsula Corporate
                  Park, Lower Parel, Mumbai – 400013
                </p> */}

                <div className="social-media-div mt-4">
                  <a href="tel:022-66545370" className="single-social-media">
                    <i class="fa-solid fa-phone"></i>
                    <p className="para small-para">022-66545370</p>
                  </a>
                  <a
                    href="mailto:contact@piperserica.com"
                    className="single-social-media"
                  >
                    <i class="fa-solid fa-envelope"></i>
                    <p className="para small-para">contact@piperserica.com</p>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/YAxpnG7w3bVksVMf7"
                    className="single-social-media"
                  >
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="para small-para">
                      A Wing, 905/906, Marathon Innova Nextgen, Ganpatrao Kadam
                      Marg, Opp-Peninsula Corporate Park, Lower Parel, Mumbai –
                      400013
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-4">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7544.782083117704!2d72.8177315!3d19.0024829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf0da9017b63%3A0x3ffea97698ac957c!2sPiper%20Serica!5e0!3m2!1sen!2sin!4v1739949925552!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
