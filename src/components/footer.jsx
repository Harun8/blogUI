import React from "react";
import "../css/header.css";

const Footer = () => {
  return (
    <div class="card p-color removeBorder center  ">
      <div class="card-body ">
        <b>
          <p class="card-text text-info-emphasis ">Our blog</p>
        </b>

        <h1 class="card-title text-info-emphasis  display-4   ">
          <b>
            {" "}
            The Untitled UI <i>journal </i>
          </b>
        </h1>

        <b>
          <p class="card-text text-info-emphasis my-4">
            The Untitled UI Journal features carefully selected good works from
            studios
            <br /> and designers from around the globe. Subscribe for new post
            in your inbox
          </p>
        </b>
        <div class="input-group mb-3 justify-content-center w-25 mx-auto">
          <input
            type="text"
            class="form-control w-25 border-2 border-success rounded "
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button className="btn btn-success  " type="button">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
