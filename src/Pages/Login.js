import React from "react";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
function Login() {
    
  const { setToken } = useContext(AuthContext);

  const handleClick = () => {
    setToken("logged-in");
  };
  return (
    <div className="login_container">
      <label>Welcome Back </label>

      <input placeholder="Enter your name" />

      <button onClick={() => handleClick()}>Login</button>
    </div>
  );
}

export default Login;
