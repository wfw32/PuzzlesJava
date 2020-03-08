import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      isShowing: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }
  render() {
    const chosenRecipe = this.props.recipe

    if (!chosenRecipe) {
      return 'ingredients are no longer here...'
    } else {
      return (
        <ListGroup className="list-group-missing-ingredients">
          {chosenRecipe.missingIngredients.map(item => {
            return (
              <ListGroup.Item key={Math.random()} as="li">
                {item}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )
    }
  }
}

export default GroceryList
