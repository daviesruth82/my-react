import React from "react";
import "../components/Animations.css";

const Animation = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        backgroundColor: "var(--text-color)",
        color: "#0d263c",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: data.layout,
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: data.layout,
        }}
      >
        <div
          style={{
            // backgroundColor: "#f7ffff",
            width: "50%",
            height: "100%",
          }}
        >
          <h2 style={{ fontSize: "50px", padding: "20px" }}>{data?.title}</h2>
          <p style={{ fontSize: "20px", padding: "20px", objectFit: "cover" }}>
            {data?.description}
          </p>
          {data?.img?.endsWith(".mp4") ? (
            <video
              style={{ height: "60%", width: "100%" }}
              src={data.img}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              style={{ height: "60%", width: "100%" }}
              src={data?.img}
              alt=""
            />
          )}
        </div>
        <div
          style={{
            // backgroundColor: "#f7ffff",
            width: "50%",
            height: "100%",
            color: "#0d263c",
          }}
        >
          <h2 style={{ fontSize: "50px", padding: "20px" }}>{data?.title2}</h2>
          <p style={{ fontSize: "30px", padding: "20px" }}>
            {data?.description2}
          </p>
          <ul style={{ listStyleType: "none", padding: "10px" }}>
            {data?.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 style={{ fontSize: "40px", padding: "20px" }}>{data.title3}</h3>
          <p>{data.description3}</p>
          <a href={data.url}></a>
        </div>
      </div>
    </div>
  );
};

export default Animation;
