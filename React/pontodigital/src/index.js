import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import Login from './components/Login.js'
import PontoBox from './components/PontoBox.js'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});


ReactDOM.render(
(<MuiThemeProvider> muiTheme={muiTheme}>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/ponto" component={PontoBox}/>
    </Switch>
</BrowserRouter>
</MuiThemeProvider>
), 
document.getElementById('root'));
