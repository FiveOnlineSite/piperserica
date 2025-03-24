import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const NewsArticle = () => {
  const newsItems = [
    {
      insight_type: "Investments Insights",
      news_img: "/images/news/1630600049443.webp",
      content_type: "Events",
      news_title:
        "Space-tech firm Astrogate Labs raises $1.3 million in pre-series round led by Piper Serica",
      date: "January 30, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/space-tech-firm-astrogate-labs-raises-1-3-million-in-pre-series-round-led-by-piper-serica/articleshow/118601900.cms",
    },
    {
      news_img: "/images/news/imUkA8Iz2IpmzaEI3mcm.webp",
      insight_type: "News and More",
      content_type: "Knowledge",
      news_title: "Astrogate Labs raises $1.3 Mn led by Piper Serica",
      date: "January 30, 2025",
      link: "https://entrackr.com/snippets/astrogate-labs-raises-13-mn-led-by-piper-serica-8760743",
    },
    {
      news_img: "/images/news/IMG_0039-760x570.jpg",
      insight_type: "Company Updates",
      content_type: "Press Release",
      news_title:
        "Spacetech Startup Astrogate Bags Funding To Develop Laser Communication Terminals",
      date: "January 30, 2025",
      link: "https://inc42.com/buzz/spacetech-startup-astrogate-bags-funding-to-develop-laser-communication-terminals",
    },
    {
      insight_type: "Investments Insights",
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      content_type: "Events",
      news_title: "Rupeeflo Raises $1 Mn From Piper Serica Angel Fund",
      date: "January 30, 2025",
      link: "https://www.bwdisrupt.com/article/rupeeflo-raises-1-mn-from-piper-serica-angel-fund-547569",
    },
    {
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      insight_type: "News and More",
      content_type: "Knowledge",
      news_title: "Rupeeflo raises $1 Mn from Piper Serica",
      date: "January 30, 2025",
      link: "https://entrackr.com/snippets/rupeeflo-raises-1-mn-from-piper-serica-8706125",
    },
    {
      news_img:
        "/images/news/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund.webp",
      insight_type: "Company Updates",
      content_type: "Press Release",
      news_title:
        "Rupeeflo raised $1 million in pre-seed round led by Piper Serica Angel Fund",
      date: "January 30, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund/articleshow/118119714.cms",
    },
  ];

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/News-Articles.jpg`}
              alt="banner-img"
            />
            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Press Release</h6> */}
                <h1 className="banner-title">News Article</h1>
                {/* <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p> */}
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
                className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-5"
                key={index}
              >
                <NavLink to={item.link} target="_blank">
                  <div className="news-div mt-4">
                    <div className="news-img-div">
                      <img
                        src={`${process.env.PUBLIC_URL}${item.news_img}`}
                        alt="news"
                        className="news-img w-100"
                      />
                      <div className="news-type">
                        <h6 className="section-subtitle">
                          {item.insight_type}
                        </h6>
                      </div>
                    </div>
                    <div className="news-content-div">
                      <h5>{item.content_type}</h5>
                      <h3 className="section-title mt-3">{item.news_title}</h3>
                      <h6 className="mt-5">{item.date}</h6>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
