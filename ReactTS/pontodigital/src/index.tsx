import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { Stores } from './types';
import {createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Provider as MobxProvider } from 'mobx-react';
import { useStrict } from 'mobx';
import Theme from './theme';
import createMobxStores from './main/createMobxStore';
import { BrowserRouter as Router } from 'react-router-dom'; 

useStrict(true);

const stores: Stores = createMobxStores();
const mainTheme = createMuiTheme(Theme);

function render(App: React.ComponentType) {
  ReactDOM.render(
    <AppContainer>
      <MobxProvider {...stores}>
        <Router basename ={"/"}>
          <MuiThemeProvider theme={mainTheme}>
            <App />
          </MuiThemeProvider >
        </Router>
      </MobxProvider>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  );
}

render(App)

declare var module: any;
if (module.hot) {
    module.hot.accept('./App', () =>{
      const NextApp = require('./App').default;
      render(NextApp);
    });
}
