import React, { Component } from 'react';
import infoIcon from '../images/info.svg';
import closeIcon from '../images/close.svg';
import logoSmall from '../images/logo-s.svg';

class Header extends Component {
  render(){
    return(
      <header>
        <div id="logo" className="navbar-header">
          <a href="#about" id="nav-icon3" className="navbar-toggle">
            <img className="pageLogo Sym" src={infoIcon} width="100%" alt="ALTR Labs Info" />
            <img className="closeBtn" src={closeIcon} width="100%" alt="Close Button" />
          </a>

          <div className="altr-logo col-xs-12 hide textAlignCenter">
            <div className="altr-logo-small col-xs-4">
              <img src={logoSmall} width="100%" alt="ALTR LABS Logo" />
            </div>
          </div>

          <a className="navbar-brand navbar-toggle">
            NEW YORK
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
