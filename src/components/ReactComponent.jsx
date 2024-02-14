import React from "react";
import { useStore } from "@nanostores/react";
import { counter, increment } from "../store/counter";

const ReactComponent = () => {
  const $counter = useStore(counter);
  return (
    <div>
      <p>これはReactのコンポーネントです。</p>
      <p>Counter: {$counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ReactComponent;
