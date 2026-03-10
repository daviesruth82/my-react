import React from "react";
import Paystack from "./Paystack";
import paystack from "../assets/paystack.svg";
import flag from "../assets/flag.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="header_container">
      <div className="nav">
        <div className="navright">
          <img style={{ height: "40px" }} src={paystack} alt="" />

          <ul className="list1">
            <li> Why paystack</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className="navleft">
          <ul className="list2">
            <li>Developers</li>
            <li>Support</li>
            <li>Login</li>
          </ul>
          <div className="btn_con">
            <button>Create free account</button>
            <img style={{ height: "30px" }} src={flag} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Nav;
