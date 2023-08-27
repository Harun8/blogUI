import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import RecentPosts from "../components/recentPosts";
import AllPosts from "../components/allPosts";
import Footer from "../components/footer";
import Pagination from "../components/pagination";
import "../css/App.css";

const MainPage = () => {
  return (
    <body class="p-color">
      <Header></Header>

      <RecentPosts></RecentPosts>

      <AllPosts></AllPosts>

      <Pagination></Pagination>

      <Footer></Footer>
    </body>
  );
};

export default MainPage;
