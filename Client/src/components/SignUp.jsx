import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/actions/UserAction";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Access the loading, success, and error states from the Redux store
  const loading = useSelector((state) => state.app.loading);
  const success = useSelector((state) => state.app.success);
  const error = useSelector((state) => state.app.error);

  const handleSignUp = () => {
    // Don't allow signup if already in the loading state
    if (loading) {
      return;
    }
    // Dispatch the signup action
    dispatch(signUpUser(name, email, password));
    console.log(success)
    if(success){
      setTimeout(()=>{
        navigate("/login");
      },3000)
    }

  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {loading && <p>Loading...</p>}
      {success && <p style={{fontSize:'14px',color:'green'}}>Signup successful!</p>}
      {error && <p style={{fontSize:'14px',color:'red'}} >Error: {error}</p>}

      <div>
        <input
          style={{ width: "93%" }}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button className="signup-button" onClick={handleSignUp} disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
}

export default SignUp;
