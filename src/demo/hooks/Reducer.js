import React, { useReducer } from "react";

const store = {
  age: 18,
  num: 1,
}; //	数据仓库

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        num: action.num + 1,
      };

    default:
      return {
        ...state,
      };
  }
}; //	管理者

export default function StateFunction() {
  const [state, dispacth] = useReducer(reducer, store); //	①

  return (
    <div>
      <button
        onClick={() => {
          dispacth({
            type: "add",
            num: state.num,
          });
        }}
      >
        增加num的值+1
      </button>
      <br></br>
      这是一个函数式组件——num:{state.num}
    </div>
  );
}
