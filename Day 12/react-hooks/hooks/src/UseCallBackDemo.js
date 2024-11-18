import { useCallback, useState } from "react";

function UseCallBackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>Count : {count} </p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
export default UseCallBackDemo;
