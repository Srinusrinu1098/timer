import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1>Timer</h1>
        <div className="card-container">
          <div className="img-container">
            <div className="heading-container">
              <h1 className="heading">25:00</h1>
              <p className="set-time1">running</p>
            </div>
          </div>
          <div className="bottom-flex">
            <div className="flex">
              <div className="flex">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="img"
                />
                <p className="para">Start</p>
              </div>
              <div className="flex">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  alt="reset icon"
                  className="img"
                />
                <p className="para">Reset</p>
              </div>
            </div>
            <p className="set-time">Set Timer Limit</p>
            <div className="flex">
              <button className="button" type="button">
                -
              </button>
              <p className="para-time">25</p>
              <button className="button" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
