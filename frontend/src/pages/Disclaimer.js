import React from "react";
import Layout from "../components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div other-banner-div">
            {/* <img src="/images/banners/blogdetail-banner.jpg" alt="banner-img" /> */}

            <div className="banner-content-div other-banner-content-div">
              <div className="container">
                <h1 className="banner-title">Disclaimer</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="disclaimer-para-div">
        <div className="container">
          <div className="col-lg-9">
            <p className="para">
              This website/information is provided to you (the viewer) on an "as
              is" and "where-is" basis, without any warranty.
            </p>

            <p className="para">
              This website/information is provided to you (the viewer) on an "as
              is" and "where-is" basis, without any warranty.
            </p>

            <p className="para">
              This website/information is provided to you (the viewer) on an "as
              is" and "where-is" basis, without any warranty.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
