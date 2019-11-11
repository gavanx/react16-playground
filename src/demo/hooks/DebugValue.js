/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useEffect, useDebugValue, useState } from 'react'
import { Button } from 'antd'

const title = 'DebugValue Demo'

export default props => {
  const [count, setCount] = useState(100)
  const { str, setStr } = useTest()

  useEffect(() => {
    document.title = `Clicked ${count} times`
    return () => {
      console.log('unmount hook')
    }
  })

  return (
    <div>
      <p><b>{title}</b>: You clicked {count} times {str}
        <Button onClick={() => setStr(Date.now())}>
          Click me
        </Button>
      </p>
    </div>
  )
}

const useTest = () => {
  const [str, setStr] = useState('');
  useDebugValue(str, (value) => {
    console.log('useDebugValue', value);
    return '这是改造后的' + value;
  });
  return {
    str, setStr
  }
}
