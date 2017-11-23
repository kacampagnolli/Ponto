import React, { Component } from 'react';
 
//Parametros href, value

class LinkMenu extends Component{
    render(){
        return(
        <a class="mdl-navigation__link" href={this.props.hrefLink}>
             <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">{this.props.iconLink}</i>
                    {this.props.valueLink}
            </span>
        </a>
        );
    }
}

export default LinkMenu;