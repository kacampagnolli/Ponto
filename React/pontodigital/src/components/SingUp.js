import React, { Component } from 'react';
import FormInput from './utils/FormInput.js'
import './teste.css';

class SingUp extends Component{
    render(){
        return(
            <div id ="mycard">
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Cadastro de Usúario</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <form action="#">
                            <FormInput idInput="nome" textInput="text" nameInput="nome" 
                            valueInput={this.state.nome} onChangeInput={this.setNome} labelInput="Nome" />
                            <FormInput idInput="senha" textInput="password" nameInput="senha" 
                            valueInput={this.state.senha} onChangeInput={this.setSenha} labelInput="Senha" />
                        </form>
                    </div>
                </div>
                <div id="next">
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                        <i className="material-icons">arrow_forward</i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SingUp;