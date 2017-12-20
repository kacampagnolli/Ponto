import React, { Component } from 'react';
import {Card, CardText,CardTitle} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

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
        width:'100%'
      },
      checkbox: {
        marginBottom: 16,
        width:30,
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
      block: {
          display:'flex',
    
      },
      block2: {
        marginTop: 10,
        width:'30%',
        display:'flex',
        justifyContent:'center'
      },
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
                <GridList
                    cols={1}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                >
                <GridTile>
                <div style={styles.block}>
          <div style={styles.block2}>
            Equipe
            </div>
          <div style={styles.block2}>
             Membro
        
            
          </div>
          <div style={styles.block2}>
            Responsável
        
            
          </div>
          </div>
          <div style={styles.block}>
          <div style={styles.block2}>
            Jaque
            </div>
          <div style={styles.block2}>
                <Checkbox
 
          style={styles.checkbox}
        />
            
          </div>
          <div style={styles.block2}>
        <Checkbox

          style={styles.checkbox}
        />
            
          </div>
          </div>
          <div style={styles.block}>
          <div style={styles.block2}>
            AB
            </div>
          <div style={styles.block2}>
                <Checkbox
         
          style={styles.checkbox}
        />
            
          </div>
          <div style={styles.block2}>
        <Checkbox

          style={styles.checkbox}
        />
            
          </div>
          </div>
        
 
                </GridTile>
                </GridList>
            </form>
        );
    };
};

const TeamCard = () =>{
    return(
        <div style={styles.div}>
            <Card style={styles.Card}>
                <CardText>
                    <CardTitle>
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
                    <FormCard />
                </CardText>
            </Card>
        </div>

);
};

export default TeamCard;