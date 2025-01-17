import React, { Component } from 'react';
import {Switch,Route,Router} from 'react-router-dom'

import UserBox from '../scene/User'
import FormCategory from './FormCategory.js'
import FormTeam from './FormTeam.js'
import MenuBox from './MenuBox.js'
import ResumoBox from './ResumoBox.js'


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
                marginLeft:this.state.openMenu?'256px':0, height :'100%', display: 'flex',
                alignItems:'center', justifyContent:'center', padding:'2%'
            },
            divGeneral : {
                height : '100%',display: 'flex', flexFlow : 'column'
            }
        
        };
        return(
            <Router history={this.props.history}>
                <div style={styles.divGeneral}>
                <MenuBox {...this.state} {...this.props} updateOpenMenuTrue={this.updateOpenMenuTrue}/>
               <div style={styles.divCenter}>
                    <Route  path={this.props.match.url + "/configuracoes/usuarios"} component={UserBox}/>
                    <Route  path={this.props.match.url + "/configuracoes/categorias"} component={FormCategory}/>
                    <Route  path={this.props.match.url + "/configuracoes/equipes"} component={FormTeam}/>
                    <Route  path={"/ponto/resumo"} component={ResumoBox}/> 
                </div>
            </div>
            </Router> 
        );
    }
}

export default PontoBox;