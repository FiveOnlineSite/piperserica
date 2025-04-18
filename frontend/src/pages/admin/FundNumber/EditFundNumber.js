import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFundNumber = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null);
  const [galleryNames, setGalleryNames] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedGallery, setSelectedGallery] = useState("");
  const [serviceChanged, setServiceChanged] = useState(false); // Track if service name has been changed
  // const [media, setMedia] = useState({ iframe: "", file: null });
  // const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    service_name: "",
    gallery_name: "",
    media: {
      file: null,
      iframe: "",
      filepath: "",
    },
  });

  useEffect(() => {
    const fetchGallery = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `gallery/${id}`,
        });
        const galleryData = response.data.gallery;
        setGallery(galleryData);
        setSelectedService(galleryData.service_name);
        setSelectedGallery(galleryData.gallery_name);

        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          service_name: galleryData.service_name,
          gallery_name: galleryData.gallery_name,
          media: {
            file: null,
            iframe: galleryData.media.iframe || "",
            filepath: galleryData.media.filepath || "",
          },
          isPublic: galleryData.isPublic,
        });

        // Fetch gallery names based on the selected service
        fetchGalleryNames(galleryData.service_name);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "media") {
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          media: {
            file: files[0],
            filename: files[0].name,
            filepath: URL.createObjectURL(files[0]),
            iframe: "",
          },
        });
      } else {
        setFormData({
          ...formData,
          media: {
            ...formData.media,
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

  const fetchGalleryNames = async (service_name) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.get(
        `${apiUrl}/api/gallery_name/gallerynames?service_name=${service_name}`
      );

      setGalleryNames(response.data.galleryNames);
      // setSelectedGallery(""); // Reset selected gallery when service changes
    } catch (error) {
      console.error("Error fetching gallery names:", error);
    }
  };

  useEffect(() => {
    if (serviceChanged) {
      fetchGalleryNames(selectedService);
    }
  }, [selectedService, serviceChanged]);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setServiceChanged(true); // Mark that the service name has been changed
    setFormData((prevFormData) => ({
      ...prevFormData,
      service_name: e.target.value,
    }));
  };

  const handleGalleryChange = (e) => {
    setSelectedGallery(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      gallery_name: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("service_name", selectedService);

      formDataToSend.append("gallery_name", selectedGallery);

      if (formData.media.file) {
        formDataToSend.append("media", formData.media.file);
      } else if (formData.media.iframe.trim()) {
        formDataToSend.append("media", formData.media.iframe.trim());
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

export default EditFundNumber;
