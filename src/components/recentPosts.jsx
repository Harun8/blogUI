import React, { Component, useEffect, useState } from "react";
import RecentImg1 from "../images/RecentImg1.jpg";

import axios from "axios";
import "../css/header.css";

const RecentPosts = () => {
  const [image, setImage] = useState();

  // https://dummyjson.com/docs/image
  useEffect(() => {
    axios
      .get("https://image.dummyjson.com/400x200/008080/ffffff?text=Hello+Peter")
      .then(function(response) {
        setImage(response.config.url);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6  ">
            <div className="text-center">
              <img className="w-100 rounded" src={RecentImg1}></img>
            </div>
            <div>
              <h5 class="card-title my-4">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-5 mx-5  ">
            <div className="">
              {" "}
              <img className="w-50 rounded " src={RecentImg1}></img>
              <span className="justify content">
                {" "}
                This is a wider card with sup
              </span>
            </div>
            <div className="mt-5">
              {" "}
              <img className="w-50 rounded " src={RecentImg1}></img>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex flex-column justify-content-center">
            {" "}
            <img
              className="w-75 rounded mx-auto d-block  "
              src={RecentImg1}
            ></img>
            <h5 class="card-title my-4 ">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="col-md-5  ">
            <div className="">
              {" "}
              <img className="w-50 rounded float-left" src={RecentImg1}></img>
              <span className="justify content"></span>
            </div>
            <div className="mt-5">
              {" "}
              <img className="w-50 rounded float-left" src={RecentImg1}></img>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="container overflow-hidden text-center m">
        <div class="row gx-1">
          <div class="col ml-3 ">
            <div class="p-3 ">
              <div class="card-body p-color  ">
                <img className="w-75 rounded float-left" src={RecentImg1}></img>
                <h5 class="card-title my-4">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div class="col col-sm-4">
            <div class="p-3">
              <div class="card-body p-color d-flex flex-row align-items-start">
                <img className="w-100 rounded mr-3" src={RecentImg1}></img>
                <div>
                  <h5 class="card-title my-4">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default RecentPosts;
