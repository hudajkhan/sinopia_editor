// Copyright 2018 Stanford University see Apache2.txt for license

const RDFInput = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RDF_TRIPLE':

      return [
        ...state,
        {
          id: action.id,
          triple: action.triple
        }
      ]
    default:
      return state
  }
}

export default RDFInput
