import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskPage from './components/TaskPage'
import { connect } from 'react-redux'
import  {editTask , createTask , removeTask } from './actions'
import './App.css';

function App(props) {
  
const onStatusChange = (id ,status) =>{
  props.dispatch(editTask(id ,{status}))
}
const onCreateTask = ({title,description}) =>{
  props.dispatch(createTask({title,description}))
}
const onRemoveTask = (id)=>{
  props.dispatch(removeTask(id) )
}

  return (
    <>
      <TaskPage tasks={props.tasks} 
      onStatusChange={onStatusChange}
       onCreateTask={onCreateTask}
       onRemoveTask={onRemoveTask}
        />
    </>
  );
}

const mapStateToProps = state =>{
  console.log(state)
  return{
    tasks:state.tasks
  }

}

export default connect(mapStateToProps)(App);