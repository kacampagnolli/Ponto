import React, { Component } from 'react';
import FormInput from './utils/FormInput.js'
import FormButton from './utils/FormButton.js'
import 'statics/css/Card.css'

class Category extends Component{
    constructor(){
        super();
        this.state = {descricao:''};
    }


    render(){
        return(
            <div className="login-container">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Cadastro de Categoria</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <form action="#">
                        <FormInput idInput="descricao" textInput="text" nameInput="descricao" 
                        valueInput={this.state.descricao}  labelInput="Descrição" />
                    </form>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <FormButton textButton='Cadastrar' />
                </div>
            </div>
        </div> 
        );
    }
}

export default Category;