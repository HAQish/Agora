// navbar component containing app name and login/signup functionality

import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';

var Navbar = (props) => {
  const logoutStyle={
    float: 'right',
    margin: '10px'
  };
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/home">Agora</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><Login login={props.login} signup={props.signup} /></li>
          <li style={logoutStyle}><button type="button" className="btn btn-secondary mb-2" onClick={props.logout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;