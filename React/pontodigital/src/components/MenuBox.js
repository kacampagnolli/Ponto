import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import ActionExitToAppIcon  from 'material-ui/svg-icons/action/exit-to-app';
import TodayIcon  from 'material-ui/svg-icons/action/today';
import DescriptionIcon  from 'material-ui/svg-icons/action/description';
import SettingsIcon  from 'material-ui/svg-icons/action/settings';
import AlertErrorOutLineIcon  from 'material-ui/svg-icons/alert/error-outline';
import AlertWarningIcon  from 'material-ui/svg-icons/alert/warning';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import GroupIcon from 'material-ui/svg-icons/social/group';
import FormatListBulletedIcon from 'material-ui/svg-icons/editor/format-list-bulleted';
import NotificationsActiveIcon from 'material-ui/svg-icons/social/notifications-active';
import KeyBoardArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyBoardArrowUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Equalizer from 'material-ui/svg-icons/av/equalizer'
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import PropTypes from 'prop-types';
import logo from 'statics/img/logo_autbank.jpg';
import TextField from 'material-ui/TextField';
import Badge from 'material-ui/Badge';
import {black, redA700, white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link,Redirect,} from 'react-router-dom'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

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
    margin: 'auto'
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
    height : 300
  }
  
}

class  MenuBox extends Component{

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
        this.state = {haveNotification : true, drawerOpen : false, popOver : false}
      }
     logOut(){
        this.props.history.push('/')
     }
     updateDrawerOpenStatus(){
       this.setState({drawerOpen : !this.state.drawerOpen})
     }

     clickPopOverOpen = (event) => {
      event.preventDefault();
  
      this.setState({
        popOver: true,
        anchorEl: event.currentTarget,
      });
      console.log(this.state.anchorEl)
    };
  
    clickPopOverClose = () => {
      this.setState({
        popOver: false,
      });
    };

      render(){

        const styless={
            AppBar: {
                display: 'flex',
                width: 'auto',
                margin: this.props.openMenu?'0 0 0 253px':'0 0 0 0',
                paddingLeft: 5
          },
          AppBarOpen: {
            display: 'flex',
            width: 'auto',
            margin: this.props.openMenu?'0 0 0 253px':'0 0 0 0',
      },
        }

        let NotificationsType = null;
        if (this.state.haveNotification) {
            NotificationsType = <NotificationsActiveIcon color={redA700}  onClick={this.clickPopOverOpen}/>;
        } else {
            NotificationsType = <NotificationsIcon color={black} />;
        }

        return(
            <div>
            <AppBar 
            
                 title={ <Badge
                    badgeContent={4}
                    badgeStyle={this.state.haveNotification ? styles.BadgeStyleActive : styles.BadgeStyle  }
                    style={styles.BadgeNotification}
                  >
                  <IconButton iconStyle={styles.IconButtonNotification}>
                        {NotificationsType }
                    </IconButton>
                        <Popover 
                            style={styles.PopOver}
                            open={this.state.popOver}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            onRequestClose={this.clickPopOverClose}
                          >
                            <Menu>
                              <MenuItem primaryText="Refresh" leftIcon={
                                <AlertErrorOutLineIcon/>
                              }
                              rightIcon={<CheckIcon/>}/>
                              <MenuItem primaryText="Help &amp; feedback"leftIcon={
                                <AlertErrorOutLineIcon/>
                              } rightIcon={<CheckIcon/>}/>
                              <MenuItem primaryText="Settings"leftIcon={
                                <AlertErrorOutLineIcon/>
                              } rightIcon={<CheckIcon/>}/>
                              <Divider />
                              <MenuItem primaryText="Sign out" leftIcon={
                                <AlertWarningIcon/>
                              } rightIcon={<CheckIcon/>}/>
                              <MenuItem primaryText="Sign out" leftIcon={
                                <AlertWarningIcon/>
                              } rightIcon={<CheckIcon/>}/>
                              <MenuItem primaryText="Sign out" leftIcon={
                                <AlertWarningIcon/>
                              } rightIcon={<CheckIcon/>}/>
                            </Menu>
                          </Popover>
                  </Badge>}
                showMenuIconButton={!this.props.openMenu}
                style={this.props.openMenu? styless.AppBar : styless.AppBarOpen}
                
                onLeftIconButtonTouchTap={this.updateDrawerOpenStatus.bind(this)}
                
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
            <Drawer open={this.props.openMenu?true:this.state.drawerOpen}
            docked={this.props.openMenu}
            onRequestChange={this.updateDrawerOpenStatus.bind(this)}>
            <MenuListSelectable />
            </Drawer>

            </div>
        );
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
      this.state = {itemConfiguracoesOpen : false}
    }
    changeItemConfiguracoesOpen(){
      this.setState( {itemConfiguracoesOpen : !this.state.itemConfiguracoesOpen});
      }
    render(){
      return(
  <SelectableList defaultValue={1}>
        <Subheader style={styles.Subheader}>
            <img src={logo}  alt="Logo"/>
        </Subheader>
      <ListItem
        value={1}
        leftIcon={<TodayIcon/>}
        primaryText="Calendario"
        containerElement={<Link to='/ponto'/>}
      />
      <ListItem
        value={2}
        primaryText="Resumo"
        leftIcon={<DescriptionIcon/>}
        containerElement={<Link to='/ponto'/>}
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
        onClick={this.changeItemConfiguracoesOpen.bind(this)}
        open={this.state.itemConfiguracoesOpen}
        isKeyboardFocused={true}
        rightIcon={
          this.state.itemConfiguracoesOpen? 
           <KeyBoardArrowUpIcon onClick={this.changeItemConfiguracoesOpen.bind(this)}/>
          :<KeyBoardArrowDownIcon onClick={this.changeItemConfiguracoesOpen.bind(this)}/>
        }
        nestedItems={[
            <ListItem
              value={4}
              leftIcon={<GroupIcon/>}
              primaryText="Usuários"
              containerElement={<Link to='/ponto/configuracoes/usuarios'/>}
            />,
            <ListItem
            value={5}
            leftIcon={<FormatListBulletedIcon/>}
            primaryText="Categorias"
            containerElement={<Link to='/ponto/configuracoes/categorias'/>}
          />,
          ]}
      />
    </SelectableList>
      );
    }
  }

export default MenuBox;
