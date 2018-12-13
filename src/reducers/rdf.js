const $rdf = require('rdflib')

const generateMyRDF = (state, action) => {
  const graph = $rdf.graph()
  const subject = (action.payload) ? action.payload : $rdf.BlankNode()
  const formDoc = subject.doc()
  state.formData.forEach(field => {
    field.items.forEach(item => {
        switch(item) {
          default:
            graph.add(subject, $rdf.sym(field.id), item.content, formDoc)
        }
    })
  })
  // Temp solution displays RDF in Turtle, likely use a Modal Component
  // to display graph in multiple formats.
  alert($rdf.serialize(formDoc, graph, 'text/turtle'))
  return { ...state }
}

const generateRDF = (state=[], action) => {
  console.log(`Action type is ${action.type}`)
  switch(action.type) {
    case 'GENERATE_RDF':
      return generateMyRDF(state, action)
    default:
      return state
  }
}

export default generateRDF
