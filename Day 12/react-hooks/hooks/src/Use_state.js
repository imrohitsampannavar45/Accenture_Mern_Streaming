import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(50);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Use State Demo</h1>
      <p>Count is initialized using useState hook:</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default UseState;
