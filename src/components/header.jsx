import React, { Component } from "react";
import "../css/header.css";

const Header = () => {
  return (
    <div class="card p-color removeBorder center  ">
      <div class="card-body ">
        <p class="card-text ">Our blog</p>
        <h1 class="card-title ">The Untitled UI journal</h1>
        <p class="card-text  ">
          The Untitled UI Journal features carefully selected good works from
          studios
          <br /> and designers from around the globe. Subscribe for new post in
          your inbox
        </p>
        <form>
          <input type="text" placeholder="Enter your email"></input>
          <button className="mx-0">Get started</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
