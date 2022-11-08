import React, { useCallback, useMemo, useState } from "react";

const set = new Set();

export default function StateFunction() {
  const [num, setNum] = useState(1);
  const [age, setAge] = useState(18);

  const getDoubleNumMemo = useMemo(() => {
    console.log(`getDoubleNumMemo 获取双倍Num${num}`);
    return 2 * num; //	①假设为复杂计算逻辑
  }, []);

  const getDoubleNumCallback = useCallback(() => {
    console.log(`getDoubleNumCallback 获取双倍Num${num}`);
    return 2 * num; //	②假设为复杂计算逻辑
  }, [num]);

  // set.add(getDoubleNumMemo); //	③注意set打印的长度变化（设置Callback的依赖为[]、[num]进行对比）
  set.add(getDoubleNumCallback());
  console.log("set.size：", set.size, set);

  return (
    <div
      onClick={() => {
        setNum((num) => num + 1);
      }}
    >
      <br></br>
      这是一个函数式组件————num：{getDoubleNumMemo}
      这是一个函数式组件————num：{getDoubleNumCallback()}
      <br></br>
      age的值为————{age}
      <br></br>
    </div>
  );
}
