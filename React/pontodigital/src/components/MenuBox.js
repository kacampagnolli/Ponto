import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import ActionExitToAppIcon  from 'material-ui/svg-icons/action/exit-to-app';
import TodayIcon  from 'material-ui/svg-icons/action/today';
import CodeIcon  from 'material-ui/svg-icons/action/code';
import DescriptionIcon  from 'material-ui/svg-icons/action/description';
import SettingsIcon  from 'material-ui/svg-icons/action/settings';
import AlertErrorOutLineIcon  from 'material-ui/svg-icons/alert/error-outline';
import AlertWarningIcon  from 'material-ui/svg-icons/alert/warning';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import PersonIcon from 'material-ui/svg-icons/social/person';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import GroupIcon from 'material-ui/svg-icons/social/group';
import FormatListBulletedIcon from 'material-ui/svg-icons/editor/format-list-bulleted';
import NotificationsActiveIcon from 'material-ui/svg-icons/social/notifications-active';
import KeyBoardArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyBoardArrowUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import AccessTimeIcon  from 'material-ui/svg-icons/device/access-time';
import Equalizer from 'material-ui/svg-icons/av/equalizer'
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import PropTypes from 'prop-types';
import Logo from 'statics/img/logo_autbank.jpg';
import Circulo from 'statics/img/circulo.png'
import Hexagon from 'statics/img/hexagon.png'
import TextField from 'material-ui/TextField';
import Badge from 'material-ui/Badge';
import {black, redA700, white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link,Redirect,} from 'react-router-dom'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import {Switch,Route,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import CreateIcon from 'material-ui/svg-icons/content/create';

const persons = [
  'Leonardo', 'Leo', 'Kaue',
];


const styles={  
  ActionExitToApp: {
    width: 40,
    height: 40,
    
  },
  IconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0'
  
  }, 
  Subheader : {
    cursor: 'pointer',
    backgroundColor: '#3F51B5',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingTop: '5%',
    paddingBottom: '5%',
    justifyContent : 'center',
  },
  BadgeNotification : {
    padding: '0 0 0 0',
    margin: 'auto auto auto 0'
  }, 
  DivTitleAppBar : {
    display : 'flex',
    alignItems : 'center',
    width : 100,
    height: '100%'
  },
  BadgeStyleActive : {
    top: 0, 
    right: -3, 
    width:15, 
    height: 15, 
    top: 3,  
    backgroundColor:white,
    color: '#3F51B5'
  },
  BadgeStyle : {
    display: 'none'
  },
  IconButtonNotification : {
    width: 30,
     height: 30
    },
  PopOver : {
    width : 300,
    height : 300,
    overflow : 'hidden'
  },
  MenuItemNotification : {
    fontSize : 13, 
    maxWidth: 300,
    whiteSpace : 'normal',
    marginBottom:  10
    
  },
  NotificationParagraph : {
    lineHeight : '15px',
    paddingLeft : 30,
    paddingRight: 30,

  },
  MenuListPopOver : {
    paddingLeft : 0,
    paddingTop: 5
  },
  CheckIconPopOver : {
    width:'27px',
    height : '27px', 
    marginBottom:  0, 
    marginTop:  'auto',
    marginRight:  5, 
    right : 0
  },
  AlertErrorOutLineIconPopOver : {
    width: 22,
    height : 22, 
    marginTop:  0, 
    marginLeft: 5,  
    left : 0
  },
  AppBar: {
    display: 'flex',
    width: 'auto',
    margin: '0 0 0 0',
  },
  AppBarOpen: {
  display: 'flex',
  width: 'auto',
  margin: '0 0 0 253px',
  paddingLeft: 5
  },
  AutoComplete : {
    marginLeft: 50,
    width : 350
  },
  ContainerStyleDrawer : {
    overflow: 'unset' 
  }
}

export default  class  MenuBox extends Component{

    constructor(props) {
        super(props);
        this.state = { drawerOpen : false}
        this.updateDrawerOpenStatus = this.updateDrawerOpenStatus.bind(this)
      }
     
     updateDrawerOpenStatus(){
       this.setState({drawerOpen : !this.state.drawerOpen})
     }

    render(){
      return(
          <div>
          <TopMenu {...this.state} {...this.props} updateDrawerOpenStatus={this.updateDrawerOpenStatus} />
          <SideMenu {...this.state} {...this.props} updateDrawerOpenStatus={this.updateDrawerOpenStatus}/>

          </div>
      );
    }
}

/********** Start Top Menu **********/
class TopMenu extends Component{

    constructor(props){
      super(props)
      this.logOut = this.logOut.bind(this)
      this.state = {haveNotification : true, popOver : false, }
    }
    clickPopOverClose = () => {
      this.setState({
        popOver: false,
      });
    }

    clickPopOverOpen = (event) => {
      event.preventDefault();
  
      this.setState({
        popOver: true,
        anchorEl: event.currentTarget,
      });
    }

    logOut(){
      this.props.history.push('/')
   }

