import React, { useEffect, useLayoutEffect, useState } from "react";

export default () => {
  const [num, setNum] = useState(0);
  //在类组件中用componentWillMount生命周期来实现
  useLayoutEffect(() => {
    console.log("useLayoutEfffect");
    //	也可以在此进行事件绑定
    return () => {
      //	也可以在此进行事件绑定移除
      console.log(1);
    };
  }, [num]);

  useEffect(() => {
    console.log("useEffect");
  }, [num]);

  return (
    <div onClick={() => setNum((num) => num + 1)}>
      这是一个函数式组件————{num}
    </div>
  );
};
