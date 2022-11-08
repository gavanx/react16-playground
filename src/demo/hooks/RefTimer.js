/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useRef, useEffect, useState } from "react";
import { Button } from "antd";

const title = "Ref2 Demo";

export default function Example() {
  const [num, setNum] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setNum((num) => num + 1);
    }, 400);
  }, []);

  useEffect(() => {
    if (num > 10) {
      console.log("大于10了，清除定时器");
      console.log("timer：", timer);
      //  因为每一个timer都是独立render的，所以获取不到
      clearTimeout(timer);
    }
  }, [num]);

  return <div>这是一个函数式组件————num:{num}</div>;
}

function App() {
  const [num, setNum] = useState(0);

  const ref = useRef();
  useEffect(() => {
    ref.current = setInterval(() => {
      setNum((num) => num + 1);
    }, 400);
    // ref.current = '111'
  }, []);

  useEffect(() => {
    if (num > 10) {
      console.log("大于10了，清除定时器");
      console.log("ref.current", ref.current);
      clearTimeout(ref.current);
    }
  }, [num]);

  return <div>这是一个函数式组件————num:{num}</div>;
}

function App2() {
  const [num, setNum] = useState(0);

  const ref = useRef();
  useEffect(() => {
    ref.current = "111";
    console.log("ref.current", ref.current);
  }, []);

  return (
    <div>
      这是ref.current的值——ref.current:{ref.current}
      <br></br>
      这是一个函数式组件————num:{num}
    </div>
  );
}
