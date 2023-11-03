// Login.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/UserAction"; // Create this action
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  // Access the loading, success, and error states from the Redux store
  const loading = useSelector((state) => state.app.loading);
  const success = useSelector((state) => state.app.success);
  const error = useSelector((state) => state.app.error);

  const handleLogin = () => {
    // Don't allow login if already in the loading state
    if (loading || hasLoggedIn) {
      return;
    }
    // Dispatch the login action
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (success) {
      setHasLoggedIn(true);
      navigate("/dashboard"); // Redirect to the dashboard upon successful login
    }
  }, [success, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loading && <p>Loading...</p>}
      {success && <p style={{ fontSize: "14px", color: "green" }}>Login successful!</p>}
      {error && <p style={{ fontSize: "14px", color: "red" }}>Error: {error}</p>}

      <div>
        <input
          style={{ width: "93%" }}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging In..." : "Log In"}
      </button>
    </div>
  );
}

export default Login;
