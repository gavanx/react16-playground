/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'Effect2 Demo'

export default props => {
  const [count, setCount] = useState(100)
  useEffect(() => {
    console.log('effect1')
    document.title = `Clicked ${count} times`
    return () => {
      console.log('effect2', document.title)
    }
  })

  return (
    <div>
      <p><b>{title}</b>: You clicked {count} times
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </p>
    </div>
  )
}
