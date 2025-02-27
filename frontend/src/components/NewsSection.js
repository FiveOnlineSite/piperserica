import React from "react";
import { NavLink } from "react-router-dom";
import NewsSlider from "./NewsSlider";

const NewsSection = () => {
  const newsSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 2, // Number of slides to show
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newsItems = [
    {
      news_img: "/images/banners/news1.png",
      news_type: "Venture Debt",
      news_subtitle: "Investments Insights",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news2.png",
      news_type: "Venture Debt",
      news_subtitle: "Investments Insights",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news1.png",
      news_type: "Venture Debt",
      news_subtitle: "Investments Insights",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news2.png",
      news_type: "Venture Debt",
      news_subtitle: "Investments Insights",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news1.png",
      news_type: "Venture Debt",
      news_subtitle: "Investments Insights",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
  ];

  return (
    <div className="news-insights-section pb-5">
      <div className="container">
        <div className="row align-items-center">
          <h5 className="section-subtitle">News & Insights</h5>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="banner-title offerings-title mt-3">
                Get all the latest updates
              </h2>
            </div>
            <div className="col-lg-6">
              <NavLink to="/insights" className="banner-btn blue-btn mt-0">
                View all
              </NavLink>
            </div>
          </div>

          <div className="row mt-5">
            <NewsSlider settings={newsSettings} item={newsItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
