import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div other-banner-div">
            {/* <img src="/images/banners/blogdetail-banner.jpg" alt="banner-img" /> */}

            <div className="banner-content-div other-banner-content-div">
              <div className="container">
                <h1 className="banner-title">
                  Personal Data Protection Statement
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy-section">
        <div className="container">
          <div className="col-lg-9 col-md-12 col-12">
            <p className="para medium-para">
              Lighthouse Canton Pte Ltd. ("LCPL"), a regulated organization
              incorporated in the Republic of Singapore (Registration No:
              201422117K).LCPL and its related/affiliate companies (including
              Lighthouse Canton Capital (DIFC) Pte Ltd, LC Capital India)
              constitute LC Group. LC Group recognizes the importance of
              protecting Personal Data.
            </p>

            <p className="para medium-para">
              Protection of your Personal Data is important to us. LC Group’s
              Privacy Policy outlines how we manage the Personal Data we
              collect, use and disclose. This Privacy Policy applies to all
              departments and business units across LC Group. LC Group is
              committed to complying with the Personal Data Protection Act 2012
              (“PDPA”) and/ or applicable Data Protection laws. Please read this
              Privacy Policy so that you know and understand the purposes for
              which we collect, use and disclose your Personal Data.
            </p>

            <p className="para medium-para">
              LC Group adopts a pragmatic approach in our business conduct.
            </p>

            <p className="para medium-para">
              LC Group collects Personal Data only for what is required in
              business or in activities conducted by our organization and will
              properly destroy the Personal Data once there is no business or
              legal purpose for retaining it. We do not collect Personal Data
              randomly or indiscriminately without purpose.
            </p>

            <p className="para medium-para">
              The viewer of the site is solely responsible for the means he /she
              uses to access the Site and understand that the hardware,
              software, the Internet, Internet Service Provider, and other third
              parties involved in connecting him/ her to this Site may not
              perform as intended or desired.
            </p>

            <p className="para medium-para">
              LC Group does not disclose your Personal Data unless prior consent
              has been obtained and we have administrative, physical and
              Information Technology (IT) security measures in place to protect
              your Personal Data. This does not affect any rights which LC Group
              may have at law in connection with the collection, use or
              disclosure of your Personal Data.
            </p>

            <h6 className="section-subtitle">1. Your Personal Data</h6>
            <div className="single-disclaimer-para">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                your name, NRIC number, passport number or other identification
                number, telephone number(s), mailing address, email addresses
                and any other information relating to you which you have
                provided us in any form you may have submitted to us (i.e. job
                application forms, etc.), or in our other forms of interaction
                with you;
              </p>
            </div>
            <div className="single-disclaimer-para">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                information about your use of our websites and services,
                including cookies, IP addresses, email subscription and
                membership details (where applicable);
              </p>
            </div>
            <div className="single-disclaimer-para">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                your Curriculum Vitae, employment history, testimonials and
                referrals, previous drawn income, education background, medical
                history and disabilities and legal and bankruptcy history (if
                applicable); and
              </p>
            </div>

            <div className="single-disclaimer-para mb-5">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                your payment related information, such as your bank account
                details (where applicable).
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
