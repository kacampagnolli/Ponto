// Libraries
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import { Provider as MobxProvider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStrict } from 'mobx';
import { App }  from "./app";

// Components 
import { Authentication } from './modules/Authentication';

// Material-ui
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const modulesToProvider = {
    authentication: new Authentication(),
}

const theme = createMuiTheme();

const render = (App: any) => {
    ReactDOM.render(
      <AppContainer>
            <MobxProvider {...modulesToProvider}>
                <Router basename={"/"}>
                    <MuiThemeProvider theme={theme}>
                        <App />
                    </MuiThemeProvider>
                </Router>
            </MobxProvider>
      </AppContainer>,
      document.getElementById('root'),
    )
}


declare var module: any;
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
    })
}
useStrict(true);
render(App)