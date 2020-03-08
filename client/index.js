import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: '/api/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
