/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "antd";

const title = "Callback Demo";

const set = new Set();

export default function Parent() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  const callback = useCallback(() => {
    console.log("count compute");
    return count;
  }, [count]);

  const fn2 = () => console.log("fn2");
  // set.add(callback);
  set.add(fn2);
  console.log("set.size", set.size);

  return (
    <div>
      <h4>
        {title}-{count}
      </h4>
      <Child callback={callback} />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={(event) => setVal(event.target.value)} />
      </div>
    </div>
  );
}

function Child({ callback, fn }) {
  console.log("Child render");
  const [count, setCount] = useState(() => callback());
  useEffect(() => {
    console.log("Child render callback");
    setCount(callback());
  }, [callback]);
  return <div>Child:{count}</div>;
}
