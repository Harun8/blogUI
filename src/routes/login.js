import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="background-image"></div>
      <form class="form">
        <p class="title">Login </p>
        <p class="message">Login now and get full access to our app. </p>

        <label className="my-2">
          <input class="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>

        <label>
          <input class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>

        <button class="submit my-2">Submit</button>
        <p class="signin">
          Don't have an acount ? <NavLink to="/register">Register</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
