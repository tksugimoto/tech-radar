import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import radar from './radar-reducer'

export default combineReducers({
  radar,
  routing: routerReducer
})
