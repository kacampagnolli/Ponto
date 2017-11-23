import React, { Component } from 'react';
import img from 'statics/logo_autbank.jpg';

class Logo extends Component {
    render() {
      return (<div>
        <img src={img} alt="AutBank" height="100" width="300"/>
        </div>
    );
}
}
export default Logo;
