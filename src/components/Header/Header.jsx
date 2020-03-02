import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {

  render() {
    let loginLink = "/login";

    if (localStorage.getItem("userID") !== null && typeof localStorage.getItem("userID") === "string") {
      loginLink = "/logout";
    }
  
    return (
      <header>
        <div className="header-box">
          <div className="header-navigation-left">
            <nav>
              <ul>
                <li><NavLink to="/" id="menu-home" exact>Home</NavLink></li>
                <li><NavLink to="/trees" id="menu-projects" exact>Apple trees</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="logo"></div>
          <div className="header-navigation-right">
            <nav>
              <ul>
                <li><NavLink to="/about" id="menu-about" exact>About</NavLink></li>
                <li><NavLink to={loginLink} id="menu-login" exact>{loginLink.slice(1, 2).toUpperCase() + loginLink.slice(2)}</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)