//React
import React from 'react';

//Material-UI
import TextField from 'material-ui/TextField';

export default class ImputText extends React.Component{
    constructor(props){
        super(props);
        const {typeForm,labelForm} = this.props;
        this.typeForm = typeForm;
        this.labelForm = labelForm;
    }
    render(){
        return(
            <TextField floatingLabelText={this.labelForm}
                errorText=""
                type={this.typeForm}
            />
        );
    }
}
