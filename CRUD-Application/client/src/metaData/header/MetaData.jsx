import React from "react";
import "./metaData.scss";
const MetaData = ({ title }) => {
  return (
    <div className="metaData">
      <h1>{title}</h1>
    </div>
  );
};

export default MetaData;
