import React from "react";
import { Link } from "react-router-dom";
import { register } from "../services/api";

function Register() {

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let disabled = !username || !email || !password;

  const registersubmit = async (e) => {

    e.preventDefault();
    const response = await register(username, email, password);

    if(response) {
      if(response.isSuccess) {
        alert("Registration successful!");
      } else {
        alert("Registration failed: " + (response.error || "Unknown error"));
      }
    }
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formChecker = 
  disabled || 
  !isValidEmail(email) || 
  password.length < 5;
  
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={registersubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={formChecker}>
              Register
          </button>
        </form>
        <Link to="/login">
          <button type="submit">Login Page</button>
        </Link>
      </div>
    );
}

export default Register;