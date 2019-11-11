/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useRef, useEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'Ref Demo'

export default function Example() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count)
  console.log(prevCount, count, '之前的状态和现在的状态')
  return (
    <div>
      <div>{title}-{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>+
      </button>
    </div>
  )
}

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
