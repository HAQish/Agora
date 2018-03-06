// component for list of projects

import React from 'react';
import ProjectListEntry from './projectListEntry.jsx';

const ProjectList = (props) => (

  // map each project in project list to a list entry (index in array is used as key)
  <div>
    <h2>PROJECTS</h2>
    {props.projects.map(function(project, index) {
      return <ProjectListEntry project={project} key={index} current={props.current} />
    })}
  </div>
)

export default ProjectList;