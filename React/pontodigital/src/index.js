import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import Login from './components/Login.js'
import PontoBox from './components/PontoBox.js'
import Stepper from './components/Stepper.js'


const muiTheme = getMuiTheme({
    palette: {
      textColor: cyan500,
    },
    appBar: {
      height: 55.59,
    },

  });


const App = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/ponto" component={PontoBox}/>
        <Route path="/SingUp" component={Stepper}/>
    </Switch>
</BrowserRouter>
  );
  

ReactDOM.render(
(<MuiThemeProvider muiTheme={muiTheme}>
    <App/>
</MuiThemeProvider>
), 
document.getElementById('root'));
