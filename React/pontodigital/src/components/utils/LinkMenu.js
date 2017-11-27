import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//Parametros href, value

class LinkMenu extends Component{
    render(){
        return(
        <Link className="mdl-navigation__link" to={this.props.hrefLink}>
             <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">{this.props.iconLink}</i>
                    {this.props.valueLink}
            </span>
        </Link>
        );
    }
}

export default LinkMenu;