import { SET_ITEMS, REMOVE_ITEMS } from './actions'

const DEFAULT_STATE = {
  formData: [{
    id: "Statement of Responsibility Relating to Title Proper (RDA 2.4.2)",
    items: [
    {content:"food", id: 10},
    {content:"bar", id: 11}
    ]
  }]
}

// const newObject = state.formData.map(field => {
//     if (field.id == action.payload.id) {
//       field.items.push(action.payload.items)
//     }  
//   })
//   console.log(newObject)
//   return newObject

const newFunc = (state, action) => {
  return state.formData.map(field => {
    if (field.id == action.payload.id) {
      field.items.push(action.payload.items)
    } 
  })
  // return state.formData.concat(action.payload.items)

}

const setMyItems = (state, action) => {
  return Object.assign({}, state, {
    formData: newFunc(state, action)
  })

}

const removeMyItems = (state, action) => {

  const idToRemove = action.payload.remove_id
  const formData = action.payload.formData.filter(listitem => listitem.id !== idToRemove)

  return {
    ...state,
    formData: formData
  }

}



const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_ITEMS:
      return setMyItems(state, action)
    case REMOVE_ITEMS:
      return removeMyItems(state, action)
    default:
      return state

  }
}

export default rootReducer
