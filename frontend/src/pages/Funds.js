import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import StickyContact from "../components/StickyContact";
import CompanyPortfolio from "../components/CompanyPortfolio";
import ArticleSection from "../components/ArticleSection";

const Funds = () => {
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
                <h6 className="banner-subtitle">Private market funds</h6>
                <h1 className="banner-title"> Piper Serica Angel Fund</h1>
                <p className="banner-para">Capital to scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-fund-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="about-fund-div">
              <h6 className="section-subtitle mb-4">
                about Piper Serica Angel Fund
              </h6>
              <p className="para">
              Piper Serica Angel Fund was launched in 2022 as its first venture capital fund by Piper Serica. The fund has a corpus of Rs. 300 crore. It is registered with SEBI as a Category 1 AIF. The Fund has a life of 10 years extendable by another 2 years. It can invest in companies that follow the DPIT definition of a startup. The Fund is closed for new subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="facts-div">
                    <h2 className="facts-title">35</h2>
                    <h6 className="para">Companies</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">₹350 Cr</h2>
                    <h6 className="para">Fund Size</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">₹344.75 Cr</h2>
                    <h6 className="para">Called in Capital</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section funds-features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">features</h6>
                <h3 className="section-title mb-lg-3 mb-4">Why This Fund</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  <strong>Value added partners:</strong> Our founders look at us as value added partners beyond the financial capital that we bring. We work with the founders to scale up the company by helping build the organization, acquire customers and help with further fund raises.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  <strong>Network:</strong> We believe that the biggest help we bring to the founders is our extensive network that spans many industries and skill sets. We have a very varied set of LPs and through our public market funds we are connected with some of the largest companies in the country.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Founder first approach:</strong> We love to get in the trenches with the founders and help the founders ride through the tough times. Every start up faces tough challenges. Our Founders always find us by their side as they meet these challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-thesis-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">Growth Strategy</h6>
                <h3 className="section-title mb-lg-3 mb-4">Investor Thesis</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  The Fund invests in early-stage companies that have developed a proprietary deep IP / deep tech and are in the early stage of commercialization. We are sector agnostic though our focus areas are Spacetech, AI, advanced electronics, semicon design and fintech. 
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  We like to invest in startups that are bringing a significant degree of value to their customers. We need to see some product market fit, even if early. Our ticket size is Rs. 10 crore. While we are happy to co-invest with another lead investor there are instances where we are the lead or the sole investor.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  Our decision-making process is fairly quick. We use our proprietary AI tool yoda.ai to filter investment opportunities. 
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                  We have a very collaborative approach to investing and prefer to work with multiple co-investors bringing different value to the startup.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funds-article-section">
        <ArticleSection />
      </section>

      <CompanyPortfolio />

      <section className="fund-info-section mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="fund-title-div">
                <h6 className="section-subtitle mb-4">Insights</h6>
                <h3 className="section-title mb-lg-3 mb-4">Fund Information</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="fund-content-div">
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of Fund: </strong> Piper Serica Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Category: </strong> Category I AIF - Venture Capital
                    Fund - Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address: </strong> 127, T.V. Industrial Estate,
                    Sudam Kalu Marg, Opposite Glaxo Smith Kline, Worli Mumbai -
                    400030
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Registration Number: </strong> IN/ AIF1/ 21-22/ 1028
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of Fund Manager: </strong> Piper Serica
                    Advisors Private Limited
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address of Fund Manager: </strong> No. 905 & 906, A
                    Wing, 9th Floor, Marathon Innova Nextgen, Off K. K. Marg,
                    Lower Parel, Mumbai - 400013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyContact />
    </Layout>
  );
};

export default Funds;
