import RecentImg1 from "../images/RecentImg1.jpg";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
          setPosts(response.data);
          console.log(response.data); // log here
        });
    };

    getPosts();
  }, []);
  return (
    <div class=" mx-5 my-5 row row-cols-1 row-cols-md-3 g-5">
      {posts.slice(0, 6).map((post) => {
        return (
          <div className="col">
            <div className="card">
              <img src={RecentImg1} className="card-img-top" alt="..." />
              <div className="card-body bg-warning-subtle">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 200)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
