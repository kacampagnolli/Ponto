import * as React from 'react';
import Card from '../../components/Card';
import { CardType } from '../../types';

interface Props {}
interface State {}

export default class Login extends React.Component<Props, State> {
    
    renderCardTitle(): CardType {
      return({
        title: 'Login',
        subtitle: 'Bem-Vindo ao Ponto Digital',
      });
    }
    
    renderCardHeader(): CardType {
      return({
        element: <div>OLA</div>,
      });
    }
    
    renderCardText(): CardType {
      return({
        element: (
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        )
      });
    }

    render(): JSX.Element {
      return (
          <Card 
            cardTitle={this.renderCardTitle()} 
            cardHeader={this.renderCardHeader()} 
            cardText={this.renderCardText()}
          />
      );
    }
}