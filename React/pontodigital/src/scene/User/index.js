//React
import React from 'react';

//Components
import ImputText from '../../components/inputText';
import ComboBox from '../../components/comboBox';
import {styles} from './styles'
import Stepper from './userStepper';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Switch,Route,Router} from 'react-router-dom'

import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Create from 'material-ui/svg-icons/content/create';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import MenuBox from '../../components/MenuBox.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'


import Search from 'material-ui/svg-icons/action/search';
import Divider from 'material-ui/Divider';


class SearchUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 1};
    this.search = this.search.bind(this);
  }

  search(e){
   e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.search}>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'space-between', alignItems:'center'}}>
          <ImputText typeForm="text" labelForm="Usuário" />
          <ComboBox labelCombo="Categoria" valueCombo={this.state.value} onChangeCombo={this.handleChange} typeCombo="max"/>
          <ComboBox labelCombo="Equipe" valueCombo={this.state.value} onChangeCombo={this.handleChange} typeCombo="min"/>
          <ComboBox labelCombo="Satus" valueCombo={this.state.value} onChangeCombo={this.handleChange} typeCombo="min"/>
          <IconButton
            type="subimit"
          >
            <Search />
          </IconButton>
        </div>
      </form>
    );
  }
}


const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */

export default class UserBox extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return(
      <Router history={this.props.history}>
               {//style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
               }
               <div> 
                <Route exact path={"/ponto/configuracoes/usuarios"} component={User}/>
                <Route exact path={"/ponto/configuracoes/usuarios/usuario"} component={Stepper}/>
              </div>
        </Router>
    );
}
}

class User extends React.Component {


  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
    coments: [],
    open: false,
  };

  novo (e) {
    e.preventDefault();
    this.props.history.push('/ponto/configuracoes/usuarios/usuario');

  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Excluir"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (


      <div>
     
      <SearchUser />
      <Divider style={{marginTop:10,marginBottom:10}} />
      <Dialog
      title="Excluir"
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
      contentStyle={{minWidth:300,width:400}}
      >
      Você deseja excluir?.
     </Dialog>
    
      <div style={styles.divTable}>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
          
            <TableRow>
              <TableHeaderColumn tooltip="Nome">Nome</TableHeaderColumn>
              <TableHeaderColumn tooltip="Categoria">Categoria</TableHeaderColumn>
              <TableHeaderColumn tooltip="Equipe">Equipe</TableHeaderColumn>
              <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
              <TableHeaderColumn tooltip="action">
              <div style={{display:'flex',justifyContent:'center'}}>
              <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}
                    onClick={this.novo.bind(this)}
                >
                    <PersonAdd />
                </IconButton>
              </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>
                <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}
                >
                    <Create />
                </IconButton>
                <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}
                    onClick={this.handleOpen}
                >
                    <Clear />
                </IconButton>
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
       
        </div>
        </div>
    );
  }
}