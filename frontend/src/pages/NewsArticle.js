import React from "react";
import Layout from "../components/Layout";

const NewsArticle = () => {
  const newsItems = [
    {
      insight_type: "Investments Insights",
      news_img: "/images/banners/news1.png",
      content_type: "Events",
      news_title:
        "Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news2.png",
      insight_type: "News and More",
      content_type: "Knowledge",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news1.png",
      insight_type: "Company Updates",
      content_type: "Press Release",
      news_title:
        "Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
  ];

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
                <h6 className="banner-subtitle">Press Release</h6>
                <h1 className="banner-title">News Article</h1>
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

      <section className="insights-section">
        <div className="container">
          {/* News Items */}
          <div className="row">
            {newsItems.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-3 mt-5"
                key={index}
              >
                <div className="news-div">
                  <div className="news-img-div">
                    <img
                      src={`${process.env.PUBLIC_URL}${item.news_img}`}
                      alt="news"
                      className="news-img w-100"
                    />
                    <div className="news-type">
                      <h6 className="section-subtitle">{item.insight_type}</h6>
                    </div>
                  </div>
                  <div className="news-content-div">
                    <h5>{item.content_type}</h5>
                    <h3 className="section-title mt-3">{item.news_title}</h3>
                    <h6 className="mt-5">{item.date}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