    render(){
      let NotificationsType = null;
      if (this.state.haveNotification) {
          NotificationsType = <NotificationsActiveIcon color={redA700}  onClick={this.clickPopOverOpen}/>;
      } else {
          NotificationsType = <NotificationsIcon color={black} />;
      }

      return (
      <AppBar 
            title={
            <div style={styles.DivTitleAppBar}>
              <Badge
                badgeContent={4}
                badgeStyle={this.state.haveNotification ? styles.BadgeStyleActive : styles.BadgeStyle  }
                style={styles.BadgeNotification}>
                <IconButton iconStyle={styles.IconButtonNotification}>
                    {NotificationsType }
                </IconButton>

                <Popover 
                  style={styles.PopOver}
                  open={this.state.popOver}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  onRequestClose={this.clickPopOverClose}>
                  <Menu menuItemStyle={styles.MenuItemNotification}
                    listStyle={styles.MenuListPopOver}
                    autoWidth={false}>
                  <MenuItem primaryText={"Kaue chegou atrasado hoje ! Kaue chegou atrasado hoje ! Kaue chegou atrasado hoje Kaue chegou atrasado hoje Kaue chegou atrasado hoje Kaue chegou atrasado hoje Kaue chegou atrasado hojeKaue chegou atrasado hojeKaue chegou atrasado hoje"} 
                    innerDivStyle={styles.NotificationParagraph}
                    leftIcon={
                      <AlertErrorOutLineIcon style={styles.AlertErrorOutLineIconPopOver} />
                    }
                    /* TODO colcaor Hover */
                    rightIcon={<CheckIcon style={styles.CheckIconPopOver} />}/>
                    
                    <MenuItem primaryText="Help &amp; feedback"
                    innerDivStyle={styles.NotificationParagraph}
                    leftIcon={
                      <AlertErrorOutLineIcon  style={styles.AlertErrorOutLineIconPopOver}/>
                    } 
                    rightIcon={<CheckIcon style={styles.CheckIconPopOver}/>}/>
                    <Divider />

                    <MenuItem primaryText="Help &amp; feedback"
                    innerDivStyle={styles.NotificationParagraph}
                    leftIcon={
                      <AlertWarningIcon  style={styles.AlertErrorOutLineIconPopOver}/>
                    } 
                    rightIcon={<CheckIcon style={styles.CheckIconPopOver}/>}/>
                    <MenuItem primaryText="Help &amp; feedback"
                    innerDivStyle={styles.NotificationParagraph}
                    leftIcon={
                      <AlertWarningIcon  style={styles.AlertErrorOutLineIconPopOver}/>
                    } 
                    rightIcon={<CheckIcon style={styles.CheckIconPopOver}/>}/>
                    <MenuItem primaryText="Help &amp; feedback"
                    innerDivStyle={styles.NotificationParagraph}
                    leftIcon={
                      <AlertWarningIcon  style={styles.AlertErrorOutLineIconPopOver}/>
                    } 
                    rightIcon={<CheckIcon style={styles.CheckIconPopOver}/>}/>
                  </Menu>
                </Popover>
              </Badge>
              <div>
                 {/* TODO arrumar linha */}
                  <AutoComplete
                  style={styles.AutoComplete}
                  fullWidth={true}
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={persons}
                  maxSearchResults={5}
                  />
              </div>
            </div>}
          showMenuIconButton={!this.props.openMenu}

          
          style={this.props.openMenu? styles.AppBarOpen :  styles.AppBar}
          
          onLeftIconButtonTouchTap={this.props.updateDrawerOpenStatus}
          
          onRightIconButtonTouchTap={this.logOut}             
          iconElementRight={
            /* TODO Colocar efeito no click */
              <IconButton
                  iconStyle={styles.ActionExitToApp}
                  style={styles.IconButton}
                  tooltip="Sair"
                  tooltipPosition="bottom-left">
                  <ActionExitToAppIcon />
              </IconButton>}
          />
      )
  }
}


/********** Start Side Menu **********/
class SideMenu extends Component{
  constructor(props){
    super(props)
    this.state = {itemConfiguracoesOpen : false}
    this.changeItemConfiguracoesOpen = this.changeItemConfiguracoesOpen.bind(this)
  }
  changeItemConfiguracoesOpen(){

    {/* TODO verificar */}
    //  this.setState((prevState, props) => ({
    //    itemConfiguracoesOpen: !prevState.itemConfiguracoesOpen
    //  }));
    
    this.setState( {itemConfiguracoesOpen : !this.state.itemConfiguracoesOpen});
    }

  render(){
    return(
      <div>
      <Drawer open={this.props.openMenu?true:this.props.drawerOpen}
      docked={this.props.openMenu}
      onRequestChange={this.props.updateDrawerOpenStatus}
      containerStyle={styles.ContainerStyleDrawer}
      >
      
      <MenuListSelectable  history={this.props.history} {...this.state} changeItemConfiguracoesOpen={this.changeItemConfiguracoesOpen} />
      </Drawer>
      <ActionDivMenu {...this.props} {...this.state}/>
      </div>
    )
  }
}


