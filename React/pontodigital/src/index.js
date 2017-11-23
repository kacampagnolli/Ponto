import React from 'react';
import ReactDOM from 'react-dom';
import './mdl/material.min.css';
import './mdl/material.min.js';
//import App from './App';
import LoginBox from './components/LoginBox.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
(<Router>
    <Route exact path="/" component={LoginBox}/>
    
</Router>
), 
document.getElementById('root'));
registerServiceWorker();
