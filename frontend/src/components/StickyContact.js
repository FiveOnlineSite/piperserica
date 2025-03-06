import React from "react";
import { NavLink } from "react-router-dom";

const StickyContact = () => {
  return (
    <section className="sticky-contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="section-title">
            Want to know more about Piper Serica Numero Uno India Fund?
            </h4>
          </div>

          <div className="col-lg-6 mt-lg-0 mt-3">
            <NavLink to="/" className="banner-btn blue-btn mt-0">
              Contact us
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyContact;
