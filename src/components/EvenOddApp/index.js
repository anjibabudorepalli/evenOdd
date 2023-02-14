// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => {
    this.setState(k => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    const type = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="con-1">
        <div className="container">
          <h1>Count {count}</h1>
          <p>{type}</p>
          <button onClick={this.randomNumber}>Increment</button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
