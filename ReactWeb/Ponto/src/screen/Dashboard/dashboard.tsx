// Libraries
import * as React from 'react';
import { observer, inject } from 'mobx-react'
import { History } from 'history';
import { withRouter, Switch, Route} from 'react-router';

// Components
import { http } from '../../util';
import { LeftMenu } from '../../components/leftmenu';
import { TopMenu } from '../../components/topmenu';
import { Authentication } from '../../modules/Authentication';
import { Statistics } from '../../screen/Statistics';
import { Users } from '../../screen/Users';
import { Resume } from '../../screen/Resume';
import { Categories } from '../../screen/Categories';
import { Teams } from '../../screen/Teams';

// Material-ui
import Button from 'material-ui/Button';

interface DashboardProps {
    authentication: Authentication;
    history: History
};

@inject('authentication')
@observer
class DashboardComponent extends React.Component<DashboardProps>{

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
                <TopMenu/>
                <LeftMenu/>
                
                <Switch>
                    <Route path="/resumo" exact component={Resume} />
                    <Route path="/estatisticas" exact component={Statistics} />
                    <Route path="/usuarios" exact component={Users} />
                    <Route path="/categorias" exact component={Categories} />
                    <Route path="/equipes" exact component={Teams}/>
                </Switch>

                <h1>Dashboard</h1>
                <Button variant="raised" color="primary" onClick={this.reset}>
                    Logout
                </Button>
            </div>
        );
    }
}                                                                                                                                                                            

const Dashboard = withRouter(DashboardComponent as any)

export {Dashboard}