const DEFAULT_STATE = {
  formData: []
}

const deleteItem = (obj, itemToDelete) => {
  const new_items = obj.items.filter(item => {
    return item.id != itemToDelete.id
  })
  return new_items
}

const removeMyItem = (state, action) => {
  let newListItems = state.formData.slice(0)
  const itemToDelete = action.payload
  let new_state = newListItems.map(obj => {
    if(obj.id == itemToDelete.label){
      const newItemArray = deleteItem(obj, itemToDelete)
      return {id: obj.id, items: newItemArray}
    } else {
      return obj
    }
  })
  return {formData: new_state}
}

const setMyItems = (state, action) => {
  let newFormData = state.formData.slice(0)
  let needNewItemArray = true;
  for (let field of newFormData) {
    if (field.id == action.payload.id) {
      field.items = field.items.concat(action.payload.items)
      needNewItemArray = false;
      break;
    }
  }

  if (needNewItemArray) {
      newFormData.push(action.payload)
  }
  return {formData: newFormData}
}

const literal = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'SET_ITEMS':
      return setMyItems(state,action)
    case 'REMOVE_ITEM':
      return removeMyItem(state,action)
    default:
      return state
  }
}

export default literal