import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/header.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // This includes Bootstrap's JavaScript and Popper.js
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className=" p-color navbar  navbar-expand-lg  mx-5 py-5 ">
      <div className=" p-color  container-fluid  ">
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
            <li className="nav-item dropdown">
              <a
                className="nav-link active text-info-emphasis dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>
                  Products <i class="bi bi-plus"></i>
                </b>
              </a>
              <ul
                class="dropdown-menu p-color"
                aria-labelledby="dropdownMenuLink"
              >
                <li className=" p-color">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active text-info-emphasis dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>
                  Resources <i class="bi bi-plus"></i>
                </b>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
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

export default Navbar;
