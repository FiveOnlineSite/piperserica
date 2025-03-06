import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";

const Career = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 900, // At 900px and below, switch to horizontal
        settings: {
          vertical: false, // Disable vertical mode
          verticalSwiping: false, // Disable vertical swiping
          slidesToShow: 2, // Keep the same or adjust for smaller screens
          slidesToScroll: 1,
          centerMode: true, // Keep center mode if needed
          centerPadding: "10px",
          cssEase: "linear",
        },
      },
    ],
  };

  const careerSlide = [
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
  ];

  const testimonialSettings = {
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

  const testimonialItems = [
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
  ];

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [phoneError, setPhoneError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (value === "") {
        setPhoneError(""); // Clear error when input is empty
      } else {
        const phoneRegex = /^\d{7,12}$/;
        if (!phoneRegex.test(value)) {
          setPhoneError("Phone number must be between 7 and 12 digits.");
        } else {
          setPhoneError("");
        }
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle file input
  const handleFileChange = async (e) => {
    const resume = e.target.files[0];
    if (resume) {
      const fileData = new FormData();
      fileData.append("file", resume);
      fileData.append("upload_preset", "piperserica");
      fileData.append("resource_type", "raw");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dqpln4vod/raw/upload",
          {
            method: "POST",
            body: fileData,
          }
        );
        const data = await response.json();
        setFormData((prevData) => ({
          ...prevData,
          resume: data.secure_url, // Store uploaded file URL
        }));
      } catch (error) {
        console.error("Resume upload failed", error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneError) {
      return;
    }

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      resume: formData.resume,
    };

    emailjs
      .send(
        "service_1fyftx8",
        "template_jy27emd",
        emailParams,
        "hdyWkZtLGiur_O_Fb"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSuccessModal(true);
          console.log("Success modal should be set to true");

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSuccessModal(false);
          }, 5000);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            resume: null,
          });
          formRef.current.reset();
        },
        (err) => {
          console.error("Failed to send email:", err);
        }
      );
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/market-fund-banner-two.webp`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">Careers</h1>
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

      <section className="life-section">
        <div className="container">
          <div className="row align-items-center">
            <h6 className="section-subtitle mb-4">Life at Piper Serica</h6>

            <h3 className="section-title mt-3 mt-lg-3">
              Grow in a culture of innovation, collaboration, and excellence
            </h3>

            <p className="para medium-para mt-lg-4 mt-4">
              At Piper Serica, we foster a dynamic and collaborative work
              environment where innovation, integrity, and passion drive our
              success. Our team thrives on intellectual curiosity, analytical
              rigor, and a shared commitment to creating lasting value for
              investors. We believe in continuous learning, empowering our
              people with opportunities to grow, lead, and make an impact.
              Whether it’s exploring new investment frontiers, engaging with
              visionary entrepreneurs, or shaping market-leading strategies,
              life at Piper Serica is both challenging and rewarding. We
              cultivate an inclusive culture that values diverse perspectives,
              teamwork, and work-life balance, ensuring that every team member
              feels inspired to contribute to our collective vision.
            </p>
            {/* <div className="col-lg-5">
              <div className="top-bottom-shadow"></div>
              <Slider {...settings} className="vertical-slider">
                {careerSlide.map((slide, index) => (
                  <div key={index} className="career-slide-container">
                    <img
                      src={`${process.env.PUBLIC_URL}${slide.image}`}
                      alt={index}
                      className="w-100"
                    />
                  </div>
                ))}
              </Slider>
            </div> */}
            {/* <div className="col-lg-6 offset-lg-1">
              <div className="life-content-div">
                <h6 className="section-subtitle">Life at Piper Serica</h6>
                <h3 className="section-title mt-3 mt-lg-3">
                  Grow in a culture of innovation, collaboration, and excellence
                </h3>

                <p className="para medium-para mt-lg-4 mt-4">
                  At Piper Serica, we foster a dynamic and collaborative work
                  environment where innovation, integrity, and passion drive our
                  success. Our team thrives on intellectual curiosity,
                  analytical rigor, and a shared commitment to creating lasting
                  value for investors. We believe in continuous learning,
                  empowering our people with opportunities to grow, lead, and
                  make an impact. Whether it’s exploring new investment
                  frontiers, engaging with visionary entrepreneurs, or shaping
                  market-leading strategies, life at Piper Serica is both
                  challenging and rewarding. We cultivate an inclusive culture
                  that values diverse perspectives, teamwork, and work-life
                  balance, ensuring that every team member feels inspired to
                  contribute to our collective vision.
                </p>

                <NavLink
                  to="/"
                  className="banner-btn blue-btn subscribe-blog-btn"
                >
                  join the team
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="employee-speak-section">
        <div className="container">
          <div className="employee-speak-div">
            <h3 className="banner-title">Employees speak</h3>
            <p className="banner-para">
              We are an equal opportunity employer that celebrates and values
              the diversity and uniqueness that each of us brings to the team.
              We offer professionals the platform to grow in a collaborative
              environment and drive impact from day one. At Lighthouse Canton,
              we provide opportunities and challenges to every member of our
              team to Perform, Learn, and Grow!
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <TestimonialSlider
            settings={testimonialSettings}
            item={testimonialItems}
          />
        </div>
      </section>

      <section className="culture-values-section">
        <div className="container">
          <div className="row align-items-lg-end align-items-center">
            <div className="col-lg-5">
              <h5 className="section-subtitle">Our Culture & Values</h5>
              <h2 className="section-title">Values that inspire & define us</h2>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <p className="para medium-para values-para">
                Our Values define us and are rooted in our culture. They act as
                guiding principles for how we service our clients, treat each
                other, and strengthen and synergize our purpose in every
                decision we make.
              </p>
            </div>
          </div>

          <div className="row values-row mt-5">
            <div className="col-lg col-md-4 col-12">
              <div className="values-div">
                <img
                  src={`${process.env.PUBLIC_URL}/images/values/621488deae0f89f7ef0f9d57_Excellence.png`}
                  alt="values"
                />
                <h6>Excellence</h6>
                <span></span>
                <p className="para medium-para values-para text-center my-3">
                  <em>Become Better Every Day</em>
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-12">
              <div className="values-div">
                <img
                  src={`${process.env.PUBLIC_URL}/images/values/621488deae0f89f7ef0f9d57_Excellence.png`}
                  alt="values"
                />
                <h6>Excellence</h6>
                <span></span>
                <p className="para medium-para values-para text-center my-3">
                  <em>Become Better Every Day</em>
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-12">
              <div className="values-div">
                <img
                  src={`${process.env.PUBLIC_URL}/images/values/621488deae0f89f7ef0f9d57_Excellence.png`}
                  alt="values"
                />
                <h6>Excellence</h6>
                <span></span>
                <p className="para medium-para values-para text-center my-3">
                  <em>Become Better Every Day</em>
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-12">
              <div className="values-div">
                <img
                  src={`${process.env.PUBLIC_URL}/images/values/621488deae0f89f7ef0f9d57_Excellence.png`}
                  alt="values"
                />
                <h6>Excellence</h6>
                <span></span>
                <p className="para medium-para values-para text-center my-3">
                  <em>Become Better Every Day</em>
                </p>
              </div>
            </div>
            <div className="col-lg col-md-4 col-12">
              <div className="values-div">
                <img
                  src={`${process.env.PUBLIC_URL}/images/values/621488deae0f89f7ef0f9d57_Excellence.png`}
                  alt="values"
                />
                <h6>Excellence</h6>
                <span></span>
                <p className="para medium-para values-para text-center my-3">
                  <em>Become Better Every Day</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="openings-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="section-subtitle">Openings</h6>

              <h3 className="section-title">
                Always on the lookout for exceptional talent
              </h3>
            </div>
            <div className="col-lg-6 offset-lg-1 offset-0 mb-4">
              <div className="send-cv-div">
                <h5 className="section-title cv-title">Send us your CV</h5>

                <NavLink
                  to="/contact"
                  className="cv-contact-btn"
                  target="_blank"
                >
                  Contact us <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="resume-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h6 className="section-subtitle">Get in touch</h6>
              <h2 className="section-title mt-lg-3 mt-4">Let's Talk</h2>
              <p className="para small-para">
                Our global team of specialists is available to help with your
                enquiry. Please provide us more details of what we can help with
                and a member of the team will be in touch.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {phoneError && (
                        <p className="text-danger">{phoneError}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="resume" className="form-label">
                        Resume*
                      </label>
                      <input
                        type="file"
                        required
                        className="form-control"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message <span>(optional)</span>
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 d-flex justify-content-start">
                        <button
                          className="banner-btn blue-btn mt-0 mb-3"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col-lg-9">
                        <p className="para subscribe-para mb-0">
                          <i>
                            *By submitting the contact form, you consent to all
                            data in the form being used in accordance with
                            <a href="#"> Piper Serics's data privacy policy</a>
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}

      {successModal ? (
        <Modal
          centered
          show={successModal}
          onHide={() => setSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Thank you!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className="section-subtitle thankyou-msg">
                The form has been submitted successfully! We’ll get back to you
                shortly.
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </Layout>
  );
};

export default Career;
