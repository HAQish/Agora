// component for view of timeline info

import React from 'react';

var Timeline = (props) => (
  // map each task in this project's timeline to an individual element to display task info
  <div>
    <h2>Start Date: {props.project.timeline.startDate}</h2>
    <h2>End Date: {props.project.timeline.endDate}</h2>
    {props.project.timeline.tasks.map(function(task) {
      return (<div>
                <p>To Do:  {task.name}</p>
                <p>Due:  {task.dueDate}</p>
              </div>
      )
    })}
  </div>
)

export default Timeline;