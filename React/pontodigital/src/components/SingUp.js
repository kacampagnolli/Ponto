import React, { Component } from 'react';
import FormInput from './utils/FormInput.js'
import 'statics/css/teste.css';



class SingUp extends Component{

    constructor(){
        super();
        this.state = {nome:'',senha:''};
    }

    setNome(evento){
        this.setState({nome:evento.target.value});
    }

    setSenha(evento){
        this.setState({senha:evento.targe.value});
    }

    render(){
        return(
            <div id ="mycard">
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Cadastro de Usuário</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <form action="#">
                            <FormInput idInput="nome" textInput="text" nameInput="nome" 
                            valueInput={this.state.nome} onChangeInput="" labelInput="Nome" />
                            <FormInput idInput="senha" textInput="password" nameInput="senha" 
                            valueInput={this.state.senha} onChangeInput="" labelInput="Senha" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingUp;