import React, { Component } from 'react';
import FormButton from './utils/FormButton.js'

class LoginBox extends Component {
    render() {
      return (<div>
                <form>
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" pattern="[0-9]*" id="phone"/>
                        <label class="mdl-textfield__label" for="phone">Phone</label>
                        <span class="mdl-textfield__error">Digits only</span>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" pattern="[0-9]*" id="phone"/>
                        <label class="mdl-textfield__label" for="phone">Phone</label>
                        <span class="mdl-textfield__error">Digits only</span>
                    </div>
                    <FormButton textButton='Login' />
                </form>
                </div>
    );
}
}

export default LoginBox;
