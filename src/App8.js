import React from "react";
import ExpComp from "./ExpComp";
import { useState } from "react";

export default function App8() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpComp count={count}/>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}