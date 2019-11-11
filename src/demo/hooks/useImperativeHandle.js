/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useImperativeHandle, forwardRef, createRef, useRef, useEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'useImperativeHandle Demo'

function FancyInputx(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus1: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} className="ipt" />;
}

const FancyInput = forwardRef(FancyInputx);

export default class ImperativeApp extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  render() {
    return (
      <div>
        <h3>{title}</h3>
        <FancyInput ref={this.inputRef} />
        <button
          className="btn"
          onClick={() => {
            this.inputRef.current.focus1();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
