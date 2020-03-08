import React from 'react'

class MaxMessage extends React.Component {
  render() {
    return this.props.foodType === 'meats' ||
      this.props.foodType === 'seafood' ? (
      this.props.alert === true ? (
        <div className="alert alert-warning " role="alert">
          You have already selected the max total of 2 meats and seafoods.
        </div>
      ) : (
        <div className="quiz-alert-choices">
          (you may choose a total of 2 meats and seafoods)
        </div>
      )
    ) : this.props.alert === true ? (
      <div className="alert alert-warning" role="alert">
        You have already selected the max total of {this.props.max}{' '}
        {this.props.foodType}
      </div>
    ) : (
      <div className="quiz-alert-choices">(choose up to {this.props.max})</div>
    )
  }
}

export default MaxMessage
