import React, { useState, useEffect } from "react";

export default function Bai1() {
  return (
    <div style={{ margin: "20px" }}>
        <h2>Bài 1: Bộ đếm ký tự</h2>
        <TextCounter />
    </div>
  );
}

const TextCounter = () => {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={text}
        onChange={handleChange}
      />
      <p style={{ color: text.length >= maxLength ? "red" : "black" }}>
        Số ký tự: {text.length}/{maxLength}
      </p>
    </div>
  );
};