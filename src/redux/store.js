import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import MovieReducer from '../redux/Films/AvailabilityReducer'

const rootReducer = combineReducers({
  // films
  MovieReducer
})

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store