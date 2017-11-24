import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//CSS
import 'statics/mdl/material.min.css';
import 'statics/mdl/material.min.js';
import 'statics/mdl/fontsgoogle.css';

//COMPONENTS
import Login from './components/Login.js'
import MenuBox from './components/MenuBox.js'
import SingUp from './components/SingUp.js'
import Category from './components/Category.js'

ReactDOM.render(
(<Router>
    <div>
        <Route exact path="/" component={Login }/>
        <Route exact path="/menu" component={MenuBox}/>
        <Route exact path="/usuario" component={SingUp}/>
        <Route exact path="/categoria" component={Category}/>
    </div>
</Router>
), 
document.getElementById('root'));
registerServiceWorker();
