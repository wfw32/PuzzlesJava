
import React from 'react'

class ProgressBar extends React.Component {
  render() {
    let value = Math.floor((this.props.count + 1) / 7 * 100)

    return (
      <div className="progress" style={{margin: 25}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: value + '%'}}
          aria-valuenow={{value}}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value}%
        </div>
      </div>
    )
  }
}

export default ProgressBar