
import React from 'react'
import {CuttingBoard, MaxMessage, ProgressBar} from './index'
import axios from 'axios'
import {Alert, Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      time: '',
      meats: [],
      seafood: [],
      dairy: [],
      'vegetable(s)': [],
      'fruit(s)': [],
      'grain(s)': [],
      ingredients: [],
      data: [],
      alert: false,
      selected: '',
      matchMeDisabled: true,
      show: true,

      // if any additional fields are added to state, they may need to be included as exclusions in the removeIngredient function
    }
    this.removeIngredient = this.removeIngredient.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.addToIngredients = this.addToIngredients.bind(this)
    this.filterOutIngredients = this.filterOutIngredients.bind(this)
    this.setTime = this.setTime.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
  }

  filterOutIngredients(event, foodType) {
    const max = this.state.data[this.state.count].max
    const meatAndSeafoodLength =
      this.state.meats.length + this.state.seafood.length

    if (
      !this.state.ingredients.includes(event.target.alt) &&
      this.state[foodType].length < max
    ) {
      if (foodType !== 'meats' && foodType !== 'seafood') {
        this.addToIngredients(event.target.alt, true, foodType)
      } else if (foodType === 'meats' || foodType === 'seafood') {
        meatAndSeafoodLength < 2
          ? this.addToIngredients(event.target.alt, true, foodType)
          : this.addToIngredients(null, false)
      }
    } else {
      this.addToIngredients(null, false)
    }
  }

  addToIngredients(food, boolean, foodType) {
    boolean
      ? this.setState({
          ingredients: [...this.state.ingredients, food],
          [foodType]: [...this.state[foodType], food],
          alert: false,
          matchMeDisabled: false,
        })
      : this.setState({
          alert: true,
        })
  }

  setTime(event) {
    this.setState({
      time: event.target.alt,
    })
  }

  removeIngredient(event) {
    const ingredientsLeft = this.state.ingredients.filter((item) => {
      return item !== event.target.id
    })
    const foodType = Object.keys(this.state)
      .filter((food) => {
        return (
          Array.isArray(this.state[food]) &&
          food !== 'data' &&
          food !== 'ingredients'
        )
      })
      .filter((food) => {
        return this.state[food].includes(event.target.id)
      })[0]

    const foodTypeIngredientsLeft = this.state[foodType].filter((item) => {
      return item !== event.target.id
    })

    this.state.ingredients.length === 1
      ? this.setState({
          ingredients: ingredientsLeft,
          [foodType]: foodTypeIngredientsLeft,
          alert: false,
          matchMeDisabled: true,
        })
      : this.setState({
          ingredients: ingredientsLeft,
          [foodType]: foodTypeIngredientsLeft,
          alert: false,
        })
  }

  increaseCount(foodType) {
    let newCount = this.state.count + 1

    if (foodType === 'meats') {
      this.setState({count: newCount})
    } else {
      this.setState({
        count: newCount,
        alert: false,
      })
    }
  }

  decreaseCount(foodType) {
    let newCount = this.state.count - 1

    if (foodType === 'seafood') {
      this.setState({count: newCount})
    } else {
      this.setState({
        count: newCount,
        alert: false,
      })
    }
  }
  handleClose() {
    this.setState({
      show: false,
    })
  }

  render() {
    let foodType
    const questions = this.state.data[this.state.count]
    if (questions !== undefined) {
      foodType = questions.question.split(' ')[1]
    }
    let show = true
    return this.state.data[0] ? (
      <div className="quiz-background">
        <Container className="quiz-container" xs={12} md={12} lg={12}>
          {this.state.count === 0 ? (
            <Alert
              dismissible="true"
              className="quiz-alert"
              show={this.state.show}
              onClose={this.handleClose}
            >
              <Alert.Heading>
                Check Your Pantry and Make Your Selection!
              </Alert.Heading>
              <p>
                Help Meal.Match best match you to recipes using ingredients
                already in your pantry and fridge!
                <br /> First, take a look at your pantry and fridge, then choose
                the options you want to cook with in our survey below.
              </p>
            </Alert>
          ) : null}
          <Row style={{paddingTop: 25}}>
            <Col xs={3} />
            <Col className="quiz-questions-count">
              <h3>{this.state.count + 1}/7</h3>
            </Col>
            <Col xs={8} className="quiz-questions-question">
              <h2>
                Q.{this.state.count + 1} {questions.question}
              </h2>
              <MaxMessage
                max={this.state.data[this.state.count].max}
                foodType={
                  this.state.data[this.state.count].question.split(' ')[1]
                }
                alert={this.state.alert}
                length={this.state[foodType].length}
                food={foodType}
              />
            </Col>
            <Col xs={1} />
          </Row>
          <ProgressBar count={this.state.count} />
          <Row>
            <Col sm={4} md={4} lg={4} className="quiz-columns">
              <h3>{!this.state.time ? '' : this.state.time}</h3>
              <CuttingBoard
                sendFunction={this.removeIngredient}
                ingredients={this.state.ingredients}
                time={this.state.time}
                meats={this.state.meats}
                seafood={this.state.seafood}
              />
            </Col>
            <Col className="quiz-columns">
              <Row className="quiz-row-options">
                {questions.image.map((picture, index) => {
                  return (
                    <div key={Math.random()}>
                      <div className="option-with-label ">
                        <strong className="label">
                          {questions.name[index]}
                        </strong>
                        <img
                          className={`${
                            this.state.ingredients.includes(
                              questions.name[index]
                            ) || this.state.time.includes(questions.name[index])
                              ? 'selected'
                              : 'options'
                          }`}
                          src={picture}
                          alt={questions.name[index]}
                          id={questions.name[index]}
                          onClick={() => {
                            return this.state.ingredients.includes(
                              event.target.alt
                            )
                              ? this.removeIngredient(event)
                              : foodType !== 'time'
                              ? this.filterOutIngredients(event, foodType)
                              : this.setTime(event)
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </Row>
              <Row className="quiz-prev-next-buttons">
                <Col>
                  {this.state.count > 0 ? (
                    <Button
                      className="skipNextPrevButtons"
                      onClick={() => this.decreaseCount()}
                    >
                      {'<< Previous'}
                    </Button>
                  ) : null}
                </Col>
                <Col>
                  {this.state.count === this.state.data.length - 1 ? (
                    <Link
                      to={{
                        pathname: '/results',
                        state: {
                          theIngredients: this.state.ingredients,
                          theMeats: this.state.meats,
                          theSeafood: this.state.seafood,
                          time: this.state.time,
                        },
                      }}
                    >
                      <Button className="btn-submit quiz-next-button">
                        Submit
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="skipNextPrevButtons quiz-next-button"
                      onClick={() => this.increaseCount(foodType)}
                    >
                      {this.state[foodType].length > 0 ? 'Next >>' : 'Skip >>'}
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    ) : (
      'Loading...'
    )
  }
}