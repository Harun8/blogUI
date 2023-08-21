import "../src/css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Navigate, Switch, Routes } from "react-router-dom";
import Login from "./routes/login";
import MainPage from "./routes/mainPage";

import HowItWorks from "./routes/howItWorks";
import Pricing from "./routes/pricing";
import NotFound from "./routes/notFound";
import SignIn from "./routes/signin";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}>
          {" "}
        </Route>
        <Route path="/howitworks" element={<HowItWorks> </HowItWorks>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/not-found" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
