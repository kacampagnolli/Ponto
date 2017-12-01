import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


const styles = {
    CardTitle:{
    backgroundColor: '#3F51B5',
    },
    div:{
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
    customWidth:{
        width:'200px',
        padding:'0',
        margin:'0',
    },
    formCard:{
        width:'100%',
        margin:'0',
        padding:'0',
    }
};

class FormCard extends Component {
    constructor(props) {
        super(props);
        console.log("a")
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});
    
    render(){
        return(
            <form style={styles.formCard}>
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
                <TextField floatingLabelText="E-mail"    
                    errorText=""
                    fullWidth={true}
                    type="email"
                />
                <TextField floatingLabelText="Cpf"    
                    errorText=""
                    fullWidth={true}
                    type="text"
                />
            </form>
        );
    };
};

const SingUpCard = () =>{
    return(
        <div style={styles.div}>
            <Card style={styles.Card}>
                <CardText>
                    <FormCard />
                </CardText>
            </Card>
        </div>

);
};

export default SingUpCard;