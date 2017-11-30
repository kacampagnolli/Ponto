import React, { Component } from 'react';
import {Switch,Route,Router} from 'react-router-dom'

import SingUp from './SingUp.js'
import Category from './Category.js'
import MenuBox from './MenuBox.js'
class PontoBox extends Component{


    constructor(props){
        super(props)
        this.state = {open: true};
        this.updateOpenTrue = this.updateOpenTrue.bind(this)
       }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }

      updateDimensions() {
        if(window.innerWidth < 780) {
            this.setState({open: false, width : window.innerWidth})
        }else{
            this.setState({open: true, width : window.innerWidth })
        }
    }
    updateOpenTrue(){

        this.setState({open: true })
    }

    render(){
        return(
            <Router history={this.props.history}>
                <div>
                <MenuBox {...this.state} {...this.props} updateOpenTrue={this.updateOpenTrue}/>
                <Route  path={this.props.match.url + "/configuracoes/cadastrousuario"} component={SingUp}/>
                <Route exact path={this.props.match.url + "/configuracoes/categorias"} component={Category}/>
            </div>
            </Router> 
        );
    }
}

export default PontoBox;