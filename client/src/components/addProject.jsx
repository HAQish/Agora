// form view to handle project submissions

import React from 'react';

class AddProject extends React.Component{
  constructor(props) {
    super(props);

    // sets state with information required for adding a project
    this.state = {
      name: '',
      customer: '',
      description: '',
    };

    // bind event handlers to component context
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.action = props.action;
  }


  // add an object to the database
  addProject(object) {
      var url = '/project';
      var data = object;
      var username = this.props.username;
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({data: data, username: username}),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })//.then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(this.action());
  }


  // set state values to reflect form input
  handleChange (e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  // when button is clicked, send post request and clear form values
  handleSubmit(event) {
    event.preventDefault();
    this.addProject(this.state);
    this.clearFormVals();
  }

  clearFormVals() {
    this.setState({
      name: '',
      customer: '',
      description: '',
    });
  }


  render() {
    const buttonStyle = {
      float: 'right'
    };
    return (
      <div>
        <form method="post" className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <legend>New Project Name:</legend>
                <input className="form-control" type="text" id="newProjectName" name="name" value={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <legend>Customer:</legend>
                <input className="form-control" type="text" id="customerName" name="customer" value={this.state.customer} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <legend>Project Description:</legend>
                <input className="form-control" type="text" id="projectDescription" name="description" value={this.state.description} onChange={this.handleChange}></input>
            </div>
          </fieldset>
          <div className="form-group">
            <button id="newProjectButton" style={buttonStyle} type="submit" onClick={this.handleSubmit} className="btn btn-primary"> Add Project </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProject;