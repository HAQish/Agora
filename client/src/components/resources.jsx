// component for informatin on resources used/needed for project

import React from 'react';

var ResourceView = (props) => {
  let resources = props.project.resources;
  return(
  <div>
    <h2>Resources Used:</h2>
    {resources.map(function(resource) {
      return (
               <div>
                 <p>JSON.stringify(resource)</p>
               </div>
      )
    })}
  </div>
)}

export default ResourceView;