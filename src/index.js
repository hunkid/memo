import React from 'react'
import ReactDOM from 'react-dom'
import { Route, IndexRoute, hashHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App/App'
import ListAllMemos from './containers/ListAllMemos/ListAllMemos'
import ListTodoMemos from './containers/ListTodoMemos/ListTodoMemos'
import ListDoingMemos from './containers/ListDoingMemos/ListDoingMemos'
import ListDoneMemos from './containers/ListDoneMemos/ListDoneMemos'
import configureStore from './store/index'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ListAllMemos} /> 
          <Route path="/todo" component={ListTodoMemos} />
          <Route path="/doing" component={ListDoingMemos} />
          <Route path="/done" component={ListDoneMemos} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
