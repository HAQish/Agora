import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';
import Navbar from './components/navbar.jsx';
import AddProject from './components/addProject.jsx';
import Workspace from './components/workspace.jsx';
import Timeline from './components/timeline.jsx';
import FinanceView from './components/financeview.jsx';
import ResourceView from './components/resources.jsx';

import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      currentProject: {},
      isAuthenticated: false,
      username: ''
    };
  }

  setCurrentProject(project) {
    this.setState({currentProject: project})
    //.then(<Link to="/workspace" />);
  }

  componentDidMount() {
    console.log('Component mounting');
    this.getProjects();
  }

  getProjects() {
    let username = this.state.username;
    console.log(username);
    fetch('/projects', {
      method: 'POST',
      body: JSON.stringify({username: username}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then((projects) => projects.json())
    .then((projects) => this.setState({projects}))
    .then((projects) => this.setState({currentProject: this.state.projects[0]}));
  }

  handleLogin(creds) {
    // POST /login username and password then GET projects for that user
    // creds will be username/password from state of login component
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .catch(error => console.error('Error: ', error))
    .then(this.setState({username: creds.username}))
    //.then(response => response.json())
    //.then(response => this.setState({isAuthenticated: response}))
    .then(() => this.getProjects());
    console.log('Login: ', creds);
  }

  handleSignup(creds) {
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .catch(error => console.error('Error: ', error))
    .then(this.setState({username: creds.username}))
    .then(() => this.getProjects());
    //.then(res => res.json())
    //.then(this.setState({isAuthenticated: true}));
    console.log('Signup: ', creds);
  }

  handleLogout() {
    // fetch('/logout')
    // .then(console.log('Logged out successfully'))
    // .then(this.setState({username: ''}))
    // .catch(error => console.error('Error loggin out: ', error));
    this.setState({
      projects: [],
      currentProject: {},
      isAuthenticated: false,
      username: ''
    })
  }

  render () {
    const mainDivStyles = {
      padding: '50px'
    }

    return (
      <div className="container-fluid">
        <div>
          <Navbar login={this.handleLogin.bind(this)} signup={this.handleSignup.bind(this)} logout={this.handleLogout.bind(this)} />
        </div>
        <div className="row" style={mainDivStyles}>
          <Sidebar />
          <div className="col-sm-9">
          <Route exact path="/" render={(props) => (
              <ProjectList {...props} projects={this.state.projects} current={this.setCurrentProject.bind(this)}/>
            )}/>
          <Route path="/addProject" render={(props) => (
              <AddProject {...props} action={this.getProjects.bind(this)} username={this.state.username}/>
            )}/>
          <Route path="/allProjects" render={(props) => (
              <ProjectList {...props} projects={this.state.projects} current={this.setCurrentProject.bind(this)}/>
            )}/>
          <Route path="/workspace" render={(props)=>(
              <Workspace {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/timeline" render={(props) => (
              <Timeline {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/finance" render={(props) => (
              <FinanceView {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/resources" render={(props) => (
              <ResourceView {...props} project={this.state.currentProject}/>
            )}/>
          </div>
        </div>
      </div>
    )
  }


}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('app'));