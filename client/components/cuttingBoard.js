
import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class CuttingBoard extends React.Component {
  constructor(props) {
    super(props)
    this.functionPassed = this.functionPassed.bind(this)
  }
  functionPassed(event) {
    this.props.sendFunction(event)
  }

  render() {
    return (
      <>
        <Row className="container-class">
          {this.props.ingredients[0]
            ? this.props.ingredients.map(ingredient => {
                return (
                  <p key={Math.random()} className="cutting-board-ingredients">
                    <Button
                      size="sm"
                      type="button"
                      className="close-me"
                      onClick={() => {
                        this.functionPassed(event)
                      }}
                      id={ingredient}
                    >
                      {ingredient} x
                    </Button>
                  </p>
                )
              })
            : null}
        </Row>
        <Col>
          <p style={{fontSize: 15}}>Done adding ingredients?</p>
          <Link
            to={{
              pathname: '/results',
              state: {
                theIngredients: this.props.ingredients,
                theMeats: this.props.meats,
                theSeafood: this.props.seafood,
                time: this.props.time
              }
            }}
          >
            <Button className="skipNextPrevButtons">Submit Now</Button>
          </Link>
        </Col>
      </>
    )
  }
}