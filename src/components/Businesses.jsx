import React from "react";
import Businesschild from "./Businesschild";

const Businesses = () => {
  return (
    <div className="business_container">
      <div className="business_wrapper">
        <h2
          style={{
            fontSize: "50px",
            width: "60vw",
            height: "10vh",
            color: "#0d263c",
          }}
        >
          Powering growth for amazing businesses
        </h2>
        <p
          style={{
            fontSize: "20px",
            width: "30vw",
            height: "10vh",
            color: "#0d263c",
          }}
        >
          Paystack is a growth engine for a new generation of innovative,
          forward-looking organizations operating in Africa.
        </p>
        <Businesschild />
      </div>
    </div>
  );
};

export default Businesses;
