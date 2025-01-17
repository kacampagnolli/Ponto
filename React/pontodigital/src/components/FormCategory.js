import React, {Component} from 'react';
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
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Create from 'material-ui/svg-icons/content/create';
import CategoryAdd from 'material-ui/svg-icons/av/playlist-add';
import NewCategory from './NewCategory.js';
import MenuBox from './MenuBox.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Search from 'material-ui/svg-icons/action/search';
import Divider from 'material-ui/Divider';


class SearchCategory extends Component
{

  constructor(props){
    super(props);
    this.state = {value: 1};
  }

  search(e){
    e.preventDefault();

  }

  render()
  {
    return(
     
      <form onSubmit={this.search.bind(this)}>
       <div>
      
          <TextField floatingLabelText="Categoria"
                    errorText=""
                    type="text"
          />
        <IconButton
            iconStyle={styles.mediumIcon}
            style={styles.medium}
            type="subimit"
        >
            <Search />
        </IconButton>
        </div>
      </form>
    );
  }
}

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  divTable:{
    maxWidth:800,
  },
  customWidth: {
    width: 170
  },
  customWidth2: {
    width: 95
  },
};

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

export default class FormCategory extends Component{
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return(
        <Router history={this.props.history}>
               <div>
                <Route exact path={"/ponto/configuracoes/categorias"} component={Category}/>
                <Route exact path={"/ponto/configuracoes/categorias/categoria"} component={NewCategory}/>
              </div>
        </Router>
    );
}
}

class Category extends Component {

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

  componentWillMount(){
    console.log("Aqui");
    fetch('http://localhost:3000/comments', {
      method: 'get'
    }).then((response) => response.json())  
      .then((responseJson) => {
        this.setState({coments:responseJson});
        const comentario = this.state.coments;
        comentario.map((coment)=>{
          console.log(coment.id);
        });
    }).catch(function(err) {
      // Error :(
    });



  }

  novo (e) {
    e.preventDefault();
    this.props.history.push('/ponto/configuracoes/categorias/categoria');

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
     
      <SearchCategory />
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
              <TableHeaderColumn tooltip="Categoria">Categoria</TableHeaderColumn>
              <TableHeaderColumn tooltip="Equipe">Ações</TableHeaderColumn>
              <TableHeaderColumn tooltip="action">
              <div style={{display:'flex',justifyContent:'center'}}>
              <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}
                    onClick={this.novo.bind(this)}
                >
                    <CategoryAdd />
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
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn style={{display:'flex',justifyContent:'center'}}>
                
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