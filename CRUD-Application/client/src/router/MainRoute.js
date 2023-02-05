import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../components/counter/Counter";
import Home from "../pages/Home";
import UserAuth from "../pages/userAuth/UserAuth";
const MainRoute = () => {
  return (
    <Fragment>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/">
          <Route index element={<Counter />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<UserAuth />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </Fragment>
  );
};

export default MainRoute;
