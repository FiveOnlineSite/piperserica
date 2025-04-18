import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);
      setSuccessMessage("Login successful! Redirecting to dashboard...");
      setErrorMessage(""); // Clear any previous error message
      console.log("login successful");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid email or password. Please try again.");

      setSuccessMessage(""); // Clear any previous success message
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    }
  };

  return (
    <div className="login-content">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-white-bg">
              <form onSubmit={handleLogin}>
                <div className="row">
                  <div className="col-md-12 text-center mb-4">
                    <h3>Piper Serica</h3>
                  </div>
                  <div className="col-md-12">
                    <div className="theme-form">
                      <label>Email Id</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="theme-form">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {errorMessage && (
                    <div className="error-message text-danger mt-2">
                      {errorMessage}
                    </div>
                  )}
                  {successMessage && (
                    <div className="success-message text-success mt-2">
                      {successMessage}
                    </div>
                  )}
                  <div className="col-md-12">
                    <div className="theme-form">
                      <button type="submit">Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
