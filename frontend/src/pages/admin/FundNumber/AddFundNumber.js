import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";

const AddFundNumber = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedGallery, setSelectedGallery] = useState("");
  const [galleryNames, setGalleryNames] = useState([]);
  const [media, setMedia] = useState({ iframe: "", file: null });
  const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const fetchGalleryNames = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "GET",
        baseURL: `${apiUrl}/api`,
        url: `gallery_name/gallerynames?service_name=${selectedService}`,
      });

      console.log("Gallery names response:", response);
      console.log("Gallery names:", galleryNames);

      // setGalleryNames(
      //   response.data.galleryNames.map((gallery) => gallery.name)
      // );
      setGalleryNames(response.data.galleryNames);
    } catch (error) {
      console.error("Error fetching gallery names:", error);
    }
  };

  useEffect(() => {
    // fetchGalleryNames();
    if (selectedService) {
      fetchGalleryNames();
    }
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set isPublic to false if the checkbox is unchecked
      if (!isPublic) {
        setIsPublic(false);
      }

      const formData = new FormData();
      formData.append("gallery_name", selectedGallery);
      formData.append("service_name", selectedService);
      formData.append("isPublic", isPublic); // Include isPublic in the form data

      // Check if either an iFrame URL or a file is provided for the media field
      if (media.iframe && media.iframe.trim()) {
        formData.append("media", media.iframe.trim());
      } else if (media.file) {
        formData.append("media", media.file);
      } else {
        throw new Error(
          "Either a file or a valid URL is required for the media field."
        );
      }

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(`${apiUrl}/api/gallery`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(response.data.newGallery);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/gallery");
    } catch (error) {
      console.error("Error creating gallery:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add Fund Number</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund / Investor Name</label>
                <select
                  value={selectedService}
                  required
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    fetchGalleryNames();
                  }}
                >
                  <option value="">Select a Fund / Investor</option>
                  <option value="PMS">PMS</option>
                  <option value="FPI">FPI</option>
                  <option value="AIF">AIF</option>
                  <option value="AIF">Foreign Investor</option>
                  <option value="AIF">NRI Investor</option>
                  <option value="AIF">Family Office & Indian Investor</option>
                  <option value="AIF">Startup Founder & Enterpreneur</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Figures</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 1</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 2</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 3</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 1</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 2</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 3</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 1</label>
                <input type="text" name="title" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 2</label>
                <input type="text" name="title" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 3</label>
                <input type="text" name="title" />
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

export default AddFundNumber;
