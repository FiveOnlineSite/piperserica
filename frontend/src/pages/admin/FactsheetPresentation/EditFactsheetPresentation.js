import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditFactsheetPresentation = () => {
  const { id } = useParams();
  const [factsheetPresentation, setFactsheetPresentation] = useState(null);
  const [selectedFactsheetPresentation, setSelectedFactsheetPresentation] =
    useState("");
  const [selectedFundName, setSelectedFundName] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fund_name: "",
    option: "",
    file_upload: {
      filename: "",
      filepath: "",
    },
  });

  useEffect(() => {
    const fetchFactsheetPresentation = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `factsheet-presentation/${id}`,
        });
        const factsheetPresentationData = response.data.factsheetPresentation;
        console.log("Factsheetpresentation", factsheetPresentationData);
        setFactsheetPresentation(factsheetPresentationData);
        setSelectedFundName(factsheetPresentation.fund_name);
        setSelectedFactsheetPresentation(factsheetPresentation.option);
        // Set media state from factsheetPresentationData
        // setMedia(factsheetPresentationData.media);

        // Set formData based on gallery media type
        setFormData({
          fund_name: factsheetPresentationData.fund_name,
          option: factsheetPresentationData.option,
          file_upload: {
            filename: factsheetPresentationData.file_upload[0]?.filename || "",
            filepath: factsheetPresentationData.file_upload[0]?.filepath || "",
          },
        });
      } catch (error) {
        console.error("Error fetching factsheet / presentation:", error);
      }
    };

    fetchFactsheetPresentation();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file_upload") {
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          file_upload: {
            file: files[0],
            filename: files[0].name,
            filepath: URL.createObjectURL(files[0]),
          },
        });
      } else {
        setFormData({
          ...formData,
          file_upload: {
            ...formData.file_upload,
            iframe: value,
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    setFactsheetPresentation(selectedFactsheetPresentation);
  }, [selectedFactsheetPresentation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("option", selectedFactsheetPresentation);

      formDataToSend.append("fund_name", selectedFundName);

      if (formData.file_upload.file) {
        formDataToSend.append("file_upload", formData.file_upload.file);
      }

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `gallery/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("Gallery updated:", response.data.updatedGallery);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/gallery");
    } catch (error) {
      console.error("Error updating gallery:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Factsheet / Presentation</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Name</label>
                <select
                  value={formData.fund_name}
                  // onChange={handleServiceChange}
                >
                  <option value="">Select a Fund</option>
                  <option value="PMS">PMS</option>
                  <option value="FPI">FPI</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Factsheet / Presentation</label>
                <select
                  value={formData.option}
                  // onChange={handleServiceChange}
                >
                  <option value="">Select a option</option>
                  <option value="Factsheet">Factsheet</option>
                  <option value="Presentation">Presentation</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>File Upload</label>

                <input type="file" name="file_upload" />
              </div>
            </div>

            {errorMessage && (
              <div className="error-message text-danger mt-2">
                {errorMessage}
              </div>
            )}

            <div className="col-12">
              <div className="theme-form">
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditFactsheetPresentation;
