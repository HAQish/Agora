// component for login

import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // set initial state for input values
    this.state = {
      username: '',
      password: ''
    };

    //bind event handlers to component context
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  // update state to reflect changes to input fields
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // handlers for input actions
  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.clearVals();
  }
  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state);
    this.clearVals();
  }

  clearVals() {
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const formStyle = {
      float: 'right',
      margin: '5px'
    };
    const inputStyle={
      margin: '5px'
    };
    return (
      <form className="form-inline" style={formStyle}>
        <div className="form-group mb-2" style={inputStyle}>
          <label className="sr-only">Username</label>
          <input type="email" className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div className="form-group mx-sm-3 mb-2" style={inputStyle}>
          <label className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button type="button" className="btn btn-primary mb-2" style={inputStyle} onClick={this.handleLogin}>LOGIN!</button><span>OR</span>
        <button type="button" className="btn btn-primary mb-2" style={inputStyle} onClick={this.handleSignup}>SIGNUP!</button>
      </form>
    );
  }
};

export default Login;