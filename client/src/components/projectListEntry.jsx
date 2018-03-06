// component for a single project in list

import React from 'react';

class ProjectListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projectStyle = {
      border: "1px solid #60b0f4",
      margin: "10px",
      borderRadius: "10px",
      textAlign: "left"
    };
    const headingStyle = {
      textAlign: "right"
    };
    return (
      <div className="col-md-5" style={projectStyle}>
        <div className="row">
          <h4 className="col-xs-6" onClick={ () => this.props.current(this.props.project) }>
            NAME: {this.props.project.name}
          </h4>
          <h4 style={headingStyle} className="col-xs-6">
            CUSTOMER: {this.props.project.customer}
          </h4>
        </div>
        <h4>Description:
        </h4>
        <p>
          {this.props.project.customer}
        </p>
      </div>
    )
  }
}

export default ProjectListEntry;