/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useMemo, useState } from 'react'
import { Button } from 'antd'

const title = 'Memo Demo'

export default props => {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')

  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return <div>
    <h4>{title}-{count}-{val}-{expensive}</h4>
    <div>
      <button onClick={() => setCount(count + 1)}>+c1</button>
      <input value={val} onChange={event => setValue(event.target.value)} />
    </div>
  </div>
}
