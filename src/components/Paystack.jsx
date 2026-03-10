import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Animation from "./Animation";
import Card from "./Card";
import Businesses from "./Businesses";
import Investors from "./Investors";
import Moreinfo from "./Moreinfo";
import Footer from "./Footer";

const Paystack = () => {
  const AnimationData = [
    {
      id: 1,
      title: "Simple, easy payments",
      description: "Building a business is hard. Getting paid shouldn't be.",
      img: "https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif",
      title2: "Delight customers with a seamless payments experience",
      description2:
        "Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.",
      list: ["card", "Bank Account", "Bank Transfer", "USSD"],

      title3: "Enjoy phenomenal transaction success rates",
      description3:
        "We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.",
      url: "https://paystack.com/success-rates",
      layout: "row",
    },
    {
      id: 2,
      title2: "Build custom payments experiences with well-documented APIs",
      description2:
        "Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.",
      list: [
        "Collect one-time and recurring payments from your app or website",
        "Make instant transfer",
        "Retrieve all your transaction and customer data",
        "Verify the identity of customers",
      ],
      img: "https://assets.paystack.com/assets/img/content/_800x714_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png",
      layout: "row-reverse",
    },
    {
      id: 3,
      img: "https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4",
      title2:
        "Protect yourself and your customers with advanced fraud detection",
      description2:
        "Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.",
      title3: "Detailed reporting for accounting, reconciliation, and audits",
      description3:
        "Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports",
      layout: "row",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "max-content",
        backgroundColor: "var(--background-color)",
      }}
    >
      <Nav />
      <Hero />
      <Animation data={AnimationData[0]} />
      <Animation data={AnimationData[1]} />
      <Animation data={AnimationData[2]} />
      <Card />
      <Businesses />
      <Investors />
      <Moreinfo />
      <Footer />
    </div>
  );
};

export default Paystack;
