import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const CompanyPortfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Industry");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      id: 1,
      src: "/images/industries/industry1.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 2,
      src: "/images/industries/industry2.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 3,
      src: "/images/industries/industry3.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 4,
      src: "/images/industries/industry4.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 5,
      src: "/images/industries/industry5.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 6,
      src: "/images/industries/industry6.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 7,
      src: "/images/industries/industry7.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 8,
      src: "/images/industries/industry8.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
  ];

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  const handleFilterChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const getFilteredImages = () => {
    if (selectedIndustry === "Industry" || selectedIndustry === "") {
      return images; // Show all images if no specific industry is selected
    }
    return images.filter((image) => image.label === selectedIndustry);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
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
            <div className="col-lg-3">
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
            </div>
          </div>

          <div className="row mt-lg-4 mt-5">
            <div className="industries-div">
              <div className="row">
                {getFilteredImages().map((images) => (
                  <div key={images.id} className="col-lg-3 col-md-6 col-6">
                    <div
                      className="industires-logo-div"
                      onClick={() => openModal(images)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={images.src} alt="industry" className="w-100" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {selectedImage && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img
                src={selectedImage.src}
                alt="Selected Industry"
                className="mb-3"
              />
            </div>

            <p className="para small-para">{selectedImage.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CompanyPortfolio;
