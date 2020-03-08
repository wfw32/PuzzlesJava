import React from 'react'
import Text from './text'
import {Row, Col, Container, Button, ListGroup} from 'react-bootstrap'
import RecipeList from './recipeList'
import Email from './email'

class SingleRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowing: false,
      emailShowing: false,
      viewMissingIngredients: false
    }

    this.goBack = this.goBack.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.emailSubmit = this.emailSubmit.bind(this)
    this.viewMissing = this.viewMissing.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  emailSubmit() {
    this.setState({
      emailShowing: !this.state.emailShowing
    })
  }
  viewMissing() {
    this.setState({
      viewMissingIngredients: !this.state.viewMissingIngredients
    })
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    const recipe = this.props.location.state
    const recipeFromSearchBar = this.props.location

    return recipeFromSearchBar.image ? (
      <div className="single-recipe-background">
        <Container>
          <Row className="single-recipe-header">
            <h1> {recipeFromSearchBar.label} </h1>
          </Row>

          <Row>
            <Col className="single-recipe-image-container">
              <Row style={{justifyContent: 'center'}}>
                <p>
                  <strong>Total Calories: </strong>
                  {Math.round(recipeFromSearchBar.calories)}
                </p>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <img src={recipeFromSearchBar.image} />
              </Row>

              <Row style={{padding: 25}} className="centered-btn">
                <a
                  href={recipeFromSearchBar.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline-info">
                    {'View Full Recipe >>'}
                  </Button>
                </a>
              </Row>
              <Row style={{padding: 25}} className="centered-btn">
                <Button variant="outline-info" onClick={() => this.goBack()}>
                  {'<< Back to Results'}
                </Button>
              </Row>
            </Col>
            <Col className="single-recipe-image-container">
              <Row style={{justifyContent: 'center'}}>
                <p>
                  <strong>Recipe Ingredient List</strong>
                  <ListGroup className="list-group-missing-ingredients">
                    {recipeFromSearchBar.ingredients.map(item => {
                      return (
                        <ListGroup.Item
                          key={Math.random()}
                          as="li"
                          className={recipeFromSearchBar.ingredients.includes(
                            item.toLowerCase().replace(/,/gi, '')
                          )}
                        >
                          {item}
                        </ListGroup.Item>
                      )
                    })}
                  </ListGroup>
                </p>
              </Row>

              <Row>
                <Col style={{paddingTop: 15}}>
                  <p className="single-recipe-missing-ingredients-text">
                    Text yourself the Recipe
                  </p>
                  <Button onClick={this.onSubmit} className="single-recipe-btn">
                    Text Me
                  </Button>
                  {this.state.isShowing ? (
                    <Text
                      missingIngredients={recipeFromSearchBar.ingredients}
                      url={recipeFromSearchBar.url}
                      name={recipeFromSearchBar.label}
                    />
                  ) : null}
                </Col>
                <Col style={{paddingTop: 15}}>
                  <p className="single-recipe-missing-ingredients-text">
                    Send the recipe to your Email
                  </p>
                  <Button
                    className="single-recipe-btn"
                    onClick={this.emailSubmit}
                  >
                    Email Me
                  </Button>
                  {this.state.emailShowing ? (
                    <Email
                      missingIngredients={recipeFromSearchBar.ingredients}
                      image={recipeFromSearchBar.image}
                      url={recipeFromSearchBar.url}
                      name={recipeFromSearchBar.label}
                    />
                  ) : null}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    ) : (
      <div className="single-recipe-background">
        <Container>
          <Row className="single-recipe-header">
            <h1> {recipe.label} </h1>
          </Row>
          <Row className="single-recipe-header">
            <p>
              You have{' '}
              <strong className="single-page-highlight-text">
                {Math.round(recipe.percent)}%
              </strong>{' '}
              of the ingredients needed to make this recipe
            </p>
          </Row>

          <Row>
 