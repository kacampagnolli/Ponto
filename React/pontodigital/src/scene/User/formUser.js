import React, { Component } from 'react';
import CardForm from '../../components/card';
import TextField from 'material-ui/TextField';


class FormCard extends Component {
    constructor(props) {
        super(props);
        this.width = props.width;
    }

    render(){
        return(
            <form style={this.width}>
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

const SingUpCard = (props) =>{
    return(
        <CardForm>
            <FormCard {...props} />
        </CardForm> 
    );
};

export default SingUpCard;