// Copyright 2018 Stanford University see Apache2.txt for license

import { addInputLiteral } from '../actions'

export function initialState (state, action) {
  if(action.type === "TEST") {
    console.log(`The state is ${state}`)
  }
  return state
}
