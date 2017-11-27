import React, { Component } from 'react';
import FormButton from './utils/FormButton.js'
import FormInput from './utils/FormInput.js'
import Logo from './utils/Logo.js'
import 'statics/css/Login.css'

class Login extends Component {

    login(event){
        event.preventDefault();
        this.props.history.push('/ponto')
    }

    render() {
        return (
           <div>
        <div className=" mdl-layout mdl-js-layout mdl-color--grey-100">
            <main className="mdl-layout__content">
            <div className="login-container">
                <div className=" mdl-card mdl-shadow--6dp">
                <div className="logo-container">
                    <Logo/>
                </div>
                    <div className="mdl-card__supporting-text">
                        <form onSubmit={this.login.bind(this)}>
                            <FormInput labelInput='Usuário' nameInput='user' typeInput='text' idInput='user'/>
                            <FormInput msgError='' labelInput='Senha' nameInput='password' typeInput='password' idInput='password'/>
                            <FormButton textButton='Login' />
                        </form>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                    </div>
                </div>
                </div>
                
            </main>
        
</div>
</div>

        );
    }
}

export default Login;
