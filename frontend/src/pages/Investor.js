import React from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const Investor = () => {
  const investorItem = [
    {
      image:
        "/images/banners/62184b3cd78853ebf6106ba5_2560a237988ae07923f488781b91dfd7.webp",
      subtitle: "",
      title: "All-weather, purposeful investment strategies",
      text: "Read More",
    },
    {
      image:
        "/images/banners/67864f896fdad3b987fea826_Website - Header Banners (60).png",
      subtitle: "Knowledge",
      title:
        "Goldilocks and The Bears - Lighthouse Canton Global Outlook Report 2025",
      text: "Our Strategies",
    },
  ];

  const investorSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout>
      <section className="investor-banner-section">
        <div className="row">
          <Slider {...investorSettings}>
            {investorItem.map((item, index) => (
              <div key={index} className="investor-banner-img">
                <img src={item.image} alt={`banner-img-${index}`} />

                <div className="investor-banner-content">
                  <div className="container">
                    {item.subtitle && (
                      <h6 className="banner-subtitle">{item.subtitle}</h6>
                    )}
                    <h1 className="banner-title">{item.title}</h1>
                    <div className="banner-btn">
                      <NavLink>
                        {item.text}
                        <i className="fa-solid fa-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="section-subtitle">What we do</h5>
              <h2 className="section-title">
                Unlocking differentiated growth opportunities across market
                cycles
              </h2>
            </div>
            <div className="col-lg-7">
              <p className="para">
                We invest on behalf of some of the world's largest institutional
                investors, including pension funds, sovereign funds, and
                insurance companies, to drive economic and sustainable impact.
                Our responsible, diversified investment strategies allow our
                investors to benefit from differentiated growth opportunities
                across all market cycles, focusing on capital preservation and
                attractive risk-adjusted returns. As a global investment
                company, we have teams in Singapore, Dubai, and India. We drive
                value creation by applying high-quality processes and superior
                governance standards along with a robust risk management
                framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investor;
