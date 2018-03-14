import { observable, action } from 'mobx'
import Validator from 'validatorjs'

class LoginForm {
    @observable
    form = {
        fields: {
            username: {
                value: '',
                label: 'Usuário',
                placeholder: 'Digite seu usuário',
                rules: 'required',
                error: ''
            },
            password: {
                value: '',
                label: 'Senha',
                placeholder: 'Digite sua senha',
                rules: 'required',
                error: ''
            }
        },
        meta: {
            isValid: false,
            error: null
        } 
    }
    @action
    onFieldChange = (e: React.FormEvent<any>) => {
        const target = e.target as HTMLInputElement;

        this.form.fields[target.name].value = target.value;
        let {username, password} = this.form.fields

        var validation: Validator.Validator<any> = new Validator(
            {username: username.value, password: password.value},
            {username: username.rules, password: username.rules},
            {required: 'Campo Obrigatório'}
        );
        
        this.form.meta.isValid = validation.passes() as boolean;
        this.form.fields[target.name].error = validation.errors.first(target.name) as string;
    }



}
export default LoginForm;

