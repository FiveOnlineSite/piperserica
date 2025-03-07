import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

const SubscribeLetter = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  // console.log("Brevo API Key:", process.env.REACT_APP_BREVO_API_KEY);
  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/contacts",
        {
          email: email,
          attributes: {
            FIRSTNAME: firstname,
            LASTNAME: lastname,
          },
          listIds: [Number(process.env.REACT_APP_BREVO_LIST_ID)], // Convert to Number
          updateEnabled: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_BREVO_API_KEY, // Replace with your Brevo API key
          },
        }
      );

      if (response.status === 201) {
        setSuccessModal(true);
        console.log("Success modal should be set to true");

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessModal(false);
        }, 5000);

        setFirstname("");
        setLastname("");
        setEmail("");
      } else {
        console.error("Failed to send email:");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      console.error(error);
    }
  };

  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="banner-title blue-title mt-3">
                Subscribe to our insights & updates
              </h2>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="newsletter-div">
                <form onSubmit={handleSubscribe}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          for="firstname"
                          className="form-label section-subtitle"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control subscribe-control"
                          id="firstname"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                          // placeholder="first name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          for="last-name"
                          className="form-label section-subtitle"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control subscribe-control"
                          id="last-name"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          required
                          // placeholder="last name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <label
                          for="email"
                          className="form-label section-subtitle"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control subscribe-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          // placeholder="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-start">
                          <button
                            type="submit"
                            className="banner-btn blue-btn mt-0 mb-3"
                          >
                            Subscribe
                          </button>
                        </div>
                        <div className="col-lg-8">
                          <p className="para subscribe-para mb-0">
                            <i>
                              *By submitting the contact form, you consent to
                              all data in the form being used in accordance with
                              <a href="#">
                                {" "}
                                Piper Serics's data privacy policy
                              </a>
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
                Subscription successful! Check your email.
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
};

export default SubscribeLetter;
