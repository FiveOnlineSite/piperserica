import React from "react";
import { NavLink } from "react-router-dom";
import NewsSlider from "./NewsSlider";

const NewsSection = () => {
  const newsSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 3, // Number of slides to show
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

  // const newsItems = [
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news2.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news2.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  // ];

  const newsItems = [
 
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/1630600049443.webp",
      content_type: "Angel Fund",
      news_title:"Space-tech firm Astrogate Labs raises $1.3 million in pre-series round led by Piper Serica",
      date: "January 30, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/space-tech-firm-astrogate-labs-raises-1-3-million-in-pre-series-round-led-by-piper-serica/articleshow/118601900.cms",
    },
    {
      news_img: "/images/news/imUkA8Iz2IpmzaEI3mcm.webp",
      // insight_type: "News and More",
      content_type: "Angel Fund",
      news_title: "Astrogate Labs raises $1.3 Mn led by Piper Serica",
      date: "January 30, 2025",
      link: "https://entrackr.com/snippets/astrogate-labs-raises-13-mn-led-by-piper-serica-8760743",
    },
    {
      news_img: "/images/news/IMG_0039-760x570.jpg",
      // insight_type: "Company Updates",
      content_type: "Angel Fund",
      news_title:
        "Spacetech Startup Astrogate Bags Funding To Develop Laser Communication Terminals",
      date: "January 30, 2025",
      link: "https://inc42.com/buzz/spacetech-startup-astrogate-bags-funding-to-develop-laser-communication-terminals",
    },
    {
      // insight_type: "Angel Fund",
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      content_type: "Angel Fund",
      news_title: "Rupeeflo Raises $1 Mn From Piper Serica Angel Fund",
      date: "January 30, 2025",
      link: "https://www.bwdisrupt.com/article/rupeeflo-raises-1-mn-from-piper-serica-angel-fund-547569",
    },
    {
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      // insight_type: "Angel Fund",
      content_type: "Angel Fund",
      news_title: "Rupeeflo raises $1 Mn from Piper Serica",
      date: "January 30, 2025",
      link: "https://entrackr.com/snippets/rupeeflo-raises-1-mn-from-piper-serica-8706125",
    },
    {
      news_img:
        "/images/news/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund.webp",
      // insight_type: "Company Updates",
      content_type: "Angel Fund",
      news_title:
        "Rupeeflo raised $1 million in pre-seed round led by Piper Serica Angel Fund",
      date: "January 30, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund/articleshow/118119714.cms",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/maxresdefault (1).jpg",
      content_type: "Videos",
      news_title:
        "Piper Serica x Astrogate Labs: The Next Big Leap in Space Tech",
      date: "January 30, 2025",
      link: "https://youtu.be/XykqfFfr67c",
    },
    {
      news_img: "/images/news/maxresdefault.jpg",
      // insight_type: "News and More",
      content_type: "Videos",
      news_title: "Piper Serica x Rupeeflo: Fintech Revolution Unlocked!",
      date: "January 30, 2025",
      link: "https://youtu.be/h5ys474Z460",
    },
    {
      news_img: "/images/news/V5DCqNsUIO8-HD.jpg",
      // insight_type: "Company Updates",
      content_type: "Videos",
      news_title:
        "The Next 10 Years of India: A Roadmap for Long-Term Investors",
      date: "January 30, 2025",
      link: "https://youtu.be/V5DCqNsUIO8",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/maxresdefault (2).jpg",
      content_type: "Videos",
      news_title: "Auto Industry Shake-Up: Opportunities Before Budget 2025",
      date: "January 30, 2025",
      link: "https://youtu.be/05Crr5bFAlM",
    },
    {
      news_img: "/images/news/maxresdefault (3).jpg",
      // insight_type: "News and More",
      content_type: "Videos",
      news_title:
        "US Fed Rate Cuts: Impact on Indian Economy & Emerging Sectors to Watch!",
      date: "January 30, 2025",
      link: "https://youtu.be/lOfL087qO_E",
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
