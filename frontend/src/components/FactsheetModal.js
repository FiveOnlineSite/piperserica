// import React, { useRef, useState } from "react";
// import { Modal, NavLink } from "react-bootstrap";
// import emailjs from "@emailjs/browser";

// const FactsheetModal = () => {
//   const [showFactsheetModal, setShowFactsheetModal] = useState(false);
//   const [showPresentationModal, setShowPresentationModal] = useState(false);

//   const openFactsheetModal = (e) => {
//     e.preventDefault();
//     setShowFactsheetModal(true);
//   };

//   const openPresentationModal = () => {
//     setShowPresentationModal(true);
//   };

//   const closeFactsheetModal = () => setShowFactsheetModal(false);
//   const closePresentationModal = () => setShowPresentationModal(false);

//   const formRef = useRef();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     resume: null,
//   });

//   const [phoneError, setPhoneError] = useState("");
//   const [successModal, setSuccessModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       if (value === "") {
//         setPhoneError(""); // Clear error when input is empty
//       } else {
//         const phoneRegex = /^\d{7,12}$/;
//         if (!phoneRegex.test(value)) {
//           setPhoneError("Phone number must be between 7 and 12 digits.");
//         } else {
//           setPhoneError("");
//         }
//       }
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file input
//   const handleFileChange = async (e) => {
//     const resume = e.target.files[0];
//     if (resume) {
//       const fileData = new FormData();
//       fileData.append("file", resume);
//       fileData.append("upload_preset", process.env.REACT_APP_PRESET_NAME);
//       fileData.append("resource_type", "raw");

