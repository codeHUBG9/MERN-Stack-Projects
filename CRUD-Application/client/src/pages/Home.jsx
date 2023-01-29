import React from "react";
import GlobalFilter from "../components/GlobalFilter.jsx/GlobalFilter";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <GlobalFilter title="Hello" />
      <div></div>
    </div>
  );
};

export default Home;
