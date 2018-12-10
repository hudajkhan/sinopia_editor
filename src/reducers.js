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


// formData = [{},{},{}]


//  Next thing to work on, if the field.id does not equal actionpayload.id 
//  how do you add it to the formData array.
const newFunc = (state, action) => {
  return state.formData.map(field => {
    if (field.id == action.payload.id) {
      
      field.items = field.items.concat(action.payload.items)
      return field
    } else {
      return action.payload
    } 
    
  })

}

const setMyItems = (state, action) => {
  const x = newFunc(state,action)


  return { ...state, formData: x }
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
console.log("reducer state")
  console.log(state)
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
