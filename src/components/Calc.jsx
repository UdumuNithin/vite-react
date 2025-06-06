// src/components/Calc.jsx
import React, { useState } from "react";

export default function Calc() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h3>Calculator</h3>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        placeholder="Enter a"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        placeholder="Enter b"
      />
      <p>Sum: {a + b}</p>
    </div>
  );
}
