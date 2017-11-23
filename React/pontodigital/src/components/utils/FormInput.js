import React, { Component } from 'react';

// Params: typeInput, textInput, msgError, pattern


class FormInput extends Component {
    render() {
      return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type={this.props.typeInput} pattern={this.props.pattern} id="input"/>
            <label className="mdl-textfield__label" htmlFor="input">{this.props.textInput}</label>
            <span className="mdl-textfield__error">{this.props.msgError}</span>
        </div>

    );
}
}
export default FormInput;
