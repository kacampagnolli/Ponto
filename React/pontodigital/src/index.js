import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//CSS
import './mdl/material.min.css';
import './mdl/material.min.js';
import './mdl/fontsgoogle.css';

//COMPONENTS
import LoginBox from './components/LoginBox.js'
import MenuBox from './components/MenuBox.js'



ReactDOM.render(
(<Router>
    <div>
    <Route exact path="/" component={LoginBox}/>
    <Route exact path="/menu" component={MenuBox}/>
    </div>
</Router>
), 
document.getElementById('root'));
registerServiceWorker();
