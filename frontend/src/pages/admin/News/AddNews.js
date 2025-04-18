import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNews = () => {
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
        <h2>Add News</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Thumbnail</label>
                <input
                  type="file"
                  name="media"
                  accept=".webp"
                  onChange={(e) =>
                    setMedia({
                      ...media,
                      file: e.target.files[0],
                      // filename: e.target.files[0],
                      // filepath: e.target.files[0],
                      iframe: "",
                    })
                  }
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Title</label>
                <input type="text" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Date</label>

                <input type="date" name="title" required />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>News Category</label>

                <select
                  value={selectedService}
                  required
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    fetchGalleryNames();
                  }}
                >
                  <option value="">Select a Industry</option>
                  <option value="Factsheet">Advance Electronic</option>
                  <option value="Presentation">AI & SAAS</option>
                  <option value="Presentation">Consumer Tech</option>
                  <option value="Presentation">
                    Cyber Security & Chip Design
                  </option>
                  <option value="Presentation">Electric Vehicle</option>
                  <option value="Presentation">Fintech</option>
                  <option value="Presentation">Spacetech</option>
                  <option value="Presentation">Supply Chain Tech</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>URL</label>

                <input type="text" name="title" required />
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

export default AddNews;
