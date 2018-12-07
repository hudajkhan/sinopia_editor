import { SET_ITEMS, REMOVE_ITEMS } from './actions'

const DEFAULT_STATE = {
  formData: [{
    id: "label1",
    items: [
    {content:"food", id: 10},
    {content:"bar", id: 11}
    ]
  }]
}





const setMyItems = (state, action) => {
  console.log("this is the state")
  console.log(state)
  console.log("this is the action")
  console.log(action)




  return Object.assign({}, state, {
    formData: state.formData.concat({
      id: action.payload.id,
      items: [action.payload.items]
    })
  })
    // state.formData.filter(field => {
    //   // console.warn(field.id)
    //   // console.warn(action.payload.id)
    //     console.log("we should be here")


    //     state.formData.concat(
    //       [{
    //         id: action.payload.id,
    //         items: [action.payload.items]
    //       }]
    //     )
    //     console.log(state.formData)
    // })
  // )


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
