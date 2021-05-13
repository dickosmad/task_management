import React from 'react';
import Task from './Task'

const TaskList = (props) => {
  console.log(props.tasks)
  return (
    <div>
    <Task/>
      {
        props.tasks && props.tasks.map(task => {
          <Task key={task.id} task ={task} />
        })
      }
    </div>
  )
}
export default TaskList
