import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Disclosure = () => {
  const letters = [
    {
      date: "January 2025",
      filepath: "/docs/Piper-Serica-Investor-Letter-January-2025.pdf",
      filter_type: "Annual Return",
    },

    {
      date: "January 2024",
      filepath:
        "/docs/2024-1-piper-serica-investor-letter-january-2024-min/pdf",
      filter_type: "PMS Disclosure",
    },

    {
      date: "January 2023",
      filepath:
        "/docs/2023-1-piper-serica-investor-letter-january-2023-min.pdf",
      filter_type: "FPI Disclosure",
    },

    {
      date: "January 2024",
      filepath: "/docs/",
      filter_type: "Annual Return",
    },

    {
      date: "January 2023",
      filepath: "https://drive.google.com/file/d/16R9qiAgRj_BMRQphkocJI6mk97rsLsZf/view?usp=sharing",
      filter_type: "Annual Return",
    },

    {
      date: "January 2022",
      filepath: "https://drive.google.com/file/d/15zpNfoWsuCc1wbBppoom1I_69IZPHKPN/view?usp=sharing",
      filter_type: "Annual Return",
    },
    {
      date: "January 2021",
      filepath: "https://drive.google.com/file/d/1dhGqX7vImHu4Y4SeCo-c44Zf5d7Bphio/view?usp=sharing",
      filter_type: "Annual Return",
    },

    {
      date: "January 2021",
      filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
      filter_type: "PMS Disclosure",
    },
    {
      date: "January 2023",
      filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
      filter_type: "FPI Disclosure",
    },
  ];

  const sortedLetters = letters.sort((a, b) => {
    const dateA = new Date(a.date + " 1"); // Adding day to avoid invalid dates
    const dateB = new Date(b.date + " 1");
    return dateB - dateA;
  });

  const [selectedFilter, setSelectedFilter] = useState("");

  // Filter and sort news items based on selected filters
  const filteredLetters = letters.filter(
    (item) => selectedFilter === "" || item.filter_type === selectedFilter
  );

  const handleClearFilters = () => {
    setSelectedFilter("");
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Disclosures.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Performance Review</h6> */}
                <h1 className="banner-title">Disclosures</h1>
                {/* <p className="banner-para">
                  Investor letters are formal communications that provide
                  shareholders with insights into a company's financial
                  performance, strategic direction, and future outlook.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-letters-section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-6 mt-lg-0 mt-0 ">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  {" "}
                  <option selected disabled value="">
                    Select filter
                  </option>
                  <option value="Annual Return">Annual Return</option>
                  <option value="PMS Disclosure">PMS Disclosure</option>
                  <option value="FPI Disclosure">FPI Disclosure</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-lg-end justify-content-md-end justify-content-end">
              <button
                className="para clear-filters-text"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="row">
            {filteredLetters.map((letter) => (
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
