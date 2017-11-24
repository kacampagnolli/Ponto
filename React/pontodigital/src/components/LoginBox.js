import React, { Component } from 'react';
import FormButton from './utils/FormButton.js'
import FormInput from './utils/FormInput.js'
import Logo from './utils/Logo.js'
import 'statics/css/Logo.css'

class LoginBox extends Component {
    render() {
        return (
           
        <div className=" mdl-layout mdl-js-layout mdl-color--grey-100">
            <main className="mdl-layout__content">
            <div className="login-container">
                <div className=" mdl-card mdl-shadow--6dp">
                    <Logo/>
                    <div className="mdl-card__supporting-text">
                        <form action="#">
                            <FormInput labelInput='Usuário' nameInput='user' typeInput='text' idInput='user'/>
                            <FormInput msgError='' labelInput='Senha' nameInput='password' typeInput='password' idInput='password'/>
                        </form>
                    </div>
                    <FormButton textButton='Login' />
                </div>
                </div>
                
            </main>
        
</div>

        );
    }
}

export default LoginBox;
