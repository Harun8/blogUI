import logo from "./logo.svg";
import "../src/css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <body class="p-color">
      <Navbar> </Navbar>

      <div>
        <Header></Header>
      </div>
    </body>
  );
}

export default App;
