import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import {
  indigo500, 
  indigoA100,
  grey400,
  red500,
  grey200
} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//COMPONENTS
import Login from './components/Login.js'
import PontoBox from './components/PontoBox.js'



const muiTheme = getMuiTheme({
    palette: {
      primary1Color: grey400,
      primary2Color:indigoA100,      
    
    },
    appBar:{
      height:56
    },
    textField: {
      errorColor: red500,
      textColor: grey400,
    },
    raisedButton:{
      color:grey200,   
      textColor:indigo500,
    },
    card:{
      titleColor: indigo500,
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
