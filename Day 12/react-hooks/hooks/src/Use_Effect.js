import { useState, useEffect } from "react";

function Use_Effect() {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      SetCount((count) => count + 1);
    }, 5000);
  });

  return (
    <div>
      <h1>Use efffect Demo</h1>
      <h1>I have Rendered {count} times </h1>
    </div>
  );
}
export default Use_Effect;
