/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React from 'react'
import Loadable from 'react-loadable'
import Effect2 from './hooks/Effect2'

const LoadingComponent = () => <div>loading</div>

const modules =
  [
    './hooks/State',
    './hooks/Effect',
    './hooks/Context',
    './hooks/Memo',
    './hooks/Callback',
    './hooks/Ref',
    './hooks/Ref2',
    './hooks/useImperativeHandle',
    './hooks/LayoutEffect',
    './hooks/DebugValue',
  ].map(m => {
    return Loadable({ loader: () => import(m + '.js'), loading: LoadingComponent })
  })

export default props => {
  return <div>
    <h2>Demo:</h2>
    {modules.map((Module, i) => <Module key={i} />)}
    <Effect2 />
  </div>
}
