/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-12.
 */
import React from 'react'
import getDisplayName from "../../utils/getDisplayName";

const title = 'React.memo Demo'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h3>{title}</h3>
        <Child1 seconds={1} />
        <Child2 seconds={1} />
        <Child3 seconds={1} />
        <div>{this.state.date.toString()}</div>
      </div>
    )
  }
}

class Child1 extends React.Component {
  render() {
    const displayName = getDisplayName(this.constructor)
    console.log('I am rendering', displayName);
    return (
      <div>{displayName} extends React.Component: I am update every {this.props.seconds} seconds</div>
    )
  }
}

class Child2 extends React.PureComponent {
  render() {
    const displayName = getDisplayName(this.constructor)
    console.log('I am rendering', displayName);
    return (
      <div>{displayName} extends React.PureComponent: I am update every {this.props.seconds} seconds</div>
    )
  }
}

function Child3x({ seconds }) {
  const displayName = getDisplayName({ name: 'Child3' })
  console.log('I am rendering', displayName);
  return (
    <div>{displayName} React.memo: I am update every {seconds} seconds</div>
  )
};

function areEqual(prevProps, nextProps) {
  if (prevProps.seconds === nextProps.seconds) {
    return true
  } else {
    return false
  }
}

function areEqual2(prevProps, nextProps) {
  return prevProps.seconds === nextProps.seconds

}

const Child3 = React.memo(Child3x, areEqual)
// const Child3 = React.memo(Child3x)
