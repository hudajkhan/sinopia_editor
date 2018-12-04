// Copyright 2018 Stanford University see Apache2.txt for license

import { rdf } from 'rdflib'

export const generate = (graph = rdf.graph()) => {
  type: 'GENERATE',
  graph
})
