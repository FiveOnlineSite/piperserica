import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";

const CompanySlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/images/industries/comp-1.png",
      label: "ELECTRIC VEHICLE",
      description:
        "ALT Mobility is a full-stack EV leasing platform offering mobility as a service (MaaS) for commercial vehicle users. By acquiring affordable debt financing from both domestic and international financing institutions, the company seeks to provide a well-structured financial solution for the electrification of commercial fleets throughout India. With a full stack EV leasing solution, it enables asset light logistic enterprises to ramp up to tens of thousands of EV fleets in months.",
      link: "https://alt-mobility.com/",
    },
    {
      id: 2,
      src: "/images/industries/comp-2.jpg",
      label: "FINTECH",
      description:
        "The company has created an information intelligence platform intended to offer financial organisations big data risk analysis. In order to generate insights from distributed and unstructured data sources, the company's platform combines computational techniques like machine learning, natural language processing, and data visualisation technologies. This facilitates financial institutions, institutional investors, and businesses to make quick decisions while realising market possibilities and minimizing capital risks.",
      link: "https://www.crediwatch.com/home/",
    },
    {
      id: 3,
      src: "/images/industries/comp-3.jpg",
      label: "SUPPLY CHAIN TECH",
      description:
        "ZFW is creating a physical network of micro warehouses (dark stores) along with a strong tech integration to let D2C brands and consumer brands to deliver products on the same day thereby improving customer delight.",
      link: "https://www.zippee.delivery/",
    },
    {
      id: 4,
      src: "/images/industries/comp-4.png",
      label: "CONSUMER TECH",
      description:
        "Founded in 2021, Driffle is a digital goods marketplace that connects gamers with sellers all over the world. The platform sells games, digital gift cards, and gaming points for gamers. The companys objective is to make online gaming accessible, affordable and safer for gamers worldwide.",
      link: "https://driffle.com/",
    },
    {
      id: 5,
      src: "/images/industries/comp-5.png",
      label: "AI & SAAS",
      description:
        "Founded in 2020, Oditly is an enterprise-scale SaaS application enabling businesses of all sizes to digitize and automate the entire lifecycle of quality, safety and compliance processes within minutes. The product offers to set up and manage inspection workflows seamlessly allowing users to schedule recurring inspections, assigning tasks and actions plans.",
      link: "https://www.oditly.com/",
    },
    {
      id: 6,
      src: "/images/industries/comp-6.jpg",
      label: "SUPPLY CHAIN TECH",
      description:
        "Founded in 2022, UnOrg is the first and only B2B managed Marketplace that is empowering street food vendors, Dhabas and sweets shops etc. The company operates a procurement platform intended to create a one-stop solution for street food vendors by offering a range of services including a large set of SKUs, timely slot delivery, discounts on all products, and other related services, enabling vendors to procure raw materials swiftly and systematically.",
      link: "https://unorg.in/",
    },
    // {
    //   id: 7,
    //   src: "/images/industries/comp-8.png",
    //   label: "AI & SAAS",
    //   description:
    //     "DesignX helps manufacturing companies with process discovery, modelling, monitoring & automation through RPA & IIOT to improve MSQCD (Morale, Safety, Quality, Cost & Delivery) on the shop floor.",
    //   link: "https://designx.in/",
    // },
    {
      id: 8,
      src: "/images/industries/comp-8.png",
      label: "FINTECH",
      description:
        "Castler is a Digital Escrow Platform which includes solutions for setup, administration, collections & payouts, approvals, processing and risk management.",
      link: "https://castler.com/",
    },
    {
      id: 9,
      src: "/images/industries/comp-9 (2).png",
      label: "AI & SAAS",
      description:
        "Floworks provides CRM/ERP type functionality on top of Whatsapp for businesses to better manage their operations, especially for their workforce on the field.",
      link: "https://www.floworks.ai/",
    },
    {
      id: 10,
      src: "/images/industries/comp-10.jpg",
      label: "",
      description:
        "MyCaptain provides beginner to advanced Live & Online Cohort based courses in the fields of Business, Content, Design and Product. They help early professionals, young graduates and college students acquire skills and get jobs in New-age and aspirational careers.",
      link: "https://mycaptain.in/",
    },
    {
      id: 11,
      src: "/images/industries/comp-11.png",
      label: "CONSUMER TECH",
      description:
        "University Living is a global student housing marketplace. It helps students across the globe find suitable and secure accommodation near their university campuses.",
      link: "https://www.universityliving.com/",
    },
    {
      id: 12,
      src: "/images/industries/comp-12.png",
      label: "FINTECH",
      description:
        "KiVi provides digital financial solutions and a physical platform for the farmer to procure input, implement agronomy practices, process & market output. It employs a micro-entrepreneur-led (franchisee) model that combines the strength of the platform with the franchisee’s local expertise, social capital and last mile transaction capability.",
      link: "https://agrosperity.com/#/home",
    },
    {
      id: 13,
      src: "/images/industries/comp-13.png",
      label: "CYBER SECURITY & CHIP DESIGN",
      description:
        "Pantherun is a cyber security innovator with a patent pending approach to data protection, that transforms security by making encryption possible in real-time, while making breach of security 10X harder compared to existing global solutions, at better performance and price.",
      link: "https://pantherun.com/",
    },
    {
      id: 14,
      src: "/images/industries/comp-14-1.png",
      label: "ELECTRIC VEHICLE",
      description:
        "Evify is a fleet management company working to De-Carbonize the last-mile logistic sector by providing e-commerce, food delivery and 3PL companies with an electric vehicle Fleet across Tier I and Tier II cities.",
      link: "https://www.evify.co.in/",
    },
    {
      id: 15,
      src: "/images/industries/comp-15.png",
      label: "CYBER SECURITY & CHIP DESIGN",
      description:
        "ClearTrust offers a cybersecurity platform, which mitigates AdFraud for publishers, platforms and advertisers by handling Traffic and Ad Security in real-time by scanning millions of events per day.",
      link: "https://www.cleartrust.cc/",
    },
    {
      id: 16,
      src: "/images/industries/comp-16.jpg",
      label: "FINTECH",
      description:
        "Flashaid - is an Insuretech company that provides customized and affordable embedded health insurance products through open integrated API.",
      link: "https://flashaid.in/",
    },
    {
      id: 17,
      src: "/images/industries/comp-17.png",
      label: "FINTECH",
      description:
        "Freed - FREED is India’s 1st debt relief platform, empowering customers to regain their creditworthiness by resolving their overburdening and toxic debt.",
      link: "https://freed.care/",
    },
    {
      id: 18,
      src: "/images/industries/comp-18.jpg",
      label: "CYBER SECURITY & CHIP DESIGN",
      description:
        "OTPLess provides identity as a service by building an essential identity infrastructure for merchants to make customer and employee identity/authentication easy and secure.",
      link: "https://otpless.com/",
    },
    {
      id: 19,
      src: "/images/industries/comp-19.jpg",
      label: "ADVANCE ELECTRONIC",
      description:
        "Six Sense Mobility is a deep-tech mobility company that uses plug-and-play devices to transform regular vehicles into intelligent-connected vehicles.",
      link: "https://www.sixsensemobility.com/home",
    },
    {
      id: 20,
      src: "/images/industries/comp-20.png",
      label: "FINTECH",
      description:
        "Swara Fincare is an RBI-registered NBFC dedicated to providing tailored credit solutions to rural and semi-urban regions. The company specializes in offering business and agricultural loans, empowering individuals and communities with financial support to foster economic growth and development.",
      link: "https://www.swarafincare.com/",
    },
    {
      id: 21,
      src: "/images/industries/comp-21.jpg",
      label: "SPACETECH",
      description:
        "Astrogate Labs is a laser communication technology that simplifies and lowers the cost of data transmission across space, air, and terrestrial platforms.",
      link: "https://astrogatelabs.com/",
    },
    {
      id: 22,
      src: "/images/industries/industry8.png",
      label: "FINTECH",
      description:
        "Rupeeflo is a fintech platform specifically designed for Non-Resident Indians (NRIs) to manage their financial needs seamlessly across borders through a comprehensive suite of banking and wealth management products.",
      link: "https://www.rupeeflo.com/",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // Eliminates delay
    speed: 8000, // Controls scroll speed (increase for slower scrolling)
    cssEase: "linear", // Ensures continuous smooth motion
    slidesToShow: 4, // 4 columns
    slidesToScroll: 1, // Scroll one item at a time for smooth effect
    // rows: 2, // 2 rows
    // slidesPerRow: 1, // Each slide takes 1 column
    arrows: false, // Hides arrows for auto-scroll
    dots: false, // Hides dots for cleaner UI
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // rows: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="industries-portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h6 className="section-subtitle">Industries</h6>
              <h3 className="section-title mb-lg-3 mb-4">
                Portfolio Companies
              </h3>
            </div>
            {/* <div className="col-lg-3">
        <div className="industries-filter-div">
          <select
            class="form-select"
            onChange={handleFilterChange}
            aria-label="Default select example"
          >
            <option selected>Industry</option>
            <option value="B2B">B2B</option>
            <option value="Consumer">Consumer</option>
            <option value="Creator Economy">Creator Economy</option>
          </select>
        </div>
      </div> */}
          </div>

          <div className="row mt-lg-4 mt-5">
            <div className="industries-div">
              <div className="row">
                <Slider {...settings}>
                  {images.map((images) => (
                    <div key={images.id} className="col-lg-3 col-md-6 col-6">
                      <div
                        className="industires-logo-div"
                        onClick={() => openModal(images)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${images.src}`}
                          alt="industry"
                          className="w-100"
                        />
                        {/* <div className="industries-content">
                  <p className="para small-para">
                    The Fund seeks to empower early and growth stage
                    companies in India and Southeast Asia, providing them
                    capital to scale without significantly diluting
                    equity.
                  </p>
                </div> */}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {selectedImage && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}${selectedImage.src}`}
                alt="Selected Industry"
                className="mb-3"
              />
            </div>

            <p className="para small-para">{selectedImage.description}</p>
            <NavLink
              to={selectedImage.link}
              className="company-link"
              target="_blank"
            >
              {selectedImage.link}
            </NavLink>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CompanySlider;
