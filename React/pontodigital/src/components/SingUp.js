import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    CardTitle:{
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
    customWidth:{
        width:'200px',
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
                <DropDownMenu value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left',}}
                >
                    <MenuItem value={1} primaryText="Custom width" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
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



const SingUpCard = () =>{
    return(
        <div style={styles.div}>
            <Card style={styles.Card}>
                <CardTitle style={styles.CardTitle} title="Cadasto de Usuário" titleColor="#FFFFFF"/>
                <CardText>
                    <FormCard />
                </CardText>
            </Card>
        </div>

);
};

export default SingUpCard;



