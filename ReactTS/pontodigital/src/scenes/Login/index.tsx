// React
import * as React from 'react';

// Components
import Card from '../../components/Card';
import InputText from '../../components/InputText';
import RaisedButton from '../../components/RaisedButton';

// Statics
import logo from '../../statics/img/logo_autbank.jpg';

// Types
import { CardType } from '../../types';
import { Stores } from '../../types';

// Store
import LoginStore from '../../stores/LoginStore';

// Mobx
import { observer, inject } from 'mobx-react';

interface Props {
  store?: LoginStore;
}

@inject((stores: Stores): Props => ({store: stores.loginStore}))
@observer
export default class Login extends React.Component<Props, {}> {
    
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
    
    usernameChange = (e: React.FormEvent<any>): void => {
      const target = e.target as HTMLInputElement;
      this.props.store!.onchangeUsername(target.value);
    }

    passwordChange= (e: React.FormEvent<any>): void => {
      const target = e.target as HTMLInputElement;
      this.props.store!.onchangePassword(target.value);
    }

    renderCardText(): CardType {
      const {store} = this.props;
      return({
        element: (
          <div>
            <InputText 
              floatingLabelText={'Usuário'} 
              value={store!.username} 
              name={'username'} 
              id={'username'} 
              type={'text'} 
              onChange={this.usernameChange.bind(event)}
              fullWidth={true}
            />
            <InputText 
              floatingLabelText={'Senha'} 
              value={store!.password} 
              name={'password'} 
              id={'password'} 
              type={'password'} 
              onChange={this.passwordChange.bind(event)}
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

    onPress(): void {
      this.props.store!.setLoading();
    }

    renderCardAction(): CardType {
      return({ element: ( !this.props.store!.loading ?
        <RaisedButton label={'Login'} onClick={() => this.onPress()} primary={true} />
        : <RaisedButton loading={true} />
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
          />
      );
    }
}