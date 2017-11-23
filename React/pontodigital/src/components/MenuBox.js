import React, { Component } from 'react';
import TopMenu from './TopMenu.js'
import SideMenu from './SideMenu.js'

class MenuBox extends Component{
    render(){
        return(
        //<!-- The drawer is always open in large screens. The header is always shown,
        //even in small screens. 
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
           <TopMenu />
           <SideMenu />
        </div>
        );
    }
}


export default MenuBox;
