import * as React from 'react';
import { http } from '../../util';
import { observer, inject } from 'mobx-react'
import Button from 'material-ui/Button';
import { Authentication } from '../../modules/Authentication';
import { History } from 'history';

import { Menu } from '../../components/Menu';

export type DashboardProps = {
    authentication: Authentication;
    history: History
};

@inject('authentication')
@observer
export class Dashboard extends React.Component<DashboardProps>{

    testeToken= async () => {
       const usuario = await http.get('/protected/usuario')
       console.log(usuario)
    }

    componentWillMount(){
        this.testeToken();
    }

    reset = () => {
        this.props.authentication.reset();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Menu />
                <h1>Dashboard</h1>
                <Button variant="raised" color="primary" onClick={this.reset}>
                    Logout
                </Button>
            </div>
        );
    }
}