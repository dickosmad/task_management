import React from 'react';

const Task = (props) => {
  console.log('props task', props.task.title)
  return (
    <div>
    Hello
      <h2>{props.task.title} </h2>
      <p>{props.task.description} </p>
    </div>
  )
}
export default Task
