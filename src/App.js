import logo from "./logo.svg";
import "../src/css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import RecentPosts from "./components/recentPosts";

function App() {
  return (
    <body class="p-color">
      <Navbar> </Navbar>

      <Header></Header>

      <RecentPosts></RecentPosts>
    </body>
  );
}

export default App;
