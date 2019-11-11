/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useRef, useEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'Ref2 Demo'

export default function Example() {
  const [count, setCount] = useState(0);
  const ref = useRef(0)

  function handleAlertClick() {
    setTimeout(() => {
      console.log('handleAlertClick', ref.current)
    }, 3000)
  }

  function increment() {
    let newCount = count + 1;
    setCount(newCount)
    ref.current = newCount
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={handleAlertClick}>点击</button>
    </div>
  )
}
