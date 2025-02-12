import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Disclosure = () => {
  const letters = [
    {
      date: "January 2025",
      filepath: "/docs/Piper-Serica-Investor-Letter-January-2025.pdf",
    },

    {
      date: "January 2024",
      filepath:
        "/docs/2024-1-piper-serica-investor-letter-january-2024-min/pdf",
    },

    {
      date: "January 2023",
      filepath:
        "/docs/2023-1-piper-serica-investor-letter-january-2023-min.pdf",
    },

    {
      date: "January 2022",
      filepath: "/docs/2022-1-piper-serica-investor-letter-jan-2022-min.pdf",
    },

    {
      date: "January 2021",
      filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
    },
    {
      date: "January 2021",
      filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
    },
  ];

  const sortedLetters = letters.sort((a, b) => {
    const dateA = new Date(a.date + " 1"); // Adding day to avoid invalid dates
    const dateB = new Date(b.date + " 1");
    return dateB - dateA;
  });

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
                <h6 className="banner-subtitle">Performance Review</h6>
                <h1 className="banner-title"> Disclosure</h1>
                <p className="banner-para">
                  Investor letters are formal communications that provide
                  shareholders with insights into a company's financial
                  performance, strategic direction, and future outlook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-letters-section">
        <div className="container">
          <div className="row">
            {sortedLetters.map((letter) => (
              <div className="col-lg-4 col-md-6 col-12">
                <NavLink to={letter.filepath} target="_blank">
                  <div className="letter-div mb-4">
                    <h5 className="section-subtitle">{letter.date}</h5>
                    <h3>
                      Piper Serica Leader Portfolio Strategy {letter.date}
                    </h3>
                    {/* <div className="letter-options py-3 pt-5">
                    
                      <i class="fa-solid fa-eye"></i>
                   
                    <a href={letter.filepath} download>
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                  </div> */}
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

export default Disclosure;
