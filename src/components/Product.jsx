// src/components/Product.jsx
import React from "react";

export default function Product({ name = "Unknown", price = 0 }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Product: {name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}
