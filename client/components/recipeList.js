import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'

class RecipeList extends Component {
  render() {
    const allIngredients = this.props.recipe.ingredients
    const missingIngredients = this.props.recipe.missingIngredients

    if (!allIngredients) {
      return 'ingredients are no longer here...'
    } else {
      return (
        <ListGroup className="list-group-missing-ingredients">
          {allIngredients.map(item => {
            return (
              <ListGroup.Item
                key={Math.random()}
                as="li"
                className={
                  missingIngredients.includes(
                    item.toLowerCase().replace(/,/gi, '')
                  ) && this.props.viewMissing
                    ? 'test-class-yes missing-ingredients-text'
                    : 'missing-ingredients-text'
                }
              >
                {item}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )
    }
  }
}

export default RecipeList
