import React from "react";
import map from "../assets/map.svg";
import dominos from "../assets/dominos.svg";
import mtn from "../assets/mtn.svg";
import bolt from "../assets/bolt.svg";
import Axa from "../assets/Axa.svg";
import play from "../assets/play.svg";
const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        // backgroundColor: "purple",
        display: "flex",
        padding: "100px",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "",
          color: "#0d263c",
          // padding: "30px",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>
          Modern online and offline payments for Africa
        </h1>
        <p style={{ fontSize: "20px" }}>
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </p>

        <button
          style={{
            backgroundColor: "var(--button-color)",
            color: "whitesmoke",
            fontSize: "18px",
            width: "180px",
            height: "30px",
            borderRadius: "5px",
            // padding: "5px",
            margin: "10px",
          }}
        >
          Create free account
        </button>

        <a href="#" style={{ color: "green" }}>
          or Contact sales
        </a>
        <div
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <p style={{ color: "#0d263c" }}>
            Trusted by over 200,000 businesses{" "}
          </p>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            <img
              style={{ height: "40px", width: "190px" }}
              src={dominos}
              alt=""
            />
            <img style={{ height: "40px", width: "50px" }} src={mtn} alt="" />
            <img style={{ height: "40px", width: "70px" }} src={bolt} alt="" />
            <img style={{ height: "40px", width: "230px" }} src={Axa} alt="" />
          </div>
        </div>
      </div>
      <div style={{ width: "50%", height: "100%", padding: "10px" }}>
        <img
          style={{ width: "100%", height: "70%", objectFit: "cover" }}
          src={map}
          alt=""
        />
        <div
          style={{
            fontSize: "20px",
            color: "navy",
            // backgroundColor: "yellow",
            width: "100",
            height: "30%",
            display: "flex",
            gap: "5px",
          }}
        >
          <p>
            Watch MTN Chief Transformation Officer, Olubayo <br></br> Adekambi,
            discuss working with Paystack.{" "}
          </p>
          <img style={{ height: "30px" }} src={play} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
