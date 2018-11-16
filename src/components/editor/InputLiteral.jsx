import React, {Component} from 'react';

class InputLiteral extends Component {
  render() {
    return (
      <div>
        <label>{this.props.propertyTemplate.propertyLabel}</label>
        <input type="text" placeholder={this.props.propertyTemplate.propertyLabel}/>
      </div>
    )
  }
}

export default InputLiteral;
