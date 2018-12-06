import { SET_ITEMS, REMOVE_ITEMS } from './actions'

const DEFAULT_STATE = {
  myItems: []
}

const setMyItems = (state, action) => {
  return Object.assign({}, state, {myItems: action.payload })
}

const removeMyItems = (state, action) => {

  const idToRemove = action.payload.remove_id
  const item = action.payload.item.filter(listitem => listitem.id !== idToRemove)

  return {
    ...state,
    myItems: item
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
