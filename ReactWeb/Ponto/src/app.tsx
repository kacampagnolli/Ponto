// Libraries
import * as React from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { RouteProps } from 'react-router';

// Components
import { Login } from './screen/Login';
import { Dashboard } from './screen/Dashboard';
import { Authentication } from './modules/Authentication';


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
            return <Component {...props} />
        } 
    } : undefined;
    
    return (
        <Route path={path} render={innerRender} />
    )
}

@inject('authentication')
@observer
class AppComponent extends React.Component<AppProps> {
    render() {
        const { authentication } = this.props;
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute authentication={authentication} component={Dashboard} />
            </Switch>
        )
    }
}
const App = withRouter(AppComponent as any) 

export {App}