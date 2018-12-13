import { combineReducers } from 'redux'
import generateRDF from './rdf'
import literal from './literal'

export default combineReducers({
  generateRDF,
  literal
})
