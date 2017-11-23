import React, { Component } from 'react';

// Params: typeInput, textInput, msgError, pattern


class FormInput extends Component {
    render() {
      return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" name={this.props.nameInput} type={this.props.typeInput} id={this.props.idInput} value={this.props.valueInput} onChange={this.props.onChangeInput}/>
            <label className="mdl-textfield__label" htmlFor={this.props.nameInput}>{this.props.labelInput}</label>
            <span className="mdl-textfield__error">{this.props.msgError}</span>
        </div>

    );
}
}
export default FormInput;
