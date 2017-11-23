import React, { Component } from 'react';
import LinkMenu from './utils/LinkMenu.js'
class SideMenu extends Component{
    render(){
        return(
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Autbank</span>
                <nav class="mdl-navigation">
                    <LinkMenu hrefLink="" valueLink="Link" iconLink="person"/>
                    <LinkMenu hrefLink="" valueLink="Link" iconLink="settings"/>
                    <LinkMenu hrefLink="" valueLink="Link" iconLink="person"/>
                    <LinkMenu hrefLink="" valueLink="Link" iconLink="person"/>
                </nav>  
            </div>
        );
    }
}
export default SideMenu;