import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import {cyan500, black} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import Login from './components/Login.js'
import PontoBox from './components/PontoBox.js'
import Stepper from './components/Stepper.js'
import User from './components/User.js'

const muiTheme = getMuiTheme({
    palette: {
      textColor: cyan500,
    },
    appBar: {
      height: 55.59,
    },
    textField : {
      textColor : black
    }

  });


const App = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/ponto" component={PontoBox}/>
    </Switch>
</BrowserRouter>
  );
  

ReactDOM.render(
(<MuiThemeProvider muiTheme={muiTheme}>
    <App/>
</MuiThemeProvider>
), 
document.getElementById('root'));
