import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const InvestorLetter = () => {
  const letters = [
    {
      date: "January 2025",

      filepath: "/docs/Piper-Serica-Investor-Letter-January-2025.pdf",
    },

    {
      date: "January 2024",

      filepath: "/",
    },

    {
      date: "January 2023",

      filepath: "/",
    },

    {
      date: "January 2022",

      filepath: "/",
    },

    {
      date: "January 2021",

      filepath: "/",
    },

    {
      date: "January 2020",

      filepath: "/",
    },

    {
      date: "February 2022",

      filepath: "/",
    },

    {
      date: "February 2021",

      filepath: "/",
    },

    {
      date: "February 2020",

      filepath: "/",
    },

    {
      date: "March 2024",

      filepath: "/",
    },

    {
      date: "March 2022",

      filepath: "/",
    },

    {
      date: "March 2021",

      filepath: "/",
    },
    {
      date: "March 2020",

      filepath: "/",
    },
    {
      date: "April 2022",

      filepath: "/",
    },
    {
      date: "April 2021",

      filepath: "/",
    },
    {
      date: "April 2020",

      filepath: "/",
    },

    {
      date: "May 2022",

      filepath: "/",
    },
    {
      date: "May 2021",

      filepath: "/",
    },
    {
      date: "May 2020",

      filepath: "/",
    },
    {
      date: "June 2022",

      filepath: "/",
    },
    {
      date: "June 2021",

      filepath: "/",
    },
    {
      date: "July 2023",

      filepath: "/",
    },
    {
      date: "July 2022",

      filepath: "/",
    },
    {
      date: "July 2021",

      filepath: "/",
    },
    {
      date: "August 2022",

      filepath: "/",
    },
    {
      date: "August 2021",

      filepath: "/",
    },
    {
      date: "August 2020",

      filepath: "/",
    },
    {
      date: "August 2019",

      filepath: "/",
    },
    {
      date: "September 2023",

      filepath: "/",
    },
    {
      date: "September 2022",

      filepath: "/",
    },
    {
      date: "September 2021",

      filepath: "/",
    },
    {
      date: "October 2024",

      filepath: "/",
    },
    {
      date: "October 2022",

      filepath: "/",
    },
    {
      date: "October 2021",

      filepath: "/",
    },
    {
      date: "October 2020",

      filepath: "/",
    },
    {
      date: "October 2019",

      filepath: "/",
    },
    {
      date: "November 2022",

      filepath: "/",
    },
    {
      date: "November 2021",

      filepath: "/",
    },
    {
      date: "November 2020",

      filepath: "/",
    },
    {
      date: "November 2019",

      filepath: "/",
    },
    {
      date: "November 2018",

      filepath: "/",
    },
    {
      date: "December 2022",

      filepath: "/",
    },
    {
      date: "December 2021",

      filepath: "/",
    },
    {
      date: "December 2020",

      filepath: "/",
    },
    {
      date: "December 2019",

      filepath: "/",
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
                <h1 className="banner-title"> Investor Letters</h1>
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
                <div className="letter-div mb-5">
                  <h5 className="section-subtitle">{letter.date}</h5>
                  <h3>Piper Serica Leader Portfolio Strategy {letter.date}</h3>
                  <div className="letter-options py-3 pt-5">
                    <NavLink to={letter.filepath} target="_blank">
                      <i class="fa-solid fa-eye"></i>
                    </NavLink>
                    <a href={letter.filepath} download>
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
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

export default InvestorLetter;
