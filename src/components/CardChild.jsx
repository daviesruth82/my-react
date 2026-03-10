import React from "react";
import "./Animations.css";
const CardChild = ({ data }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={data?.img} alt="" />
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default CardChild;
