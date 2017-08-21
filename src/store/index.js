import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'
import { createLogger } from 'redux-logger'
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  )
  return store
}
