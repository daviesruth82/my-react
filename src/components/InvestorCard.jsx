import React from "react";

const InvestorCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card_container">
      <div className="card_wrap">
        <img
          style={{ width: "40px", height: "20px", objectFit: "contain" }}
          src={data?.img}
          alt=""
        />
        <p>{data?.description}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            src={data?.pic}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <h4>{data?.Name}</h4>
            <p>{data?.Role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
