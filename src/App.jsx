import React from "react";
import Paystack from "./components/Paystack";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "lightmint",
        width: "100%",
        height: "100vh",
      }}
    >
      <h4
        style={{
          backgroundColor: "#0d263c",
          width: "100%",
          color: "whitesmoke",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Register your business and get a corporate bank account ---fast---{" "}
      </h4>

      <Paystack />
    </div>
  );
};

export default App;
