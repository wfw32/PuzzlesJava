import React from 'react'
import axios from 'axios'

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
  }

  render() {
    const questions = this.state.data[this.props.count]

    return this.state.data[0] ? (
      <div>
        <h2>{questions.question}</h2>
        {questions.image.map((picture, index) => {
          return (
            <div key={Math.random()}>
              <button
                type="button"
                className="button"
                onClick={() => this.addToIngredients(event)}
              >
                <div className="container">
                  <div className="centered">{questions.name[index]}</div>
                  <img
                    className="options"
                    src={picture}
                    alt={questions.name[index]}
                  />
                </div>
              </button>
            </div>
          )
        })}
      </div>
    ) : (
      'Loading'
    )
  }
}
