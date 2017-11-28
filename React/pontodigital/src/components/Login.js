import React, { Component } from 'react';


class Login extends Component {

    login(event){
        event.preventDefault();
        this.props.history.push('/ponto')
    }

    render() {
        return (
           <div>
        
            </div>

        );
    }
}

export default Login;
