import React from "react";
import { NavLink } from "react-router-dom";

const SubscribeLetter = () => {
  return (
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
                        className="form-control subscribe-control"
                        id="first-name"
                        // placeholder="first name"
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
                        className="form-control subscribe-control"
                        id="last-name"
                        // placeholder="last name"
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
                        className="form-control subscribe-control"
                        id="email"
                        // placeholder="email"
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
                            *By submitting the contact form, you consent to all
                            data in the form being used in accordance with
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
  );
};

export default SubscribeLetter;
