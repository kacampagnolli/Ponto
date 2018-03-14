// Libraries
import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { Authentication } from '../../modules/Authentication';
import { observer, inject } from 'mobx-react';
import { isEmpty } from 'lodash';

// Component
import LoginForm from './form';
import Button from 'material-ui/Button';

// Material-ui
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

type LoginProps = {
    authentication: Authentication;
    redirect: () => void;
} & RouteComponentProps<{}>;


@inject('authentication')
@observer
class Login extends React.Component<LoginProps>{

    private form = new LoginForm();  

    onSubmitForm = (e: Event) => { 
        e.preventDefault();
        const {username , password} = this.form.form.fields;
        this.props.authentication.authenticate({
            username: username.value,
            password: password.value
        }).then(() => {
            this.props.redirect();
        }).catch(() => {
            console.log("sou homem"); // TODO @leobronza Arrumar
        })
      } 

    renderForm() {
        const { form, onFieldChange } = this.form;
        return(
            <form onSubmit={this.onSubmitForm.bind(event)}>
                <FormControl error={!isEmpty(form.fields.username.error)} fullWidth aria-describedby="name-error-text">
                    <InputLabel htmlFor="username">{form.fields.username.label}</InputLabel>
                    <Input name="username" id="username" value={form.fields.username.value} onChange={onFieldChange.bind(event)} />
                    <FormHelperText id="username">{form.fields.username.error}</FormHelperText>
                </FormControl>
                <br/>
                <FormControl error={!isEmpty(form.fields.password.error)} fullWidth aria-describedby="name-error-text">
                    <InputLabel htmlFor="password">{form.fields.password.label}</InputLabel>
                    <Input name="password" id="password" type="password" value={form.fields.password.value} onChange={onFieldChange.bind(event)} />
                    <FormHelperText id="password">{form.fields.password.error}</FormHelperText>
                </FormControl>
                <Button variant="raised" color="primary" type="submit" disabled={!form.meta.isValid} >
                    Login
                </Button>
            </form>
        )
    }
    render() {
        const isLoggedIn = !isEmpty(this.props.authentication.accessToken);
        const { from } = this.props.location.state || { from: { pathname: '/' } };
       
        if(isLoggedIn) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <h1>LOGIN</h1>
                {this.renderForm()}
            </div>
        );
    }
}
export {Login} 