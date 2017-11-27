import React, { Component } from 'react';
import LinkMenu from './utils/LinkMenu.js'
class SideMenu extends Component{
    render(){
        return(
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Autbank</span>
                <nav className="mdl-navigation">
                <LinkMenu hrefLink="" valueLink="calendário" iconLink="person"/>
                <LinkMenu hrefLink="/ponto/configuracoes/cadastrousuario" valueLink="Resumos" iconLink="person"/>
                <LinkMenu hrefLink="/ponto/configuracoes/categorias" valueLink="Configurações" iconLink="settings"/>
                </nav>  
            </div>
        );
    }
}
export default SideMenu;