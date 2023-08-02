import React, { useState } from "react";

export const CardState = () => {
  const [state, setState] = useState(0);

  // state|setState - любые имена
  // state - не мутирует , изменять состояние только через setState()
  // setState(10) так же не катит уйдем в бесконечный цикл, так как вызовет ререндер CardState()
  // нужна минимизировать перерисовку компонентов


  console.log("re-render ");
  const increment = () => {
    // вызов setState - асинхронный 
    setState(state+1); // Важно что бы при этом не мутировалась переменная state
    // setState((prev) => prev +1) // лучше так, если нужно предыдущие значение
    // setState((prev) => prev +1) // лучше так, если нужно предыдущие значение
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={increment}>Click</button>
    </>
  );
};
