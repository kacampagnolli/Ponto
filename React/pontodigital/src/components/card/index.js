import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {styles} from './style';

export default class CardForm extends React.Component{
    constructor(props){
        super(props)
        this.formCard = props.formCard
    }
    
    render(){
        return(
            <div style={styles.div}>
                <Card >
                    <CardText>
                    {this.props.children}
                    </CardText>
                </Card>
            </div>
        );
    }
}