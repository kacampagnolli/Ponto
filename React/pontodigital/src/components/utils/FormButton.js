import React, { Component } from 'react';

class FormButton extends Component {
    render() {
      return (
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                     {this.props.textButton}
                 </button>

    );
}
}
export default FormButton;
