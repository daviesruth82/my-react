import React from "react";
import CardChild from "./CardChild";

const Card = () => {
  const CardData = [
    {
      id: 1,
      img: "https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg",
      title: "Paystack for Global Brands",
      description: "We help global brands accept payments from across Africa",
      url: "Learn more",
    },
    {
      id: 2,
      img: "https://assets.paystack.com/assets/img/content/For-Entrepreneurs_180823_165709.svg",
      title: "Paystack for Entrepreneurs",
      description:
        "From startup to scale-up, we can support you at every stage of your businesses’ growth",
      url: "Learn more",
    },
    {
      id: 3,
      img: "https://assets.paystack.com/assets/img/content/For-Large-Corporations_180823_165502.svg",
      title: "Paystack for Large Organizations",
      description:
        "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
      url: "Learn more",
    },
  ];

  return (
    <div className="papa">
      <div className="papa_wrapper">
        <h1 style={{ color: "#0d263c" }}>Trusted by 200,000+ businesses</h1>
        <h3 style={{ color: "#0d263c" }}>
          Thousands of organizations of all sizes trust Paystack to grow their
          business.
        </h3>
        <div className="component_holder">
          {CardData?.map((item) => (
            <CardChild key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
