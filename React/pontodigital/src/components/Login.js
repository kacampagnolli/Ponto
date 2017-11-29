import React, { Component } from 'react';
import {Card, CardTitle, CardText,CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import logo from 'statics/img/logo_autbank.jpg';



const styles = {
    CardHeader:{
    backgroundColor: '#3F51B5',
    },
    div:{
        paddingTop:'3%',
        maxWidth:'400px',
        minWidth:'300px',
        margin: '0 auto',  
    },
    backGroundDiv:{
        width: '100%',
        backgroundColor:'red',
    },
    RaisedButton:{
        paddingTop:'5%',
        width:'100px',
        alignSelf:'flex-end',
        marginLeft:'auto',
    },
    Link:{
        color:'#3F51B5',
        textDecoration:'none',
    }
};

class FormCard extends Component {
    render(){
        return(
            <form>
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
                <a style={styles.Link} href="">Esqueceu sua Senha?</a>
                <div style={styles.RaisedButton}>
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


const LoginCard = () =>{
    return(
        <div style={styles.div}>
            <Card style={styles.Card}>
                <CardTitle style={styles.CardHeader}>
                <img src={logo} style={styles.img} alt="Logo"/>
                </CardTitle>
                <CardTitle title="Login"
                    titleColor="#000000" 
                    subtitle="Bem-Vindo ao Ponto Digital"
                    subtitleColor="#616161"
                />
                <CardText>
                    <FormCard />
                </CardText>
            </Card>
        </div>

);
};

export default LoginCard;

