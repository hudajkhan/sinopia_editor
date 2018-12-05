import { SET_ITEMS, REMOVE_ITEMS } from './actions'

const DEFAULT_STATE = {
  myItems: []
}

const setMyItems = (state, action) => {
  return Object.assign({}, state, {myItems: action.payload })
}

const removeMyItems = (state, action) => {
  console.warn("this is the removemyItems reducer")

  console.warn("this is action:")
  console.warn(action)
  console.warn("this is state:")
  console.warn(state) // [{content id},{content id},{content id}]

  const idToRemove = action.payload.remove_id
  // state.filter(listitem => listitem.id !== idToRemove)


  // const new_item = item.filter(listitem => listitem.id !== id)

  return Object.assign({}, state.filter(listitem => listitem.id !== idToRemove), {myItems: action.payload })
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