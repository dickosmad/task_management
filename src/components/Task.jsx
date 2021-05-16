import React from 'react';


const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const Task = (props) => {
  const onStatusChange= (e)=>{
    props.onStatusChange(props.task.id , e.target.value)
  }
  const onRemoveTask=()=>{
    console.log(props.task.id)
    props.onRemoveTask(props.task.id);
    
  }
  return (
    <>
      <form onChange={onStatusChange} >
      <select defaultValue={props.task.status} >{
        TASK_STATUSES.map(status =>{
          return(
            <option value={status} key={status} > {status} </option>
          )
        })
      } </select>
      
      </form>
      <h2 className='card-title mt-3 text-uppercase px-2' >{props.task.title} </h2>
      <p className='card-text mb-3 text-muted font-weight-bold px-2' >{props.task.description} </p>
      <span onClick={()=> onRemoveTask(props.task.id)} style={{color:'red',fontSize:'25px',alignText:'left',cursor:'pointer'}} >X </span>
    </>
  )
}
export default Task;
