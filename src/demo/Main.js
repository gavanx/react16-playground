/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React from "react";
import Loadable from "react-loadable";
import AutoBatchUpdate from "./AutoBatchUpdate";
import RefOnScroll from "./hooks/RefOnScroll";

const LoadingComponent = () => <div>loading</div>;

const modules = [
  "./hooks/State",
  "./hooks/Effect",
  "./hooks/Effect2",
  "./hooks/Context",
  "./hooks/CounterTimeout",
  "./hooks/Memo",
  "./hooks/Callback",
  "./hooks/Ref",
  "./hooks/Ref2",
  "./hooks/useImperativeHandle",
  "./hooks/LayoutEffect",
  "./hooks/LayoutEffect2",
  "./hooks/DebugValue",
  "./hooks/useFriendStatus",
  "./wrap/memo",
].map((m) => {
  return Loadable({
    loader: () => import(m + ".js"),
    loading: LoadingComponent,
  });
});

export default (props) => {
  return (
    <div>
      <h2>Demo:</h2>
      <RefOnScroll />
      {/* <AutoBatchUpdate/> */}
      {/* {modules.map((Module, i) => <Module key={i} />)} */}
    </div>
  );
};
