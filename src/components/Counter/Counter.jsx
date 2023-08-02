import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  function plus() {
    setValue((val) => val + 1);
  }
  function minus() {
    setValue((val) => val - 1);
  }
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
