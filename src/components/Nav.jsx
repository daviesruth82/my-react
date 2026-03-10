import React from "react";
import Paystack from "./Paystack";
import paystack from "../assets/paystack.svg";
import flag from "../assets/flag.svg";

const Nav = () => {
  return (
    <div
      className="header_container"
      style={{
        width: "100%",
        height: "10%",
        // backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="nav"
        style={{
          // backgroundColor: "pink",
          width: "90%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "10px",
            fontWeight: "bold",
          }}
        >
          <img style={{ height: "40px" }} src={paystack} alt="" />

          <li>Why paystack</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Learn</li>
        </ul>
        <div
          style={{
            backgroundColor:"red",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <ul
            style={{
        backgroundColor:"greenyellow",
              display: "flex",
              listStyleType: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "10px",
              color: "#0d263c",
            }}
          >
            <li>Developers</li>
            <li>Support</li>
            <li>Login</li>
            </ul>

            <button
              style={{
                backgroundColor: "var(--button-color)",
                color: "whitesmoke",
                fontSize: "18px",
                width: "180px",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              Create free account
            </button>
          
          <img style={{ height: "30px" }} src={flag} alt="" />
        </div>
      </div>
    </div>
  );
};


export default Nav;

