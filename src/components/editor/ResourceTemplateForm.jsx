// Copyright 2018 Stanford University see Apache2.txt for license

import React, {Component} from 'react'
import connect from 'react-redux'
import PropTypes from 'prop-types'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import InputLiteral from './InputLiteral'
import InputResource from './InputResource'
import InputLookup from './InputLookup'
import ModalToggle from './ModalToggle'
import generateRDF from '../../action
const { getResourceTemplate } = require('../../sinopiaServerSpoof.js')

class ResourceTemplateForm extends Component {
  constructor(props) {
    super(props)
    this.rtModalButton = this.rtModalButton.bind(this)
    this.resourceTemplateButtons = this.resourceTemplateButtons.bind(this)
    this.defaultValues = this.defaultValues.bind(this)
    this.defaultValues()
    this.previewRDF = this.previewRDF.bind(this)
  }

  rtModalButton = (rtId) => {
    let resourceTemplate = getResourceTemplate(rtId)
    return (
      <ModalToggle
        key={rtId}
        rtId={rtId}
        buttonLabel={resourceTemplate.resourceLabel}
        propertyTemplates ={resourceTemplate.propertyTemplates}
      />
    )
  }

  previewRDF = () => {
    this.props.handleGenerateRDF()
  }

  // Note: rtIds is expected to be an array of length at least one
  resourceTemplateButtons = (rtIds) => {
    let buttons = []
    rtIds.map((rtId, i) => {
      buttons.push(<ButtonGroup key={`${rtId}-${i}`}>{this.rtModalButton(rtId)}</ButtonGroup>)
    })
    return buttons
  }

  defaultValues = () => {
    this.props.propertyTemplates.map( (pt) =>{
      if (pt.mandatory == undefined) pt.mandatory = "true"
      if (pt.repeatable == undefined) pt.repeatable = "false"
      if (pt.editable == undefined) pt.editable = "true"
    })
  }

  render() {
    let dashedBorder = {
      border: '1px dashed',
      padding: '10px',
    }
    if (this.props.propertyTemplates.length === 0 || this.props.propertyTemplates[0] === {}) {
      return <h1>There are no propertyTemplates - probably an error.</h1>
    } else {
      return (
        <form style={dashedBorder}>
          <div className='ResourceTemplateForm'>
            <p>BEGIN ResourceTemplateForm</p>
              <div>
                {this.props.propertyTemplates.map( (pt, index) => {
                  if(pt.type == 'literal'){
                    return(
                      <InputLiteral propertyTemplate = {pt} key = {index} />
                    )
                  }
                  else if (pt.type == 'resource') {
                    if (pt.valueConstraint != null && pt.valueConstraint.valueTemplateRefs != null && pt.valueConstraint.valueTemplateRefs.length > 0) {
                      // TODO: some valueTemplateRefs may be lookups??
                      return (
                        <ButtonToolbar key={index}>
                          <div>
                            <b>{pt.propertyLabel}</b>
                          </div>
                          {this.resourceTemplateButtons(pt.valueConstraint.valueTemplateRefs)}
                        </ButtonToolbar>
                      )
                    } else if (pt.valueConstraint.useValuesFrom[0] != null && pt.valueConstraint.useValuesFrom.length > 0) {
                      return (
                        <InputResource propertyTemplate = {pt} key = {index} />
                      )
                    } else {
                      return (<p key={index}><b>{pt.propertyLabel}</b>: <i>NON-modal resource</i></p>)
                    }
                  }
                  else if (pt.type == 'lookup'){
                    return(
                      <InputLookup propertyTemplate = {pt} key = {index} />
                    )
                  }
                })}
              </div>
            <p>END ResourceTemplateForm</p>
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={this.previewRDF}>Preview RDF</button>
          </div>
        </form>
      )
    }
  }
}

ResourceTemplateForm.propTypes = {
  propertyTemplates: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapDispatchToProps = dispatch => ({
  handleGenerateRDF(){
    dispatch(getRDF())
  }
})

export default connect(mapDispatchToProps)(ResourceTemplateForm)
