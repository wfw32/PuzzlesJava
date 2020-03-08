
import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'

class HowItWorks extends React.Component {
  render() {
    return (
      <div className="how-it-works-background">
        <Jumbotron className="how-it-works-banner">
          <Container xs={6} md={6} lg={6}>
            <Row>
              <Col className="how-it-works-banner-text">
                <h1>How Does Meal.Match Work?</h1>

                <p>
                  We match you to recipes that best fit the ingredients you
                  already have in your pantry and fridge. You simply take a look
                  in your kitchen and fill out our short quiz to let us know
                  what you would like to cook with. We'll take care of the rest!
                  To get started, click the "start now" button below. If you
                  would like to learn more, read on.
                </p>
                <Link to={{pathname: `/quiz`}}>
                  <Button className="btn-responsive">Start now</Button>
                </Link>
                <Row style={{height: 100, padding: 50}}>
                  <p id="scroll-arrow" className="how-it-works-banner-scroll">
                    <a href="#instructions" />
                  </p>
                </Row>
              </Col>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row style={{marginTop: 40, marginBottom: 40}}>
            <Col>
              <h4>Finding your match is easy!</h4>
            </Col>
          </Row>
          <Row id="instructions">
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/png/512/60/60400.png" />
              <h5>
                <strong>Step 1 </strong>
              </h5>
              <h6>Check your pantry and fridge</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                Take a look at the items you already have in your fridge and
                pantry; what ingredients would you like to include in your meal?
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/1763/1763996.svg" />
              <h5>
                <strong>Step 2</strong>
              </h5>
              <h6>Take the quiz</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                Let us know how much time you have to prepare your meal, as well
                as the dairy, protein, seafood, vegetables, fruits, and grains
                you would like to use. You can skip any of the categories you do
                not have or do not want to use.
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/115/115766.svg" />
              <h5>
                <strong>Step 3</strong>
              </h5>
              <h6>View your matches!</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                Based on your selections, we'll suggest recipes for you. Each
                will have a percentage score reflecting the percent of
                ingredients you have on hand. The higher the percentage, the
                fewer ingredients you are missing for that recipe.
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/685/685796.svg" />
              <h5>
                <strong>Step 4</strong>
              </h5>
              <h6>Missing ingredients? Send the list to your phone!</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                If you are missing ingredients, Meal.Match creates a shopping
                list for you and makes it easy for you to send that list to your
                phone. Simply click the "Send to Phone" option on the recipe
                page, and you'll receive a text with your missing ingredients.
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HowItWorks