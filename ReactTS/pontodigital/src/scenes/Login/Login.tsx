// React
import * as React from 'react';

// Components
import Card from '../../components/Card';
import InputText from '../../components/InputText';
import RaisedButton from '../../components/RaisedButton';

// Statics
import logo from '../../assets/img/logo_autbank.jpg';

// Types
import { CardType } from '../../types';
import { Stores } from '../../types';

// Mobx
import { observer, inject } from 'mobx-react';

//Form Store
import LoginForm from './LoginForm';

//Store
import Authenticate from '../../stores/Authenticate';

//Action
//import { execute } from './Action';


interface Props {
  store?: Authenticate;
}

@inject((stores: Stores): Props => ({store: stores.authenticate}))
@observer
export default class Login extends React.Component<Props, {}> {
    private form = new LoginForm();  

    renderCardTitle(): CardType {
      return({
        title: 'Login',
        subtitle: 'Bem-Vindo ao Ponto Digital',
      });
    }
    
    renderCardHeader(): CardType {
      return({
        element: <img src={logo} alt="Logo"/>,
        textStyles : {display : 'none'}
      });
    }
    
    onSubmitForm = (e: Event) => { 
      e.preventDefault();
      const {username , password} = this.form.form.fields;
      this.props.store!.login(username.value, password.value);
    } 

    renderCardText(): CardType {
      const { form, onFieldChange } = this.form;
      return({
        element: (
          <div>
            <InputText 
              floatingLabelText={form.fields.username.label} 
              value={form.fields.username.value} 
              hintText={form.fields.username.placeholder}
              errorText={form.fields.username.error}
              name={'username'} 
              id={'username'} 
              type={'text'} 
              onChange={onFieldChange.bind(event)}
              fullWidth={true}
            />
            <InputText 
              floatingLabelText={form.fields.password.label} 
              value={form.fields.password.value}
              hintText={form.fields.password.placeholder}
              errorText={form.fields.password.error} 
              name={'password'} 
              id={'password'} 
              type={'password'} 
              onChange={onFieldChange.bind(event)}
              fullWidth={true}
            />
            <a style={{textDecoration: 'none'}} href="#">Esqueceu sua Senha?</a> 
            {
              // TODO fazer
            }
          </div>
        )
      });
    }

    renderCardAction(): CardType {
      const { form } = this.form;
      return({ element: ( this.props.store!.loading ?
        <RaisedButton loading={true} />
        : <RaisedButton label={'Login'} type={'submit'} primary={true} disabled={!form.meta.isValid} />
       ),
      styles: { display: 'flex', flexDirection: 'row-reverse'}
      });
    }
    
    render(): JSX.Element {
      return (
          <Card 
            cardTitle={this.renderCardTitle()} 
            cardHeader={this.renderCardHeader()}
            cardText={this.renderCardText()}
            cardActions={this.renderCardAction()}
            onSubmitForm={this.onSubmitForm}
          />
      );
    }
}