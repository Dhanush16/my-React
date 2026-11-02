import React, { useState } from "react";

function FirstC() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);
  const incrementCount = () => {
    setCount(count + factor);
  };
  const incrementFactor = () => {
    setFactor(factor + 1);
  };
  const decrementCount = () => {
    setCount(count - factor);
  }
  const decrementFactor = () => {
    setFactor(factor - 1);
  }
  return (
    <>
      <h1>This is my counter : {count}</h1>
      <h2>Factor : {factor}</h2>
      <div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      </div>
      <button onClick={incrementFactor}>Increase Factor</button>
      <button onClick={decrementFactor}>Decrease Factor</button>
    </>
  );
}

export default FirstC;
