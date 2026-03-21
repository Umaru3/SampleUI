import React from "react";
import { Link } from "react-router-dom";
import { login } from "../services/api";

function Login() {

  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginsubmit = async (e) => {
    e.preventDefault();
    const response = await login(identifier, password);
    console.log("Login response:", response);

    if(response) {
      if(response.token) {
        localStorage.setItem("token", response.token);
        alert("Login successful!");
      } else {
        alert("Login failed: " + (response.error || "Unknown error"));
      }
    }
  }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={loginsubmit}>
          <input 
            type="text" 
            placeholder="Username or Email" 
            value={identifier} 
            onChange={(e) => setIdentifier(e.target.value)} />

          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Login</button>
        </form>

        <Link to="/register">
          <button type="submit">Registration Page</button>
        </Link>
      </div>
    );
}

export default Login;