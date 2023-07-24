import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../App.css";
import "../css/header.css";

const Header = () => {
  return (
    <nav className=" p-color navbar  navbar-expand-lg   ">
      <div className=" p-color  container-fluid mx-auto ">
        <a className="navbar-brand " href="#">
          <i class="mx-2 bi bi-box2-heart-fill text-info-emphasis"></i>
          <span className="text-info-emphasis">
            <b className="fs-6 ">
              Untitled UI <i className="fs-6">journal</i>
            </b>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a
                className="nav-link active text-info-emphasis mx-3"
                aria-current="page"
                href="#"
              >
                <b>Home </b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-info-emphasis" href="#">
                <b>
                  Products <i class="bi bi-plus"></i>
                </b>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active  text-info-emphasis"
                href="#"
                role="button"
              >
                <b>
                  {" "}
                  Resources <i class="bi bi-plus"></i>{" "}
                </b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-info-emphasis"
                aria-current="page"
                href="#"
              >
                <b> Pricing</b>
              </a>
            </li>
          </ul>
          <form className="d-flex mx-5" role="search">
            <button className="btn btn-outline-success mx-2" type="button">
              <i class="bi bi-play"></i> How it works
            </button>

            <button className="btn btn-success " type="button">
              Get started
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
