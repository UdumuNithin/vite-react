// src/components/App6.jsx
import React from "react";
import Fruit from "./Fruit";

export default function App6() {
  return (
    <div>
      <h1>App6</h1>
      <h2>Assignment</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Fruit name="Apple" />
        <Fruit name="Orange" />
        <Fruit name="Mango" />
        <Fruit name="Banana" />
      </div>
    </div>
  );
}
