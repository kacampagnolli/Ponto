import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//CSS
import 'statics/mdl/material.min.css';
import 'statics/mdl/material.min.js';
import 'statics/mdl/fontsgoogle.css';

//COMPONENTS
import Login from './components/Login.js'
import PontoBox from './components/PontoBox.js'

ReactDOM.render(
(<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/ponto" component={PontoBox}/>
    </Switch>
</BrowserRouter>
), 
document.getElementById('root'));
registerServiceWorker();
