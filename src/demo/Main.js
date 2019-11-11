/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React from 'react'
import Loadable from 'react-loadable'
import State from './hooks/State'

const LoadingComponent = () => <div>loading</div>

const modules =
  [
    './hooks/State',
    './hooks/Effect',
  ].map(m => {
    return Loadable({ loader: () => import(m + '.js'), loading: LoadingComponent })
  })

export default props => {
  return <div>
    <h2>Demo:</h2>
    {modules.map((Module, i) => <Module key={i} />)}
  </div>
}
