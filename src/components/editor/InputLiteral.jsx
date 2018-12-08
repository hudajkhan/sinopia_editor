// Copyright 2018 Stanford University see Apache2.txt for license

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setItems, removeItems } from '../../actionCreators'

class InputLiteral extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.checkMandatoryRepeatable = this.checkMandatoryRepeatable.bind(this)
    this.state = {
      content_add: ""
    }
    this.lastId = -1
  }

  handleChange(event) {
    const usr_input = event.target.value
    this.setState({ content_add: usr_input })
  }


// user adds input 
// input = {content: "blah", id: 0}
// pass input to handleMyItemsChange which calls setItems
// in setItems we do the filtering and adding


  handleKeypress(event) {
    if (event.key == "Enter") {

      console.warn(this.props.formData)


      var currentcontent = this.state.content_add.trim()
      if (!currentcontent) {
        return
      }

      let item = {content: currentcontent, id: ++this.lastId}

      const test = {
        id: this.props.propertyTemplate.propertyLabel,
        items: item
      }

      console.log("this is test")
      console.log(test)

      this.props.handleMyItemsChange(test)
      this.setState({
        content_add: ""
      })
      event.preventDefault()
    }
  }

  handleClick(event) {
    const idToRemove = Number(event.target.dataset["item"])
    // const userInputArray = this.props.myItems.filter((listitem) => {return listitem.id !== idToRemove})
    this.props.handleMyItemsRemove(this.props.myItems, idToRemove)
    // this.setState({ myItems: userInputArray })
  }

  checkMandatoryRepeatable() {
     if (this.props.propertyTemplate.mandatory == "true") {
      if (this.makeAddedList().length > 0) {
        return false
      }
      else {
        return true
      }
     }
     else if (this.props.propertyTemplate.mandatory == "false") {
      return false
     }
  }

  // makeAddedList() {
  //   const elements = this.props.myItems.map((listitem) => (
  //     <div
  //       key={listitem.id}
  //     >
  //       {listitem.content}

  //       <button
  //         id="displayedItem"
  //         type="button"
  //         onClick={this.handleClick}
  //         key={listitem.id}
  //         data-item={listitem.id}
  //         >X
  //       </button>
  //     </div>

  //   ))
  //   return elements
  // }

  // {this.makeAddedList()} GOES ON LINE 151
  render() {
    return (
      <div className="form-group">
        <label htmlFor="typeLiteral">
          {this.props.propertyTemplate.propertyLabel}
          <input
            required={this.checkMandatoryRepeatable()}
            className="form-control"
            placeholder={this.props.propertyTemplate.propertyLabel}
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            value={this.state.content_add}
            id="typeLiteral"
          />
          
        </label>

      </div>
    )
  }
}

InputLiteral.propTypes = {
  propertyTemplate: PropTypes.shape({
    propertyLabel: PropTypes.string.isRequired,
    mandatory: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    repeatable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  }).isRequired
}


const mapStatetoProps = (state) => {
  return {
    formData: state.formData
  }
}
const mapDispatchtoProps = dispatch => ({
  handleMyItemsChange(test_object){
    dispatch(setItems(test_object))
  },
  handleMyItemsRemove(test_object, id){
    dispatch(removeItems(test_object, id))
  }
})

export default connect(mapStatetoProps, mapDispatchtoProps)(InputLiteral); // mapDispatchtoProps
