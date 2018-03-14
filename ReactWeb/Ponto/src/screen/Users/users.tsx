// Libraries
import * as React from 'react';
import { withRouter, Switch, Route, RouteComponentProps} from 'react-router';

// Component 
import { Register } from './register'

type UserComponentProps = {
    
} & RouteComponentProps<{}>;

class UsersComponent extends React.Component<UserComponentProps>{
    render() {
        const { match } = this.props;
        console.log(`${match.url}/cadastrar`)
        return (
            <div>
                Usuarios
                <Switch>
                    <Route path="/usuarios/cadastrar" exact component={Register} />
                </Switch>

            </div>
        );
    }
} 
const Users = withRouter(UsersComponent as any)

export {Users}

