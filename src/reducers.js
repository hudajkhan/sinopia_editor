import { SET_ITEMS, REMOVE_ITEMS } from './actions'

const DEFAULT_STATE = {
  formData: [
    {
      id: "Statement of Responsibility Relating to Title Proper (RDA 2.4.2)",
      items: [
        {content:"food", id: 10},
        {content:"bar", id: 11}
      ]
    }
  ]
}


// formData = [{},{},{}]


//  Next thing to work on, if the field.id does not equal actionpayload.id
//  how do you add it to the formData array.
const newFunc = (state, action) => {
  return state.formData.map(field => {
    if (field.id == action.payload.id) {

      field.items = field.items.concat(action.payload.items)
      console.log("field: ", field)
      return field
    } else {
      console.log("action.payload", action.payload)
      return action.payload
    }

  })


}

const setMyItems = (state, action) => {
  // const updatedArray = newFunc(state, action)
  // console.log("this is the state in setmyitems")
  // console.log(state)
  let newFormData = state.formData.slice(0)


  console.log("state before: ", state)
  let needNewItemArray = true;

  for (let field of newFormData) {
    console.log("Field : ", field)
  // state.formData.forEach(field => {
    if (field.id == action.payload.id) {

      field.items = field.items.concat(action.payload.items)
      // return Object.assign({}, state.formData)
      needNewItemArray = false;
      break;
    }
  }

  if (needNewItemArray) {
      console.log("action.payload", action.payload)
      newFormData.push(action.payload)

      // state.formData.push(action.payload)
      // console.log("newData", state.formData)
      // return Object.assign({}, state.formData, action.payload)
  }

  console.log("newFormData: ", newFormData)

  return {formData: newFormData}
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
