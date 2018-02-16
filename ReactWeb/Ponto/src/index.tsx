import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import { Provider as MobxProvider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { useStrict } from 'mobx';

import { Authentication } from './modules/Authentication';

import App  from "./App";

useStrict(true);

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
  
  render(App)
  
  declare var module: any;
  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    })
  }