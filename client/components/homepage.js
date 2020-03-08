import React from 'react'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'

//must have
const getMealsQuery = gql`
  query searchRecipes {
    searchRecipes {
      label
      url
      image
      ingredients
      ingredientLines
      calories
    }
  }
`
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.getStuff = this.getStuff.bind(this)
  }

  render() {
    return (
      <Query query={getMealsQuery}>
        {({loading, error, data}) => {
          if (loading) return null
          if (error) return `Error! ${error}`

          return <div>{Object.keys(data)}</div>
        }}
      </Query>
    )
  }
}


export default graphql(getMealsQuery)(HomePage)
