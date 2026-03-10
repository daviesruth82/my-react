import React from "react";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="footer_wrap"
        style={{
          // backgroundColor: "blue",
          width: "80%",
          height: "80%",
          display: "flex",
        }}
      >
        <div
          className="list1"
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <h4>Contact Us</h4>
          <p style={{ color: "lightblue" }}>hello@paystack.com</p>
          <div style={{ display: "flex", gap: "5px" }}>
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
          <p>Paystack is a Stripe company</p>
          <img
            style={{ width: "70px", height: "40px" }}
            src="https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png"
            alt=""
          />
        </div>

        <div className="list2">
          <h4>Lagos</h4>
          <ul>
            <li>126 Joel Ogunnaike Street,</li>
            <li>Ikeja GRA, Ikeja,</li>
            <li>Lagos, Nigeria</li>
            <li style={{ color: "lightblue" }}>+234 201 631 6160</li>
            <h3> Accra</h3>
            <li>VIVO Place,</li>
            <li>A2 Cantonments City Street,</li>
            <li> Cantonments, </li>
            <li>Accra, Ghana</li>

            <h4> Abidjan</h4>
            <li>AfricaWorks,</li>
            <li> Rue du 7 décembre,</li>
            <li>Zone 4/C,</li>
            <li>Abidjan, Côte d'Ivoire</li>
          </ul>
        </div>
        <div className="list3">
          ,<h3>San Francisco </h3>
          <ul>
            <li> 354 Oyster Point Blvd. </li>
            <li>South San Francisco,</li>
            <li>CA 94080 </li>
            <li>United States</li>

            <h4>Dubai</h4>
            <li> Office 338,</li>
            <li>Building 16,</li>
            <li>Dubai Internet City,Dubai</li>
            <li> United Arab Emirates</li>
          </ul>
        </div>
        <div className="list4">
          <h3>Cape Town </h3>
          <ul>
            <li>Unit 6, 22fifty Building 1,</li>
            <li>32 Jamieson Street,</li>
            <li>Cape Town 8000</li>
            <li>South Africa</li>

            <h3>Nairobi</h3>
            <li>The Pavilion (1st Floor)</li>
            <li>Lower Kabete Road, Westlands</li>
            <li> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
