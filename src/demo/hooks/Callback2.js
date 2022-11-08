import React, { useState, useCallback } from "react";
import { Button } from "antd";

const MockMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <TestButton title="普通点击" onClick={() => setCount(count + 1)} />
        <MemoTestButton title="Memo 普通点击" onClick={() => setCount(count + 1)} />
        <TestButton title="useCallback点击" onClick={add} />
        <MemoTestButton title="Memo useCallback点击" onClick={add} />
      </div>
      <div style={{ marginTop: 20 }}>count: {count}</div>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        切换：setShow
      </Button>
    </div>
  );
};

const TestButton = (props) => {
  console.log("TestButton render", props.title);
  return (
    <Button color="primary" onClick={props.onClick} style={{ margin: 10 }}>
      {props.title}
    </Button>
  );
};

const MemoTestButton = React.memo(TestButton);

export default MockMemo;
