// Libraries
import * as React from 'react';
import { observer, inject } from 'mobx-react'
import { History } from 'history';
import { withRouter, Switch, Route} from 'react-router';
import { Link } from 'react-router-dom'

// Components
import { http } from '../../util';
import { Menu } from '../../components/Menu';
import { Authentication } from '../../modules/Authentication';
import { Statistics } from '../../screen/Statistics';
import { Users } from '../../screen/Users';
import { Resume } from '../../screen/Resume';
import { Categories } from '../../screen/Categories';
import { Teams } from '../../screen/Teams';
import { NotFound } from '../../components/404'
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
        const id = 1
        return (
            <div>
                <Menu>
                    <h1>Dashboard</h1>
                    
                    <Switch>    
                        <Route path="/resumo" exact component={Resume} />
                        <Route path="/estatisticas" exact component={Statistics} />
                        <Route path="/usuarios" component={Users} />
                        <Route path="/categorias" component={Categories} />
                        <Route path="/equipes"  component={Teams}/>
                        <Route component={NotFound} />
                    </Switch>
                    
                    
                    <Link to ="/usuarios">Listar usuario</Link>
                    <br/>
                    <Link to ="/usuarios/cadastrar">cadastrar usuario</Link>
                    <br/>
                    <Link to={`/usuarios/${id}`}>editar usuario 1</Link>
                        
                    <br/>
                    <br/>

                    <Link to="/equipes">Listar Times</Link>
                    <br/>
                    <Link to="/equipes/cadastrar">Cadastrar Time</Link>
                    <br/>
                    <Link to={`/equipes/${id}`}>editar Time 1</Link>

                    <br/>
                    <br/>

                    <Link to="/categorias">Listar categorias</Link>
                    <br/>
                    <Link to="/categorias/cadastrar">Cadastrar categoria</Link>
                    <br/>
                    <Link to={`/categorias/${id}`}>editar categoria 1</Link>

                    <br/>
                    <br/>
                    
                    <Button variant="raised" color="primary" onClick={this.reset}>
                        Logout
                    </Button>
                </Menu>
            </div>
        );
    }
}                                                                                                                                                                            

const Dashboard = withRouter(DashboardComponent as any)

export {Dashboard}