import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../login/login";

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <Link to="/login">
          <button type="submit">Login Page</button>
        </Link>
      </div>
    );
  }
}