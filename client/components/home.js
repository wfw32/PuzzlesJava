
import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'
import {GuidedTour} from './index'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {}

  render() {
    return (
      <div>
        <div className="img-wrapper">
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80"
          />
          <div className="img-overlay">
            <Row>
              <Col sm={6} />
              <Col sm={5}>
                <Row>
                  <h1 className="text-center"> Welcome to Meal.Match </h1>
                  <p>
                    Have items in your pantry but not sure what to make?
                    <br />
                    Fill out our short quiz to see recipes that match what you
                    have, not what you need.
                  </p>
                </Row>
                <Row style={{marginTop: 35}} className="homepage-btn-row">
                  <Col>
                    <Link to="/quiz">
                      <Button className="btn-responsive" size="lg">
                        Start Now
                      </Button>
                    </Link>
                    <p />
                    <p className="homepage-btn-text">Been here before?</p>
                  </Col>
                  <Col>
                    <GuidedTour />
                  </Col>
                </Row>
              </Col>
              <Col sm={1} />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}