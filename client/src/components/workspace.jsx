// component for workspace; renders general project info -- NOT FULLY implemented in current iteration of app

import React from 'react';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: {
        startDate: '',
        endDate: '',
        tasks: {
          dueDate: ''
        }
      },
      resources: {
        name: '',
        value: ''
      },
      financials: {
        name: '',
        value: ''
      }
    };
  }

  handleChange(e) {

  }

  render() {
    const buttonStyle = {
      float: 'right'
    };
    const boxStyle = {
      border: "1px solid #60b0f4",
      margin: "10px",
      borderRadius: "10px",
      textAlign: "left",
    };
    return(
      <div>
        <div className="names row">
          <h1 className="col-sm-6">Project Name:   {this.props.project.name}</h1>
          <h2 className="col-sm-6">Customer:   {this.props.project.customer}</h2>
        </div>
        <div className="projectInfo row">
          <h3>Description:   {this.props.project.description}</h3>
        </div>
        <div className="row">

          <div className="col-sm-4 timeline" style={boxStyle}>
            <form method="put" className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <legend>Start Date:</legend>
                    <input className="form-control" type="text" id="newProjectName" name="name" value={this.state.timeline.startDate} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                  <legend>End Date:</legend>
                    <input className="form-control" type="text" id="customerName" name="customer" value={this.state.timeline.endDate} onChange={this.handleChange}></input>
                </div>
              </fieldset>
              <div className="form-group">
                <button id="newProjectButton" style={buttonStyle} type="submit" onClick={this.handleSubmit} className="btn btn-primary"> Add Project </button>
              </div>
            </form>
          </div>

          <div className="col-sm-4 resources" style={boxStyle}>
            <form method="put" className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <legend>Resource Name:</legend>
                    <input className="form-control" type="text" id="newProjectName" name="name" value={this.state.resources.name} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                  <legend>Resource Value:</legend>
                    <input className="form-control" type="text" id="customerName" name="customer" value={this.state.resources.value} onChange={this.handleChange}></input>
                </div>
              </fieldset>
              <div className="form-group">
                <button id="newProjectButton" style={buttonStyle} type="submit" onClick={this.handleSubmit} className="btn btn-primary"> Add Project </button>
              </div>
            </form>
          </div>

          <div className="col-sm-4 financials" style={boxStyle}>
            <form method="put" className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <legend>Financial Type:</legend>
                    <input className="form-control" type="text" id="newProjectName" name="name" value={this.state.financials.name} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                  <legend>Value:</legend>
                    <input className="form-control" type="text" id="customerName" name="customer" value={this.state.financials.value} onChange={this.handleChange}></input>
                </div>
              </fieldset>
              <div className="form-group">
                <button id="newProjectButton" style={buttonStyle} type="submit" onClick={this.handleSubmit} className="btn btn-primary"> Add Project </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }
}

export default Workspace;