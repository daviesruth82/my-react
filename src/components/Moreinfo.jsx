import React from "react";
import "./Footer.css";
const Moreinfo = () => {
  return (
    <div className="info_container">
      <div className="info_wrapper">
        <div className="header_hold">
          <p>Try Paystack Now</p>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "50px", width: "50%" }}>
              Start accepting payments in just 30 minutes
            </h2>
            <button
              style={{
                backgroundColor: "var(--button-color)",
                height: "40px",
                color: "white",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              create a free account
            </button>
          </div>
        </div>
        <div className="list_wrap">
          <div className="list1">
            <h4>Why Paystack</h4>
            <ul>
              <li>Why Choose Paystack</li>
              <li>Success rates</li>
              <li>For Entrepreneurs</li>
              <li>For Corporates</li>
              <li>For International Companies</li>
              <li>For Startups</li>

              <li>For Fintechs</li>
              <li>For Agencies</li>
              <li>For Schools</li>
              <li>For Betting</li>
            </ul>
          </div>
          <div className="list2">
            <h4>Pricing</h4>
            <ul>
              <li>Nigeria</li>
              <li>Ghana</li>
              <li>South Africa</li>
              <li>Kenya</li>
              <li>Côte d'Ivoire</li>
              <h4>Customers</h4>
              <li>Testimonials</li>
              <li> Learn </li>
              <li>Blog </li>
              <li>Guides</li>
              <li>Video Tutorials</li>
              <li>Decode Fintech</li>
              <li>Commerce</li>
              <li>Terminal</li>
            </ul>
          </div>
          <div className="list3">
            <h3>Developers </h3>
            <ul>
              <li>Overview </li>
              <li>Documentation</li>
              <li>Integrations</li>
              <li>Status</li>
              <li>Page</li>
              <h4>Community</h4>
              <li>Service Partner Directory</li>
              <li>Nigeria Logos</li>
              <li>Support</li>
              <li>Help Desk</li>
              <li>Contact Us</li>
              <li>Why was I debited?</li>
              <li>Register your business</li>
            </ul>
          </div>

          <div className="list4">
            <h3>About</h3>
            <ul>
              <li>Company</li>
              <li>Changelog</li>
              <li>Subscribe</li>
              <li>Compliance</li>
              <li>Careers</li>
              <li>Media Kit</li>
              <li>Privacy & Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
