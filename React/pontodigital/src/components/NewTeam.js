import React, {Component} from 'react';
import {Card, CardText,CardTitle} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';

class FormCard extends Component {
    constructor(props){
        super(props);
        console.log("Aqui");
        console.log(props);
        this.handlePrev = this.handlePrev.bind(this);
        this.state = {value24: null};
      }
    
      handlePrev() {
        this.props.history.push('/ponto/configuracoes/equipes');
      }

      handleChangeTimePicker24 = (event, date) => {
        this.setState({value24: date});
      };
    


    render(){
        return(
            <form style={styles.formCard}>
                   <TextField floatingLabelText="Nome Equipe"
                   errorText=""
                   fullWidth={true}
                   type="text"
               />
               <TimePicker
               fullWidth={true}
               format="24hr"
               hintText="Hora Enrada"
               value={this.state.value24}
               onChange={this.handleChangeTimePicker24}
               minutesStep={5}
               style={{marginTop:20}}           
             />
             <TimePicker
               fullWidth={true}
             format="24hr"
             hintText="Hora Almoço"
             value={this.state.value24}
             onChange={this.handleChangeTimePicker24}
               minutesStep={5}
               style={{marginTop:20}}           
           />
               <TextField floatingLabelText="Qtd Dias Alteração"    
                   errorText=""
                   fullWidth={true}
                   type="text"
               />
                <div style={{marginTop: 24, marginBottom: 12, display:'flex', justifyContent:'space-between'}}>
          <FlatButton
            label="Voltar"
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label="Cadastrar"
            primary={true}
            onClick={this.handleNext}
          />
        </div>
            </form>
        );
    };
};


export default class NewEquipe extends Component
{   
    constructor(props){
        super(props);
        console.log(props);
    }
    render()
    {
        return(
            <div style={styles.div}>
            <Card style={styles.Card}>
                <CardText>
                    <FormCard history={this.props.history}/>
                </CardText>
            </Card>
        </div>
        );
    }


}

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
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        paddingTop:'2%',
        height: 200,
        overflowY: 'auto',
      },
      radioButton: {
        marginBottom: 16,
      },
      iconStyles: {
        paddingTop:40,
      },
      divCenter:{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          padding:'auto',
      },
      medium: {
        width: 72,
        height: 72,
        padding: 28,
      },
      mediumIcon: {
        width:36,
        height: 36,
      },
      checkbox: {
        marginBottom: 16,
      },
};