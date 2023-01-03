// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerate = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({count: num})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="random-heading">Random Number</h1>
          <p className="random-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onClickGenerate}
            className="random-button"
            type="button"
          >
            Generate
          </button>
          <h1 className="random-count">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
