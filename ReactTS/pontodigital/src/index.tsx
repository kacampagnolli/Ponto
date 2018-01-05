import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createRoutes from './main/createRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import Theme from './theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

useStrict(true);

const stores = '';
const routes = createRoutes();
const mainTheme = getMuiTheme(Theme);

ReactDOM.render(
  <Provider {...stores}>
    <MuiThemeProvider muiTheme={mainTheme}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </MuiThemeProvider >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
