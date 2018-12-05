// Copyright 2018 Stanford University see Apache2.txt for license

console.log("Before export")
export function addInputLiteral (items, predicate) {
  return {
    type: "TEST",
    items,
    predicate
  }
}
