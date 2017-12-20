import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from 'statics/img/logo_autbank.jpg';

const styles = {
    CardTitle:{
    backgroundColor: '#3F51B5',
    },
    div:{
        display:'flex',
        flexFlow:'row',
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    footer:{
      display:'flex',
      flexFlow:'row wrap', 
      justifyContent:'space-between',
      alignItems:'center'
    },
    Link:{
        color:'#3F51B5',
        textDecoration:'none',
    }
};

class FormCard extends Component {
    constructor(props){
        super(props);
    }

    login (e) {
        e.preventDefault();
        this.props.history.push('/ponto')
    };

    render(){
        return(
            <form onSubmit={this.login.bind(this)}>
                <TextField floatingLabelText="Usuário"
                    errorText=""
                    fullWidth={true}
                    type="text"
                />
                <TextField floatingLabelText="Senha"    
                    errorText=""
                    fullWidth={true}
                    type="password"
                />
                <div style={styles.footer}>
                <a style={styles.Link} href="">Esqueceu sua Senha?</a>
                <RaisedButton label="Login"
                    type="submit" 
                    backgroundColor="#3F51B5"
                    labelColor="#FFFFFF"
                />
                </div>
            </form>
        );
    };
};

class LoginCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={styles.div}>
                <Card>
                    <CardTitle style={styles.CardTitle}>
                    <img src={logo} style={styles.img} alt="Logo"/>
                    </CardTitle>
                    <CardTitle title="Login"
                        titleColor="#000000" 
                        subtitle="Bem-Vindo ao Ponto Digital"
                        subtitleColor="#616161"
                    />
                    <CardText>
                        <FormCard {...this.props}/>
                    </CardText>
                </Card>
            </div>
        );
    }
};

export default LoginCard;

