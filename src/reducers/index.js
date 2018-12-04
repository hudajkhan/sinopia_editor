// Copyright 2018 Stanford University see Apache2.txt for license

import { generate } from '../actions'

import { combineReducers } from 'redux'
import { RDFInput } from './editor/index'

const RDFReducer = (state = [], action) => {
  switch (action.type) {
    case 'GENERATE':
      return state
    default:
      return state

  }
}

export default combineReducers({
  RDFInput,
  RDFReducer
})
