import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskPage from './components/TaskPage'
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  return (
    <>
      <TaskPage tasks={props.tasks} />
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