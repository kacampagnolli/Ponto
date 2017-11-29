import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';




class  MenuBox extends Component{

    constructor(props) {
        super(props);
      }
     

      render(){
        
        const styles={
            AppBar: {
                display: 'flex',
                width: this.props.open?'81%':'100%',
                margin: this.props.open?'0 0 0 253px':'0 0 0 0' 
                
          },
            drawerShow:{

          }
        }
        return(
            <div>
            <AppBar 
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.props.updateOpenTrue}
              style={styles.AppBar}
              showMenuIconButton={!this.props.open}/>
            
            <Drawer open={this.props.open}
            />

            </div>
        );
    }
}

export default MenuBox;