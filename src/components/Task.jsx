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
  const selectStyle = {
    border: '2px solid darkgrey',
    borderRadius: '8px',
    margin: '7px 0 3px 4px'
  }
  const taskStyles = { 
    border:'2px solid rgb(235, 236, 180) '
    ,margin: '1rem 5px',
    borderRadius: '20px'
    }
  const deleteButtonStyle = {
    cursor:'pointer', 
    textAlign:'right',
     margin:'10px' 
  }
  return (
    <>
      <form onChange={onStatusChange} >
      <select defaultValue={props.task.status} style={selectStyle} >{
        TASK_STATUSES.map(status =>{
          return(
            <option value={status} key={status}  > {status} </option>
          )
        })
      } </select>
      
      </form>
      <div>
        <div style={taskStyles} >
          <h5 className='card-title mt-3 text-uppercase px-2' >{props.task.title} </h5>
          <p className='card-text mb-3 text-muted font-weight-bold px-2' >{props.task.description} </p>
          <div style={deleteButtonStyle}>
            <button className='btn btn-danger' onClick={()=> onRemoveTask(props.task.id)}  >🗑  </button>
          </div>
          
      </div>
      
      </div>
    </>
  )
}
export default Task;
