import React, { useState } from "react";
import { Link, NavLink , useNavigate} from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitDisable, setSubmitDisable] = useState(true);

  // Define schema here
  const schema = Joi.object({
    username: Joi.string()
      .required()
      .min(3)
      .label("Username"),

    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
  });

  const notify = (currentErrors) => {
    Object.values(currentErrors).forEach((error) => {
      toast.error(error, { theme: "colored" });
    });
  };

  // Define validate function here
  const validate = () => {
    console.log("validate");
    const options = { abortEarly: false };
    const result = Joi.validate(account, schema, options);

    if (!result.error) {
      console.log("no errors");
      setSubmitDisable(false);

      return null;
    }
    setSubmitDisable(true);

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

    localStorage.setItem("Username", account.username);
    navigate('/');
  };

  const handleChange = (e) => {
    console.log("handleChange");
    const newAccount = { ...account };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(newAccount);
    validate();
  };


  return (
    <div>
      <ToastContainer />
      {/* Same as */}
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />{" "}
      <div className="background-image"></div>
      <form className="form flex" onSubmit={handleSubmit}>
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
          <span>Username</span>
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
        <button className="submit my-2"  disabled={submitDisable}>
          {/* <Link to="/"> Submit </Link> */}
          Submit
        </button>{" "}
        {/* Note the change here */}
        <p className="signin">
          Don't have an account ? <NavLink to="/register">Register</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
