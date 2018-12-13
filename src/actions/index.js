export const getRDF = subject => ({
  type: 'GENERATE_RDF',
  payload: subject
})

export const setItems = item => ({
  type: 'SET_ITEMS',
  payload: item
})
