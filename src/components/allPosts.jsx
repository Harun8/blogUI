import RecentImg1 from "../images/RecentImg1.jpg";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Pagination from "./pagination";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Post from "./post";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(6);
  

  useEffect(() => {
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) { 
          setPosts(response.data.slice(firstIndex,lastIndex)); 

          
          console.log(response.data); // log here
        });
    };

    getPosts();
  }, [firstIndex,lastIndex]);

  const onNextPage = () => {
    setFirstIndex(prevIndex => prevIndex + 6)
    setLastIndex(prevIndex => prevIndex + 6)
    console.log("clickeddd");
  }

  const onPostClick = (post) => {
    // <Routes>
    //   <Route path="/post/{id}" element={<Post></Post>}>
        
    //   </Route>
    // </Routes>
    console.log("post clicked", post);
  }
  return (
    <> 
    <div class=" mx-5 my-5 row row-cols-1 row-cols-md-3 g-5">
      {posts.map((post) => {
        return (
          <div className="col">
            <Link to={`/post/${post.id}`}  style={{ textDecoration: 'none' }}> 
            <div onClick={() => onPostClick(post)} className="card">
              <img src={RecentImg1} className="card-img-top" alt="..." />
              <div className="card-body bg-warning-subtle">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 200)}</p>
              </div>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
    <Pagination onNextPage={onNextPage}></Pagination>
    </>
  );
};

export default AllPosts;