let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
         
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class  MenuListSelectable extends Component{
    constructor(props){
      super(props)
      
    }
    
    logoClick(){
      this.props.history.push('/ponto')
    }
    render(){
      return(
  <SelectableList defaultValue={1}>
        <Subheader style={styles.Subheader}>
            <img src={Logo} onClick={this.logoClick.bind(this)} alt="Logo"/>
        </Subheader>
      <ListItem
        value={1}
        leftIcon={<TodayIcon/>}
        primaryText="Calendario"
        containerElement={<Link to='/ponto/calendario'/>}
      />
      <ListItem
        value={2}
        primaryText="Resumo"
        leftIcon={<DescriptionIcon/>}
        containerElement={<Link to='/ponto/resumo'/>}
      />
     
      <ListItem
        value={3}
        leftIcon={<Equalizer/>}
        primaryText="Resumo Geral"
        containerElement={<Link to='/ponto'/>}
      />
      <ListItem
        primaryText="Configurações"
        leftIcon={<SettingsIcon/>}
        onClick={this.props.changeItemConfiguracoesOpen}
        open={this.props.itemConfiguracoesOpen}
        isKeyboardFocused={true}
        rightIcon={
          this.props.itemConfiguracoesOpen? 
           <KeyBoardArrowUpIcon onClick={this.props.changeItemConfiguracoesOpen}/>
          :<KeyBoardArrowDownIcon onClick={this.props.changeItemConfiguracoesOpen}/>
        }
        nestedItems={[
            <ListItem
              value={4}
              leftIcon={<PersonIcon/>}
              primaryText="Usuários"
              containerElement={<Link to='/ponto/configuracoes/usuarios'/>}
            />,
            <ListItem
            value={5}
            leftIcon={<FormatListBulletedIcon/>}
            primaryText="Categorias"
            containerElement={<Link to='/ponto/configuracoes/categorias'/>}
          />,
          <ListItem
          value={6}
          leftIcon={<GroupIcon/>}
          primaryText="Equipes"
          containerElement={<Link to='/ponto/configuracoes/equipes'/>}
        />,
          ]}
      />
    </SelectableList>
      );
    }
  }

  class  ActionDivMenu extends Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <Router history={this.props.history}>
        <div>
          <Route exact path={"/ponto/calendario"} render={(props) => ( <CalendarioActionMenu {...this.props}/> )} />
          <Route exact path={"/ponto/resumo"} component={ResumoActionMenu}/>
        </div>
        </Router> 
      )
    }
}

class  ActionMenuBase extends Component{
  constructor(props){
    super(props)
    this.state ={DrawerActionMenuBase : true}
  }
  openCloseDrawerActionMenuBase(){
    this.setState((prevState) => ({
      DrawerActionMenuBase: !prevState.DrawerActionMenuBase
    }));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.openMenu == false && this.props.openMenu == true){
      this.setState({DrawerActionMenuBase : false})
    }
    if(nextProps.openMenu == true && this.props.openMenu == false){
      this.setState({DrawerActionMenuBase : true})
    }

    if(nextProps.itemConfiguracoesOpen == true && this.props.itemConfiguracoesOpen == false){
      this.setState({DrawerActionMenuBase : false})
    }
  }
  render(){
    return(
      <div >
        {/* Arrumar imgs*/}
        <Drawer open={this.state.DrawerActionMenuBase}
        containerStyle={{width: 370 , height : 320, 
          boxShadow: 'unset', top:'auto', 
          bottom: 0,backgroundColor :'rgba(255, 255, 255, 0)',
          backgroundImage: `url(${Hexagon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '450px 320px',
          backgroundPosition: '-82px 30px'
        }}
        style={{width:'100%' , }}>
          <img style={{ position: 'fixed', width: 440, height: 420, marginLeft : -70, marginTop : -10 }}src={Circulo}  alt="Circulo"/>
          <IconButton style={{position : 'fixed', bottom: 106, right: 8}} onClick={this.openCloseDrawerActionMenuBase.bind(this)}>
          <CodeIcon />
        </IconButton>
        <div style={{width: 263, marginLeft: 12, height: 220, borderStyle: 'solid', borderWidth: 5, bottom : 16, position: 'fixed' }}>
          {this.props.children}
        </div>
        </Drawer>
      </div>
    )
  }
}

class  CalendarioActionMenu extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ActionMenuBase {...this.props}>
      <AccessTimeIcon/>
      <h5>Hoje, Sexta-Feira 03/03 de 2017</h5>
      <TextField style={{width : 20}}
      defaultValue="12"/>
      <h5>:</h5>
      <TextField style={{width : 20}}
      defaultValue="35"/>
      
      <RaisedButton label="Entrar"
                    type="submit" 
                    backgroundColor="#3F51B5"
                    labelColor="#FFFFFF"
                />

      <CreateIcon/>
      </ActionMenuBase>
      
    )
  }
}
class  ResumoActionMenu extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ActionMenuBase>
      <h1>bb</h1>
      </ActionMenuBase>
    )
  }
}
