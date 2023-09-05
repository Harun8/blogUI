import React from "react";
import "../css/header.css";

const Footer = () => {
  return (
    <div className="card text-center mx-5 bg-success py-4">
      <div class="card-body">
        <h5 class="card-title text-white">Start your 30-day free trial</h5>
        <p class="card-text text-white pt-2">
          {" "}
          Join over 4,000+ startups already growing with Untitled
        </p>
        <button type="button" class="btn btn-outline-light">
          Success
        </button>
      </div>
    </div>
  );
};

export default Footer;
