/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useContext, createContext } from 'react'
import { Button } from 'antd'

const title = 'Context Demo'
const context = createContext('context-' + Date.now())

export default props => {
  const c = useContext(context)
  return (
    <div>
      <p><b>{title}</b>: context = {c}
      </p>
    </div>
  )
}
