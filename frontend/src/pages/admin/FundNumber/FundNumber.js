import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const FundNumber = () => {
  const [galleries, setGalleries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "FactsheetPresentation",
        });
        console.log(response.data.galleries);
        setGalleries(response.data.galleries);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchGalleries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `FactsheetPresentation/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setGalleries(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setGalleries(
        galleries.filter(
          (FactsheetPresentation) => FactsheetPresentation._id !== id
        )
      );
      setTimeout(() => {
        navigate("/admin/FactsheetPresentation");
      }, 3000);
    } catch (error) {
      console.error("Error deleting FactsheetPresentation:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Fund Number
          <NavLink to="/admin/add/fund-number" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add Fund Number
          </NavLink>
        </h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Fund / Investor Name</th>
                    <th className="text-center">Fund Numbers</th>
                    <th className="text-center">Fund Number Title</th>
                    <th className="text-center">Fund Number Description</th>
                    <th className="text-center">Fund Figures</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {galleries &&
                    galleries.map((FactsheetPresentation) => (
                      <tr key={FactsheetPresentation._id}>
                        <td>{FactsheetPresentation.service_name}</td>
                        <td className="text-center">
                          {FactsheetPresentation.FactsheetPresentation_name}
                        </td>
                        <td className="table-profile-img text-center">
                          {FactsheetPresentation.type === "image" ? (
                            <img
                              src={`${process.env.REACT_APP_API_URL}/${FactsheetPresentation.media.filepath}`} // Assuming filepath contains the path to the image
                              alt={`${FactsheetPresentation.media.filename}`}
                              style={{ width: "50px", height: "50px" }}
                              loading="lazy"
                            />
                          ) : (
                            <span>{FactsheetPresentation.media.iframe}</span>
                          )}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/FactsheetPresentation/${FactsheetPresentation._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(FactsheetPresentation._id)
                            }
                          >
                            <i class="las la-trash"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default FundNumber;
