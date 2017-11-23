import React, { Component } from 'react';
import FormButton from './utils/FormButton.js'
import FormInput from './utils/FormInput.js'
import Logo from './utils/Logo.js'

class Login extends Component {
    render() {
        return (<div className="mdl-layout mdl-js-layout mdl-color--grey-100">
            <main className="mdl-layout__content">
                <div className="mdl-card mdl-shadow--6dp">
                    <Logo/>
                    <div className="mdl-card__supporting-text">
                        <form action="#">
                            <FormInput textInput='text' />
                            <FormInput textInput='password' />
                        </form>
                    </div>
                    <FormButton textButton='Login' />
                </div>
            </main>
        </div>


        );
    }
}

export default Login;
