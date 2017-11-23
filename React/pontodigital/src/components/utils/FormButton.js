import React, { Component } from 'react';

// Params: textButton

class FormButton extends Component {
    render() {
      return (
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                     {this.props.textButton}
                 </button>

    );
}
}
export default FormButton;
