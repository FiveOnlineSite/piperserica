import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { NavLink, useLocation } from "react-router-dom";
import "../../../src/svg.css";
const About = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const teamContent = [
    {
      image: "/images/team/abhay-agarwal-560x560.jpeg",
      name: "Abhay Agarwal",
      linkedin_url: "https://www.linkedin.com/in/abhay-agarwal-piper/",
      designation: "Founder & Fund Manager",
    },
    {
      image: "/images/team/rajni-560x560.jpeg",
      name: "Rajni Agarwal",
      linkedin_url: "https://www.linkedin.com/in/rajni-agarwal-99352218b/",
      designation: "Director, Research",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "https://www.linkedin.com/in/ajmodi/",
      designation: "Director, Investments",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Rahul Chaudhari",
      linkedin_url: "https://www.linkedin.com/in/rahulchaudhari73/",
      designation: "Head - Ops & Compliance",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Hardik Dua",
      linkedin_url: "https://www.linkedin.com/in/hardik-dua/",
      designation: "Associate",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Satyadeep Singh",
      linkedin_url: "https://www.linkedin.com/in/thesatyadeepsingh/",
      designation: "Associate",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Preet Malde",
      linkedin_url: "https://www.linkedin.com/in/preet-malde-4a37991ba/",
      designation: "Analyst",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Mukund Agarwal",
      linkedin_url: "https://www.linkedin.com/in/mukundagarwal3/",
      designation: "Analyst",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Akshay Kadam",
      linkedin_url: "https://www.linkedin.com/in/akshay-kadam-98363525b/",
      designation: "Senior Manager - Investor Relations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Anuja Mohare",
      linkedin_url: "https://www.linkedin.com/in/anuja-mohare-8a5150147/",
      designation: "Senior Manager - Operations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Yash Gandhi",
      linkedin_url: "https://www.linkedin.com/in/yash-gandhi-28576a357/",
      designation: "Manager - Finance & Operations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Rahul Mishra",
      linkedin_url: "https://www.linkedin.com/in/rahul-mishra02/",
      designation: "Manager - Operations & Client Servicing",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Vishal Kudtarkar",
      linkedin_url: "https://www.linkedin.com/in/vishal-kudtarkar-262273246/",
      designation: "Assistant Manager - Finance",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Shubham Kumbhar",
      linkedin_url: "https://www.linkedin.com/in/11shubhamk/",
      designation: "Manager - Marketing",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Abhijeet Gaonkar",
      linkedin_url: "https://www.linkedin.com/in/abhijeet-gaonkar-446315339/",
      designation: "Senior Manager - Administration",
    },
  ];

  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the DOM to update before trying to scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay ensures the element is rendered
    }
  }, [hash, pathname]); // Re-run when pathname or hash changes

  const handleNavClick = (event, targetHash) => {
    if (hash === targetHash) {
      event.preventDefault(); // Prevent scrolling when already at the target section
    }
  };

  // const [activeTab, setActiveTab] = useState("twenty-two");
  // const [gifSources, setGifSources] = useState({
  //   fourteen: "/images/history/Getway-of-India-2004-GIF (2).gif",
  //   fifteen: "/images/history/Target-2015-GIF.gif",
  //   nineteen: "/images/history/UpArrow-2019-GIF (1).gif",
  //   twenty: "/images/history/Dollar-2020-GIF (2).gif",
  //   "twenty-two": "/images/history/Rocket-2024-GIF.gif",
  // });

  // const handleTabClick = (tab, event) => {
  //   event.preventDefault();
  //   setActiveTab(tab);

  //   // Reload all GIFs by appending a timestamp
  //   // setGifSources((prevSources) => {
  //   //   const updatedSources = {};
  //   //   Object.keys(prevSources).forEach((key) => {
  //   //     updatedSources[key] = `${prevSources[key]}?t=${Date.now()}`;
  //   //   });
  //   //   return updatedSources;
  //   // });
  // };

  // useEffect(() => {
  //   Object.values(gifSources).forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  const [activeTab, setActiveTab] = useState("fourteen");

  const baseGifSources = {
    fourteen: "/images/history/Getway-of-India-2004-GIF (2).gif",
    fifteen: "/images/history/Target-2015-GIF.gif",
    nineteen: "/images/history/UpArrow-2019-GIF (1).gif",
    twenty: "/images/history/Dollar-2020-GIF (2).gif",
    "twenty-two": "/images/history/Rocket-2024-GIF (1) (1).gif",
  };

  // ✅ Initialize gifSources with timestamp only for the initial activeTab
  const [gifSources, setGifSources] = useState(() => {
    const sourcesWithTimestamp = { ...baseGifSources };
    sourcesWithTimestamp[activeTab] = `${
      baseGifSources[activeTab]
    }?t=${Date.now()}`;
    return sourcesWithTimestamp;
  });

  // ✅ On tab click, only update GIF if tab is different
  const handleTabClick = (tab, event) => {
    event.preventDefault();
    if (tab === activeTab) return;

    setActiveTab(tab);
    setGifSources((prev) => ({
      ...prev,
      [tab]: `${baseGifSources[tab]}?t=${Date.now()}`,
    }));
  };

  // ✅ Preload all base GIFs once on mount
  useEffect(() => {
    Object.values(baseGifSources).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Layout>
      <section className="banner-section" id="banner-div">
        <div className="row">
          <div className="banner-img-div">
            <video
              src={`${process.env.PUBLIC_URL}/videos/AboutPageVideo 2.mp4`}
              muted
              autoPlay
              loop
              alt="banner-img"
              playsInline
              preload="auto"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">About Piper Serica</h1>
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
      <section className="investment-journey-section">
        <div className="container">
          <h6 className="section-subtitle mb-4">
            Investing in future. Backing emerging companies.
          </h6>

          <p className="para justify-para">
            Piper Serica is a long-only active equity asset manager that employs
            various equity investment strategies in India. We manage multiple
            funds that invest in Indian listed companies for domestic and
            foreign individuals and institutions. We also manage a fund that
            invests in Indian startups that are building business models based
            on deep tech. We have been investing in Indian companies for over 30
            years and have a very solid understanding of how to succeed while
            investing in India navigating through various risks, most of them
            unique to India as an emerging market.
          </p>
          <p className="para justify-para">
            The funds that we manage cater to different risk-return profiles and
            objectives of our investors. We have an edge over our peers due to
            our deep research and disciplined approach to investing. Our
            research team is extensively trained in our proprietary research
            processes which we have developed and largely automated. To ensure
            skin in the game, our fund management team makes all their public
            and private investments through the funds managed by Piper Serica.
            We are a fund management company owned by our management team, with
            a majority stake held by women.
          </p>
          {/* <div className="row align-items-start"> */}
          {/* <div className="col-lg-5">
              <h2 className="section-title mt-5 journey-text">
                <i className="fa-solid fa-quote-left journey-left-quote"></i>
                We commit to being the <strong>lighthouse</strong> for our
                investors and clients across asset management, wealth
                management, and founder ecosystems.
                <i className="fa-solid fa-quote-right journey-right-quote"></i>
              </h2>
            </div> */}
          {/* <div className="col-lg-7"> */}
          {/* <NavLink
                to="#history-div"
                className="banner-btn blue-btn tabs-btn mt-lg-3 mt-5"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  const element = document.querySelector("#history-div");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                our history
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
      <div id="history-section"></div>
      <section className="history-section">
        <div className="container">
          <h6 className="section-subtitle">History</h6>
          <div className="row align-items-start">
            {/* <div className="col-lg-3"> */}
            {/* <h2 className="section-title mt-lg-3 mt-4">We've come so far!</h2> */}
            {/* </div> */}
            {/* <div className="col-lg-8 offset-lg-1 offset-0 mt-lg-0 mt-5">
              <div className="fund-content-div">
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    Piper Serica started operations in 2004.
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2015, Piper Serica received its first registration from
                    the Securities and Exchange Board of India (SEBI) as a
                    Registered Investment Advisor.
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2019, we received the registration from the Securities
                    and Exchange Board of India (SEBI) for launching Portfolio
                    Management Service (PMS).
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2020, Piper Serica launched its Foreign Portfolio
                    Investor (FPI) Fund based in Mauritius.
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    In 2022, launched Piper Serica Angel Fund, an early-stage VC
                    fund registered with SEBI as a Category 1 AIF.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="row mt-4 history-row">
            <div className="col-lg-2">
              <div className="year-tab-links">
                <a
                  href="#"
                  onClick={(event) => handleTabClick("fourteen", event)}
                  className={activeTab === "fourteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2004</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("fifteen", event)}
                  className={activeTab === "fifteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2015</h4>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  onClick={(event) => handleTabClick("nineteen", event)}
                  className={activeTab === "nineteen" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("twenty", event)}
                  className={activeTab === "twenty" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  onClick={(event) => handleTabClick("twenty-two", event)}
                  className={activeTab === "twenty-two" ? "active" : ""}
                >
                  <div>
                    <div className="d-flex w-100 align-items-center">
                      <span></span>
                      <h4>2022</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-10">
              <div className="history-tab-content">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "fourteen" ? "show active" : ""
                    }`}
                    id="fourteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2004</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica started{" "}
                            <strong>operations in 2004</strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        {/* <img
                          src={gifSources["fourteen"]}
                          className="w-100"
                          alt="history-img"
                          loading="lazy"
                          rel="preload"
                        /> */}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          width="100%"
                          height="100%"
                          version="1.1"
                          style={{
                            shapeRendering: "geometricPrecision",
                            textRendering: "geometricPrecision",
                            imageRendering: "optimizeQuality",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                          }}
                          viewBox="0 0 1080 350"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlnsXodm="http://www.corel.com/coreldraw/odm/2003"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <g id="_1440683975952">
                              <polyline
                                class="fil0 str0 svg-elem-1"
                                points="601,181.51 486.97,181.51 486.97,335.43 15,335.43 "
                              ></polyline>
                              <polyline
                                class="fil0 str0 svg-elem-2"
                                points="1065,335.43 916.87,335.43 916.87,181.51 "
                              ></polyline>
                              <polygon
                                class="fil0 str0 svg-elem-3"
                                points="470.79,170.35 601,170.35 601,181.51 480.85,181.51 "
                              ></polygon>
                              <line
                                class="fil0 str0 svg-elem-4"
                                x1="601"
                                y1="134.53"
                                x2="600.82"
                                y2="335.23"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-5"
                                x1="802.57"
                                y1="134.27"
                                x2="802.4"
                                y2="334.97"
                              ></line>
                              <polygon
                                class="fil0 str0 svg-elem-6"
                                points="932.88,170.35 802.68,170.35 802.68,181.51 922.82,181.51 "
                              ></polygon>
                              <polyline
                                class="fil0 str0 svg-elem-7"
                                points="573.9,335.43 573.9,207.85 511.69,207.85 511.69,335.43 "
                              ></polyline>
                              <path
                                class="fil0 str0 svg-elem-8"
                                d="M562.97 335.43l0 -92.71c-5.27,-31.96 -36.51,-30.32 -40.35,0l0 92.71"
                              ></path>
                              <polyline
                                class="fil0 str0 svg-elem-9"
                                points="827.96,335.43 827.96,207.85 890.17,207.85 890.17,335.43 "
                              ></polyline>
                              <path
                                class="fil0 str0 svg-elem-10"
                                d="M838.89 335.43l0 -92.71c3.85,-30.32 35.08,-31.96 40.35,0l0 92.71"
                              ></path>
                              <line
                                class="fil0 str0 svg-elem-11"
                                x1="486.97"
                                y1="197.26"
                                x2="600.94"
                                y2="197.26"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-12"
                                x1="499.37"
                                y1="181.51"
                                x2="499.37"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-13"
                                x1="512.5"
                                y1="181.51"
                                x2="512.5"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-14"
                                x1="525.62"
                                y1="181.51"
                                x2="525.62"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-15"
                                x1="538.75"
                                y1="181.51"
                                x2="538.75"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-16"
                                x1="551.87"
                                y1="181.51"
                                x2="551.87"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-17"
                                x1="565"
                                y1="181.51"
                                x2="565"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-18"
                                x1="578.13"
                                y1="181.51"
                                x2="578.13"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-19"
                                x1="591.25"
                                y1="181.51"
                                x2="591.25"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-20"
                                x1="916.49"
                                y1="197.26"
                                x2="802.52"
                                y2="197.26"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-21"
                                x1="904.09"
                                y1="181.51"
                                x2="904.09"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-22"
                                x1="890.96"
                                y1="181.51"
                                x2="890.96"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-23"
                                x1="877.84"
                                y1="181.51"
                                x2="877.84"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-24"
                                x1="864.71"
                                y1="181.51"
                                x2="864.71"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-25"
                                x1="851.59"
                                y1="181.51"
                                x2="851.59"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-26"
                                x1="838.46"
                                y1="181.51"
                                x2="838.46"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-27"
                                x1="825.33"
                                y1="181.51"
                                x2="825.33"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-28"
                                x1="812.21"
                                y1="181.51"
                                x2="812.21"
                                y2="196.86"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-29"
                                x1="644.99"
                                y1="176.36"
                                x2="644.81"
                                y2="335.23"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-30"
                                x1="644.97"
                                y1="194.38"
                                x2="600.95"
                                y2="194.38"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-31"
                                x1="644.94"
                                y1="224.19"
                                x2="600.92"
                                y2="224.19"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-32"
                                x1="644.92"
                                y1="254"
                                x2="600.89"
                                y2="254"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-33"
                                x1="644.89"
                                y1="283.8"
                                x2="600.87"
                                y2="283.8"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-34"
                                x1="644.87"
                                y1="313.61"
                                x2="600.84"
                                y2="313.61"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-35"
                                x1="758.37"
                                y1="176.36"
                                x2="758.55"
                                y2="335.23"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-36"
                                x1="802.41"
                                y1="194.38"
                                x2="758.39"
                                y2="194.38"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-37"
                                x1="802.44"
                                y1="224.19"
                                x2="758.42"
                                y2="224.19"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-38"
                                x1="802.47"
                                y1="254"
                                x2="758.44"
                                y2="254"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-39"
                                x1="802.49"
                                y1="283.8"
                                x2="758.47"
                                y2="283.8"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-40"
                                x1="802.52"
                                y1="313.61"
                                x2="758.5"
                                y2="313.61"
                              ></line>
                              <path
                                class="fil0 str0 svg-elem-41"
                                d="M745.77 335.43l0 -89.84c-7.89,-73.78 -79.11,-75.18 -88.18,0l0 89.84"
                              ></path>
                              <circle
                                class="fil0 str0 svg-elem-42"
                                cx="657.85"
                                cy="191.22"
                                r="3.94"
                              ></circle>
                              <circle
                                class="fil0 str0 svg-elem-43"
                                cx="745.65"
                                cy="191.22"
                                r="3.94"
                              ></circle>
                              <line
                                class="fil0 str0 svg-elem-44"
                                x1="601"
                                y1="176.36"
                                x2="802.68"
                                y2="176.36"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-45"
                                x1="601"
                                y1="170.25"
                                x2="802.68"
                                y2="170.25"
                              ></line>
                              <polyline
                                class="fil0 str0 svg-elem-46"
                                points="486.97,170.35 486.97,134.53 607.68,134.53 "
                              ></polyline>
                              <line
                                class="fil0 str0 svg-elem-47"
                                x1="633.41"
                                y1="134.53"
                                x2="770.32"
                                y2="134.53"
                              ></line>
                              <polyline
                                class="fil0 str0 svg-elem-48"
                                points="916.87,170.35 916.87,134.53 796.04,134.53 "
                              ></polyline>
                              <line
                                class="fil0 str0 svg-elem-49"
                                x1="916.87"
                                y1="145.05"
                                x2="486.97"
                                y2="145.05"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-50"
                                x1="649.63"
                                y1="145.05"
                                x2="649.63"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-51"
                                x1="661.75"
                                y1="145.05"
                                x2="661.75"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-52"
                                x1="681.15"
                                y1="145.05"
                                x2="681.15"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-53"
                                x1="693.28"
                                y1="145.05"
                                x2="693.28"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-54"
                                x1="712.92"
                                y1="145.05"
                                x2="712.92"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-55"
                                x1="725.04"
                                y1="145.05"
                                x2="725.04"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-56"
                                x1="744.45"
                                y1="145.05"
                                x2="744.45"
                                y2="170.25"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-57"
                                x1="756.57"
                                y1="145.05"
                                x2="756.57"
                                y2="170.25"
                              ></line>
                              <path
                                class="fil0 str0 svg-elem-58"
                                d="M607.68 145.05l25.73 0 0 -99.75c-2.06,-28.55 -23.51,-28.01 -25.73,0l0 99.75z"
                              ></path>
                              <line
                                class="fil0 str0 svg-elem-59"
                                x1="607.68"
                                y1="45.3"
                                x2="633.41"
                                y2="45.3"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-60"
                                x1="620.59"
                                y1="24.09"
                                x2="620.59"
                                y2="14.57"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-61"
                                x1="607.68"
                                y1="85.76"
                                x2="796.04"
                                y2="85.76"
                              ></line>
                              <path
                                class="fil0 str0 svg-elem-62"
                                d="M614.81 85.76l11.46 0 0 -26.09c-0.61,-8.96 -10.94,-8.87 -11.46,0l0 26.09z"
                              ></path>
                              <path
                                class="fil0 str0 svg-elem-63"
                                d="M770.32 145.05l25.72 0 0 -99.75c-2.06,-28.55 -23.51,-28.01 -25.72,0l0 99.75z"
                              ></path>
                              <line
                                class="fil0 str0 svg-elem-64"
                                x1="770.32"
                                y1="45.3"
                                x2="796.04"
                                y2="45.3"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-65"
                                x1="783.22"
                                y1="24.09"
                                x2="783.22"
                                y2="14.57"
                              ></line>
                              <path
                                class="fil0 str0 svg-elem-66"
                                d="M777.45 85.76l11.45 0 0 -26.09c-0.6,-8.96 -10.94,-8.87 -11.45,0l0 26.09z"
                              ></path>
                              <line
                                class="fil0 str0 svg-elem-67"
                                x1="633.41"
                                y1="67.99"
                                x2="770.32"
                                y2="67.99"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-68"
                                x1="644.82"
                                y1="67.99"
                                x2="644.82"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-69"
                                x1="656.23"
                                y1="67.99"
                                x2="656.23"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-70"
                                x1="667.63"
                                y1="67.99"
                                x2="667.63"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-71"
                                x1="679.04"
                                y1="67.99"
                                x2="679.04"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-72"
                                x1="690.45"
                                y1="67.99"
                                x2="690.45"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-73"
                                x1="701.86"
                                y1="67.99"
                                x2="701.86"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-74"
                                x1="713.27"
                                y1="67.99"
                                x2="713.27"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-75"
                                x1="724.68"
                                y1="67.99"
                                x2="724.68"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-76"
                                x1="736.09"
                                y1="67.99"
                                x2="736.09"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-77"
                                x1="747.5"
                                y1="67.99"
                                x2="747.5"
                                y2="85.76"
                              ></line>
                              <line
                                class="fil0 str0 svg-elem-78"
                                x1="758.91"
                                y1="67.99"
                                x2="758.91"
                                y2="85.76"
                              ></line>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "fifteen" ? "show active" : ""
                    }`}
                    id="fifteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2015</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica received its first registration from
                            the{" "}
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) as a
                              Registered Investment Advisor
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.fifteen}
                          className="w-100"
                          alt="history-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "nineteen" ? "show active" : ""
                    }`}
                    id="nineteen"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2019</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            {" "}
                            Piper Serica received the registration from the
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) for
                              launching Portfolio Management Service (PMS).
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.nineteen}
                          className="w-100"
                          alt="history-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "twenty" ? "show active" : ""
                    }`}
                    id="twenty"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2020</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica launched its
                            <strong>
                              {" "}
                              Foreign Portfolio Investor (FPI) Fund based in
                              Mauritius.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources.twenty}
                          className="w-100"
                          alt="history-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "twenty-two" ? "show active" : ""
                    }`}
                    id="twenty-two"
                  >
                    <div className="history-content-div">
                      <h2 className="history-title">2022</h2>
                      <div className="history-content">
                        <div className="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p className="para history-para">
                            Piper Serica Launched
                            <strong>
                              {" "}
                              Piper Serica Angel Fund, an early-stage VC fund
                              registered with SEBI as a Category 1 AIF.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="history-line-chart">
                        <img
                          src={gifSources["twenty-two"]}
                          className="w-100"
                          alt="history-img"
                          loading="lazy"
                          rel="preload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="purpose-section"></div>
      <section className="why-us-section vision-mission-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div vision-mission-div-one ">
                      {/* <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Vision
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div> */}

                      <div className="why-content-para vision-mission-para why-content-para-one">
                        <h2 className="banner-title why-content-main-title">
                          Vision
                        </h2>
                        <p className="para why-para justify-para">
                          To be a highly respected long-only equity asset
                          management company offering multiple strategies that
                          cater to the diverse objectives of our investors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div vision-mission-div-one">
                      {/* <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Mission
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div> */}

                      <div className="why-content-para vision-mission-para why-content-para-one">
                        <h2 className="banner-title why-content-main-title">
                          Mission
                        </h2>
                        <p className="para why-para justify-para">
                          At Piper Serica, we empower investors to achieve their
                          financial goals through a diverse portfolio of
                          actively managed strategies. Committed to
                          transparency, rigorous analysis, and strategic asset
                          allocation, we balance growth and risk to deliver
                          consistent returns. Our mission extends beyond wealth
                          creation—we strive to foster financial literacy,
                          ensure long-term stability, and drive sustainable
                          economic progress. Through innovation and discipline,
                          we create enduring value for our investors and the
                          broader ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-row">
            <div className="accordion" id="accordionExample">
              {/* Accordion Item 1 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 0 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' className
              >
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    openAccordion === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h4 className="why-content-title">Vision</h4>
                      <p className="para why-para justify-para">
                        To be a highly respected long-only equity asset
                        management company offering multiple strategies that
                        cater to the diverse objectives of our investors.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  id="btn-one"
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openAccordion === 0 ? "true" : "false"}
                  aria-controls="collapseOne"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 0 ? "d-none" : ""
                    }`}
                  >
                    Vision
                  </h2>
                  {openAccordion === 0 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 1 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' className
              >
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    openAccordion === 1 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h4 className="why-content-title">Mission</h4>
                      <p className="para why-para justify-para">
                        At Piper Serica, we empower investors to achieve their
                        financial goals through a diverse portfolio of actively
                        managed strategies. Committed to transparency, rigorous
                        analysis, and strategic asset allocation, we balance
                        growth and risk to deliver consistent returns. Our
                        mission extends beyond wealth creation—we strive to
                        foster financial literacy, ensure long-term stability,
                        and drive sustainable economic progress. Through
                        innovation and discipline, we create enduring value for
                        our investors and the broader ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  id="btn-one"
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  aria-controls="collapseTwo"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 1 ? "d-none" : ""
                    }`}
                  >
                    Mission
                  </h2>
                  {openAccordion === 1 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="philosophy-div"></div>
      <section className="philosophy-section">
        <div className="container">
          <h5 className="section-subtitle mb-5">our philosophy</h5>
          <div className="row image-row align-items-center">
            <div className="col-lg-12 order-lg-1 order-2">
              <h2 className="para mt-lg-0 justify-para">
                Our core philosophy is to benefit from long-term investment
                opportunities while ignoring market cycles. We like to identify
                and invest in companies that are leaders in emerging spaces led
                by a change in consumer behaviour, technology changes, and
                product innovations. Once we identify such companies, we like to
                stay invested as they create shareholder value while moving from
                small-cap to mid-cap and ultimately large-cap. We believe that
                companies like these—with great management, good corporate
                governance, financial discipline, and a shareholder-friendly
                approach—are quite rare and should not be looked at through the
                same valuation prism as the rest of the market. We like to
                interact with the management of our portfolio companies
                regularly to stay abreast of the trends shaping their industry
                and explore other investment opportunities. We believe that
                long-term investing requires deep knowledge and good
                temperament. Our team members are always curious to learn more,
                while at the same time tuning out noise. We see market
                volatility as an opportunity to increase our equity allocations
                rather than reduce them. We believe that conviction comes only
                from deep research and understanding of our portfolio companies.
              </h2>
            </div>
            {/* <div className="col-lg-6 order-lg-2 order-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund1.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div> */}
          </div>

          {/* <div className="row mt-5 image-row">
            <div className="col-lg-6">
              <p className="">
                We manage and advise on a range of investment strategies and
                products which touch the lives of investors, communities,
                corporate borrowers, investee companies, and our people. We act
                as investment partners to a diverse set of investors, from
                pension funds and insurance companies to single-family offices.
                Some of our institutional investors or LPs manage funds on
                behalf of the state or the public. When we invest or make an
                investment recommendation, we ensure that our investment
                philosophy directs decision-making.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="para">
                Our fund investment strategies unlock unique opportunities,
                which deliver enhanced returns with capital preservation to our
                investors and positively impact our stakeholders, society, and
                the economy. Our clients’ advisory portfolios result from
                careful curation led by our experienced investment advisors, who
                constantly strive to allocate to investment opportunities that
                offer attractive risk-adjusted returns. Our advisors apply
                quantitative methods to monitor and manage portfolio risk and
                work closely with our clients to increase diversification
                without compromising returns.
              </p>
            </div>
          </div> */}

          {/* <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <h2 className="para mt-lg-0">
                We like to interact with the management of our portfolio
                companies regularly to stay abreast of the trends shaping their
                industry and explore other investment opportunities. We believe
                that long term investing requires deep knowledge and good
                temperament. Our team members are always curious to learn more
                at the same time tune out noise. We see market volatility as an
                opportunity to increase our equity allocations rather than
                reduce them. We believe that conviction comes only from deep
                research and understanding of our portfolio companies.
              </h2>
            </div>

            <div className="col-lg-6 d-lg-block d-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund2.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div>
          </div> */}
        </div>
      </section>
      <div id="note-section"></div>
      <section className="founders-note-section">
        <div className="container">
          <div className="row">
            <h6 className="section-subtitle pb-4">Founder’s note</h6>
            <div className="col-lg-11">
              {/* <h2 className="banner-title offerings-title founders-text px-5">
                <i className="fa-solid fa-quote-left founders-left-quote"></i>
                Our courage to go beyond conventions and constantly explore new
                possibilities has been one of our core strengths.
                <i className="fa-solid fa-quote-right founders-right-quote"></i>
              </h2> */}
            </div>
          </div>

          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="founders-img-div pe-lg-5 pe-auto">
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay_agarwal_website_photo.jpg`}
                  className="w-100"
                  alt="founders-img"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <p className="para justify-para">
                Our journey began with a simple yet powerful vision: to create
                an investment company that not only delivers superior financial
                performance but also fosters innovation and positive economic
                impact. With decades of combined experience in public equities,
                asset management, and financial markets, our team is uniquely
                positioned to identify high-potential opportunities and create
                lasting value for our investors.
              </p>

              <p className="para justify-para">
                Our approach is rooted in discipline, transparency, and
                alignment of interests. We deploy a research-driven methodology,
                leveraging data insights and industry expertise to make informed
                investment decisions. Our portfolio is curated to ensure
                diversification, resilience, and adaptability in a dynamic
                market landscape.
              </p>

              <p className="para justify-para">
                At Piper Serica, we prioritize partnerships and long-term
                relationships. We work closely with industry experts to support
                strategic growth, risk management, and sustainable financial
                outcomes. Our commitment to responsible investing ensures that
                we not only seek financial returns but also contribute to
                broader societal and economic progress.
              </p>
              <p className="para justify-para">
                We are excited about the opportunities ahead and deeply
                appreciate the trust and confidence that our investors place in
                us. Together, we build a legacy of success, innovation, and
                enduring value.
              </p>

              <h6 className="founders-name">
                <em>- Abhay Agarwal, Founder & Fund Manager, Piper Serica</em>
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="teams-bg-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/banners/Team.jpg`}
          alt="team-bg"
          className="w-100"
        />
      </section>
      <div id="team-section"></div>
      <section className="teams-section">
        <div className="container">
          <h6 className="section-subtitle">Meet the team</h6>
          {/* <h2 className="section-title mt-lg-3 mt-4">The Driving Force</h2> */}
          {/* <div className="row mt-3 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay-agarwal-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Abhay Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/abhay-agarwal-piper/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>

                  <h5 className="team-designation">Managing Director, CIO</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-0 mt-4">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/rajni-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Rajni Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/rajni-agarwal-99352218b/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Research</h5>
                </div>
              </div>
            </div> */}

          {/* <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-3 mt-4">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/Ajay-modi-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Ajay Modi</h3>
                    <NavLink to="https://www.linkedin.com/in/ajmodi/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Investments</h5>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mb-5">
            {teamContent.map((team, index) => (
              <div className="col-xxl-3 col-xl-4 col-md-6 col-12" key={index}>
                <div className="team-div img-team-one">
                  {/* <img
                    src={`${process.env.PUBLIC_URL}${team.image}`}
                    alt="team-img"
                    className="w-100"
                  /> */}
                  <div className="team-content">
                    <div className="team-title-div">
                      <h3 className="section-title team-name">{team.name}</h3>
                      <NavLink to={team.linkedin_url} target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                      </NavLink>
                    </div>

                    <h5 className="section-subtitle small-txt">
                      {team.designation}
                    </h5>
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

export default About;
