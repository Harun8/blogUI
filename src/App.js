import "../src/css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import RecentPosts from "./components/recentPosts";
import AllPosts from "./components/allPosts";
import Footer from "./components/footer";
import Pagination from "./components/pagination";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <body class="p-color">
      <Switch>
        <Route path="/login" Component={login}>
          {" "}
        </Route>
      </Switch>

      <Navbar> </Navbar>

      <Header></Header>

      <RecentPosts></RecentPosts>

      <AllPosts></AllPosts>

      <Pagination></Pagination>

      <Footer></Footer>
    </body>
  );
}

export default App;
