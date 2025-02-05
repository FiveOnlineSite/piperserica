import React from "react";
import Layout from "../components/Layout";

const Funds = () => {
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
                <h6 className="banner-subtitle">Private market funds</h6>
                <h1 className="banner-title">LC Venture Debt Fund</h1>
                <p className="banner-para">Capital to scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Funds;