//       try {
//         const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
//           method: "POST",
//           body: fileData,
//         });
//         const data = await response.json();
//         setFormData((prevData) => ({
//           ...prevData,
//           resume: data.secure_url, // Store uploaded file URL
//         }));
//       } catch (error) {
//         console.error("Resume upload failed", error);
//       }
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (phoneError) {
//       return;
//     }

//     const emailParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       resume: formData.resume,
//     };

//     emailjs
//       .send(
//         process.env.REACT_APP_CAREER_SERVICE_ID,
//         process.env.REACT_APP_CAREER_TEMPLATE_ID,
//         emailParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         (response) => {
//           console.log(
//             "Email sent successfully!",
//             response.status,
//             response.text
//           );
//           setSuccessModal(true);
//           console.log("Success modal should be set to true");

//           // Clear success message after 5 seconds
//           setTimeout(() => {
//             setSuccessModal(false);
//           }, 5000);

//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             message: "",
//             resume: null,
//           });
//           formRef.current.reset();
//         },
//         (err) => {
//           console.error("Failed to send email:", err);
//         }
//       );
//   };

//   const getFactsheetURL = () => {
//     const path = window.location.pathname.toLowerCase();

//     // Mapping fund slugs to their factsheet PDF filenames
//     const factsheetMap = {
//       "/public-market/piper-serica-leader-portfolio":
//         "PMS Factsheet - Mar 2025.pdf",
//       "/public-market/piper-serica-nemero-uno-india-fund":
//         "FPI Factsheet - March 2025.pdf",
//     };

//     const matchedPath = Object.keys(factsheetMap).find((key) =>
//       path.includes(key)
//     );

//     if (matchedPath) {
//       return `${process.env.PUBLIC_URL}/docs/${factsheetMap[matchedPath]}`;
//     }

//     // Fallback in case URL doesn't match
//     return `${process.env.PUBLIC_URL}/docs/PMS-Factsheet-Feb-2025.pdf`;
//   };

//   return (
//     <>
//       <section>
//         <div>
//           <button
//             className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4 me-lg-4 me-md-4 me-4"
//             onClick={openFactsheetModal}
//           >
//             Factsheet
//           </button>
//         </div>

//         <div>
//           <button
//             className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4"
//             onClick={openPresentationModal}
//           >
//             Presentation
//           </button>
//         </div>
//       </section>

//       <Modal show={showFactsheetModal} onHide={closeFactsheetModal} centered>
//         <Modal.Header closeButton />
//         <Modal.Body>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               closeFactsheetModal();
//               const factsheetURL = getFactsheetURL();
//               window.open(factsheetURL, "_blank");
//             }}
//           >
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     id="email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-12">
//                 <div className="row">
//                   <div className="col-lg-3 d-flex justify-content-start">
//                     <button
//                       className="banner-btn blue-btn mt-0 mb-3"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                   <div className="col-lg-9">
//                     <p className="para subscribe-para mb-0">
//                       <i>
//                         *By submitting the contact form, you consent to all data
//                         in the form being used in accordance with
//                         <NavLink to="/privacy-policy">
//                           {" "}
//                           Piper Serics's data privacy policy
//                         </NavLink>
//                       </i>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>

//       <Modal
//         show={showPresentationModal}
//         onHide={closePresentationModal}
//         centered
//       >
//         <Modal.Header closeButton />
//         <Modal.Body>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               closePresentationModal();
//               const presentationURL = `${process.env.PUBLIC_URL}/docs/PMS-PPT-Mar-2025.pdf`;
//               window.open(presentationURL, "_blank");
//             }}
//           >
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     id="email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-12">
//                 <div className="row">
//                   <div className="col-lg-3 d-flex justify-content-start">
//                     <button
//                       className="banner-btn blue-btn mt-0 mb-3"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                   <div className="col-lg-9">
//                     <p className="para subscribe-para mb-0">
//                       <i>
//                         *By submitting the contact form, you consent to all data
//                         in the form being used in accordance with
//                         <NavLink to="/privacy-policy">
//                           {" "}
//                           Piper Serics's data privacy policy
//                         </NavLink>
//                       </i>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default FactsheetModal;

import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FactsheetModal = () => {
  const [showFactsheetModal, setShowFactsheetModal] = useState(false);
  const [showPresentationModal, setShowPresentationModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formDataPresentation, setFormDataPresentation] = useState({
    name: "",
    email: "",
  });

  const formRef = useRef();
  const formRefPresentation = useRef();

  const openFactsheetModal = (e) => {
    console.log("Opening Factsheet modal");
    setShowFactsheetModal(true);
  };

  const openPresentationModal = () => {
    setShowPresentationModal(true);
  };

  const closeFactsheetModal = () => setShowFactsheetModal(false);
  const closePresentationModal = () => setShowPresentationModal(false);

  const handleChange = (e, isPresentation = false) => {
    const { name, value } = e.target;
    if (isPresentation) {
      setFormDataPresentation((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getFactsheetURL = () => {
    const path = window.location.pathname.toLowerCase();
    const factsheetMap = {
      "/public-market/piper-serica-leader-portfolio":
        "PMS Factsheet - Mar 2025.pdf",
      "/public-market/piper-serica-nemero-uno-india-fund":
        "FPI Factsheet - March 2025.pdf",
    };

    const matchedPath = Object.keys(factsheetMap).find((key) =>
      path.includes(key)
    );

    if (matchedPath) {
      return `${process.env.PUBLIC_URL}/docs/${factsheetMap[matchedPath]}`;
    }

    return `${process.env.PUBLIC_URL}/docs/PMS-Factsheet-Feb-2025.pdf`;
  };

  const getPresentationUrl = () => {
    const path = window.location.pathname.toLowerCase();
    const presentationMap = {
      "/public-market/piper-serica-leader-portfolio":
        "PMS Presentation - Mar 2025.pdf",
      "/public-market/piper-serica-nemero-uno-india-fund":
        "FPI Presentation - Mar 2025.pdf",
    };

    const matchedPath = Object.keys(presentationMap).find((key) =>
      path.includes(key)
    );

    if (matchedPath) {
      return `${process.env.PUBLIC_URL}/docs/${presentationMap[matchedPath]}`;
    }

    return `${process.env.PUBLIC_URL}/docs/PMS-Factsheet-Feb-2025.pdf`;
  };

  const handleFactsheetSubmit = async (e, isPresentation = false) => {
    e.preventDefault();

    const emailParams = isPresentation ? formDataPresentation : formData;

    try {
      await emailjs.send(
        process.env.REACT_APP_FACTSHEET_SERVICE_ID,
        process.env.REACT_APP_FACTSHEET_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_FACTSHEET_PUBLIC_KEY
      );

      const downloadURL = isPresentation
        ? `${process.env.PUBLIC_URL}/docs/PMS Factsheet - Mar 2025.pdf`
        : getFactsheetURL();

      // Force download using blob
      const response = await fetch(downloadURL);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = downloadURL.split("/").pop();
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);

      if (isPresentation) {
        setFormDataPresentation({ name: "", email: "" });
        formRefPresentation.current.reset();
        closePresentationModal();
      } else {
        setFormData({ name: "", email: "" });
        formRef.current.reset();
        closeFactsheetModal();
      }
    } catch (error) {
      console.error("Email send failed:", error);
    }
  };

  const handlePresentationSubmit = async (e, isPresentation = false) => {
    e.preventDefault();

    const emailParams = isPresentation ? formDataPresentation : formData;

    try {
      await emailjs.send(
        process.env.REACT_APP_FACTSHEET_SERVICE_ID,
        process.env.REACT_APP_FACTSHEET_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_FACTSHEET_PUBLIC_KEY
      );

      const downloadURL = isPresentation
        ? `${process.env.PUBLIC_URL}/docs/PMS Presentation - Mar 2025.pdf`
        : getPresentationUrl();

      // Force download using blob
      const response = await fetch(downloadURL);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = downloadURL.split("/").pop();
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);

      if (isPresentation) {
        setFormDataPresentation({ name: "", email: "" });
        formRefPresentation.current.reset();
        closePresentationModal();
      } else {
        setFormData({ name: "", email: "" });
        formRef.current.reset();
        closeFactsheetModal();
      }
    } catch (error) {
      console.error("Email send failed:", error);
    }
  };

  return (
    <>
      <section>
        <div>
          <button
            type="button"
            className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4 me-lg-4 me-md-4 me-4"
            onClick={() => setShowFactsheetModal(true)}
          >
            Factsheet
          </button>
        </div>

        <div>
          <button
            type="button"
            className="banner-btn blue-btn tabs-btn mt-lg-4 mt-md-4 mt-4"
            onClick={openPresentationModal}
          >
            Presentation
          </button>
        </div>
      </section>

      <Modal show={showFactsheetModal} onHide={closeFactsheetModal} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <form ref={formRef} onSubmit={(e) => handleFactsheetSubmit(e, false)}>
            <div className="row">
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
                    required
                    onChange={(e) => handleChange(e, false)}
                  />
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
                    id="email"
                    required
                    onChange={(e) => handleChange(e, false)}
                  />
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
                        *By submitting the contact form, you consent to all data
                        in the form being used in accordance with
                        <NavLink to="/privacy-policy">
                          {" "}
                          Piper Serics's data privacy policy
                        </NavLink>
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPresentationModal}
        onHide={closePresentationModal}
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <form
            ref={formRefPresentation}
            onSubmit={(e) => handlePresentationSubmit(e, true)}
          >
            <div className="row">
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
                    required
                    onChange={(e) => handleChange(e, true)}
                  />
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
                    id="email"
                    required
                    onChange={(e) => handleChange(e, true)}
                  />
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
                        *By submitting the contact form, you consent to all data
                        in the form being used in accordance with
                        <NavLink to="/privacy-policy">
                          {" "}
                          Piper Serics's data privacy policy
                        </NavLink>
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FactsheetModal;
