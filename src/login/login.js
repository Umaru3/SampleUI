import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {

  render() {

    return (

      <div>
        
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>

        <Link to="/register">
          <button type="submit">Registration Page</button>
        </Link>

      </div>
    );
  }
}