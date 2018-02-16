import * as React from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { observer, inject } from 'mobx-react';

import { Login } from './screen/Login';
import { Dashboard } from './screen/Dashboard';

import { Authentication } from './modules/Authentication';

import { RouteProps } from 'react-router';

interface AppProps { 
    authentication: Authentication; 

}

interface ProtectedRouteProps {
    authentication: Authentication;
    component?: RouteProps['component'];
    render?: RouteProps['render'];
    path?: RouteProps['path'];
}

function ProtectedRoute({authentication, component: Component, render, path, ...props}: ProtectedRouteProps) {
    const innerRender: RouteProps['render'] = (render || Component) ? (props) => {
        if (!authentication.isAuthenticated) {
            return <Redirect to={{
                pathname:"/login",
                state: { from: props.location}
            }} />
        }
        if (Component) {
            console.log("teste");
            console.log(props);
            return <Component {...props} />
        } 
    } : undefined;
    
    return (
        <Route path={path} render={innerRender} />
    )
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
@inject('authentication')
@observer
export class App extends React.Component<AppProps> {
    render() {
        const { authentication } = this.props;
        console.log("aqui");
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute authentication={authentication} component={Dashboard} />
            </Switch>
        )
    }
}

export default withRouter(App as any) as React.ComponentType<{}>;