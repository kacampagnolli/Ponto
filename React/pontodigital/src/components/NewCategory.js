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

class FormCard extends Component {
    constructor(props){
        super(props);
        console.log("Aqui");
        console.log(props);
        this.handlePrev = this.handlePrev.bind(this);
      }
    
      handlePrev() {
        this.props.history.push('/ponto/configuracoes/categorias');
      }


    render(){
        return(
            <form style={styles.formCard}>
                <GridList
                    cols={1}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                >
                <GridTile>
                <Checkbox
                label="Label on the left"
                labelPosition="left"
                style={styles.checkbox}
              />
              <Checkbox
          label="Label on the left"
          labelPosition="left"
          style={styles.checkbox}
        />
 
                </GridTile>
                </GridList>
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


export default class NewCategory extends Component
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
                    <CardTitle>
                        <TextField floatingLabelText="Categoria"
                                errorText=""
                                type="text"
                            />
                        <div style={styles.divCenter}>
                            <TextField floatingLabelText="Procurar"
                                errorText=""
                                type="text"
                            />
                            <IconButton
                                iconStyle={styles.mediumIcon}
                                style={styles.medium}
                            >
                                <Search />
                            </IconButton>
                        </div>
                    </CardTitle>
                    <Divider />
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