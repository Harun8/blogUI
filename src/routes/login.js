import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // Define schema here
  const schema = Joi.object({
    username: Joi.string()
      .required()
      .label("Username"),

    password: Joi.string()
      .required()
      .label("Password"),
  });

  const notify = (currentErrors) => {
    Object.values(currentErrors).forEach((error) => {
      toast.error(error, { theme: "colored" });
    });
  };

  // Define validate function here
  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(account, schema, options);

    if (!result.error) {
      return null;
    }

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  // Define handleSubmit function here
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const errors = validate();
    console.log(errors);
    setErrors(errors || {});
    if (errors) {
      notify(errors); // Notify based on the newly computed errors.

      return;
    }
  };

  const handleChange = (e) => {
    const newAccount = { ...account };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(newAccount);
  };
  return (
    <div>
      <ToastContainer />
      {/* Same as */}
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />{" "}
      <div className="background-image"></div>
      <form className="form" onSubmit={handleSubmit}>
        {" "}
        {/* Note the change here */}
        <p className="title">Login </p> {/* Note the change here */}
        <p className="message">Login now and get full access to our app. </p>
        <label className="my-2">
          <input
            value={account.username}
            onChange={handleChange}
            className="input"
            name="username"
            type="username"
            placeholder=""
          />
          <span>username</span>
        </label>
        <label>
          <input
            value={account.password}
            name="password"
            onChange={handleChange}
            className="input"
            type="password"
            placeholder=""
          />
          <span>Password</span>
        </label>
        <button className="submit my-2">Submit</button>{" "}
        {/* Note the change here */}
        <p className="signin">
          Don't have an account ? <NavLink to="/register">Register</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
