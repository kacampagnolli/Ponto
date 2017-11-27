import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'


import MenuBox from './MenuBox.js'
import SingUp from './SingUp.js'
import Category from './Category.js'

class PontoBox extends Component{

    

    render(){
        return(
            <Switch>
                <div>
                <MenuBox/>
                <Route exact path={this.props.match.url + "/configuracoes/cadastrousuario"} component={SingUp}/>
                <Route exact path={this.props.match.url + "/configuracoes/categorias"} component={Category}/>
                </div>
            </Switch> 
        );
    }
}

export default PontoBox;