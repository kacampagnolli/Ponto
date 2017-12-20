//React
import React from 'react';

//Material-UI
import SelectField from 'material-ui/SelectField';

//Component
import Item from '../menuItem';
import {styles} from './style';

export default class ComboBox extends React.Component{
    constructor(props){
        super(props);
        const {labelCombo,valueCombo,onChangeCombo,typeCombo} = this.props;
        this.labelCombo = labelCombo;
        this.valueCombo = valueCombo;
        this.onChangeCombo = onChangeCombo;
        this.typeCombo = typeCombo;
    }
    render(){
        return(
            <SelectField
                floatingLabelText={this.labelCombo}
                value={this.valueCombo}
                onChange={this.onChangeCombo}
                style={this.typeCombo==="min"?styles.customWidth2:styles.customWidth}
            >
                <Item value={1} text="Funcionario" />
                <Item value={1} text="Funcionario" />
                <Item value={1} text="Funcionario" />
                <Item value={1} text="Funcionario" />
            </SelectField>
        );
    }
}