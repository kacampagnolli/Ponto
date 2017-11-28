import React, { Component } from 'react';



class SingUp extends Component{

    constructor(){
        super();
        this.state = {nome:'',senha:''};
    }

    setNome(evento){
        this.setState({nome:evento.target.value});
    }

    setSenha(evento){
        this.setState({senha:evento.targe.value});
    }

    render(){
        return(
           <div/>
        );
    }
}

export default SingUp;