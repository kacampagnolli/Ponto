//React
import React from 'react'

//Material-UI
import MenuItem from 'material-ui/MenuItem';

export default class Item extends React.Component{
    constructor(props){
        super(props)
        const {value,text} = this.props
        this.value = value;
        this.text = text;
    }
    render(){
        return(
            <MenuItem value={this.value} primaryText={this.text} />
        );
    }
}