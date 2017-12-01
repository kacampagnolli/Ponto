import React, { Component } from 'react';
import {Switch,Route,Router} from 'react-router-dom'

import Stepper from './Stepper.js'
import Category from './Category.js'
import MenuBox from './MenuBox.js'


class PontoBox extends Component{
    
    constructor(props){
        super(props)
        this.state = {openMenu: true};
        this.updateOpenMenuTrue = this.updateOpenMenuTrue.bind(this)
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    updateDimensions() {
        if(window.innerWidth < 780) {
            this.setState({openMenu: false, width : window.innerWidth})
        }else{
            this.setState({openMenu: true, width : window.innerWidth })
        }
    }
    updateOpenMenuTrue(){
        
        this.setState({openMenu: !this.state.openMenu })
    }
    
    render(){
        const styles ={
            divCenter:{
                marginLeft:this.state.openMenu?'253px':0,
            }
        
        };
        return(
            <Router history={this.props.history}>
                <div>
                <MenuBox {...this.state} {...this.props} updateOpenMenuTrue={this.updateOpenMenuTrue}/>
               <div style={styles.divCenter}>
                    <Route  path={this.props.match.url + "/configuracoes/cadastrousuario"} component={Stepper}/>
                    <Route exact path={this.props.match.url + "/configuracoes/categorias"} component={Category}/>
                </div>
            </div>
            </Router> 
        );
    }
}

export default PontoBox;