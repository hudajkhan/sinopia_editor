import { SET_ITEMS, REMOVE_ITEMS } from './actions'

export function setItems(item) {
  return { type: SET_ITEMS, payload: item }
}

export function removeItems(item, id) {
  // // console.log(`This is the remove items id ${id}`)
  // // console.warn(item)
  // const new_item = item.filter(listitem => listitem.id !== id)

  // // console.log(`This is the remove items id ${new_item}`)
  // console.log(new_item)
  const new_item = {remove_id: id, item}
  return { type: REMOVE_ITEMS, payload: new_item }
}