import React from "react";
import "./business.css";
import InvestorCard from "./InvestorCard";

const Investors = () => {
  const InvestorData = [
    {
      id: 1,
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png",
      description:
        "Paystack is highly technical and fanatically customer oriented. We're excited to back such people in one of the world’s fastest-growing regions.",
      pic: "https://assets.paystack.com/%20assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg",
      Name: "Patrick Collison",
      Role: "CEO, Stripe",
    },
    {
      id: 2,
      img: "https://assets.paystack.com/assets/img/logos/merchants/_1536x491_crop_center-center_60_line/Visa-_-Color.png",
      description:
        "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
      pic: "https://assets.paystack.com/%20assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg",
      Name: "Otto Williams",
      Role: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa",
    },
    {
      id: 3,
      img: "https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png",
      description:
        "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
      pic: "https://assets.paystack.com/%20assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg",
      Name: "Michael Seibel",
      Role: "CEO, Partner, Y Combinator",
    },
  ];

  return (
    <div className="Investors_container">
      <div className="Investors_wrapper">
        <h2 style={{ fontSize: "40px", color: "#0d263c", width: "40%" }}>
          Backed by strong global partners
        </h2>
        <p style={{ fontSize: "20px", color: "#0d263c" }}>
          Paystack is backed by notable investors as well as some of the best{" "}
          <br></br>
          payments companies on the planet.
        </p>
        <div className="component">
          {InvestorData.map((item) => (
            <InvestorCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
