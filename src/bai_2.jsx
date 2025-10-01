import React, { useState, useEffect } from "react";

export default function Bai2() {
  return (
    <div style={{ margin: "20px" }}>
        <h2>Bài 2: Đèn giao thông</h2>
        <TrafficLight />
    </div>
  );
}

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const changeLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  useEffect(() => {
    const interval = setInterval(changeLight, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {["red", "yellow", "green"].map((color) => (
        <div
          key={color}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: light === color ? color : "gray",
            margin: "5px 0",
          }}
        />
      ))}
      <button onClick={changeLight}>Chuyển đèn</button>
    </div>
  );
};