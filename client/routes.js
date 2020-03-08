import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  Quiz,
  About,
  HowItWorks,
  SingleRecipe,
  GroceryList
} from './components/index'
import Results from './components/results'
import SearchBarResults from './components/searchbarResults'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/about" component={About} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/howitworks" component={HowItWorks} />
        <Route exact path="/searchbarresults" component={SearchBarResults} />
        <Route exact path="/grocerylist" component={GroceryList} />
        <Route path="/recipes" component={SingleRecipe} />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes
