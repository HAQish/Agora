// splash page component --- UNUSED in current iteration of app

import React from 'react';
import Navbar from './navbar.jsx';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin () {

  }

  handleSignup () {

  }

  render() {
    return (
      <div>
        This is the splash page!
      </div>
    );
  }
}

// <Navbar username={this.state.username} password={this.state.password} onLogin={this.handleLogin} onSignup={this.handleSignup} />

export default SplashPage;