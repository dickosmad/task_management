import React from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TaskPage = props => {
  const [cardForm, setCardForm] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const STYLES = { 
    background: 'rgba(196, 196, 196, 0.1)',
    borderRadius: '20px',
    padding: '2rem'
    
    }

  const formToggler = () => {
    setCardForm(!cardForm);
  };
  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };
   const resetForm = ()=>{
    setTitle("")
    setDescription("");
    setCardForm(false)
  }
  const onCreateTask = (e) =>{
    e.preventDefault();
    props.onCreateTask({
      title,
      description
    })
    resetForm()
  }
 
  const renderTaskList = () => {
    const { tasks } = props;
    console.log(props);
    return TASK_STATUSES.map((status, id) => {
      const taskStatus = tasks.filter(task => task.status === status);
      return (
        <div key={id} className='col-md-3 card m-2 p-0' style={STYLES}>
          <TaskList key={status} status={status} tasks={taskStatus} onStatusChange={props.onStatusChange} onRemoveTask={props.onRemoveTask} />
        </div>
      );
    });
  };

  return (
    <div className="container my-5">
      <div className="jumbotron p-3" style={STYLES}>
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-danger m-3" onClick={formToggler}>
              +
						</button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Task Manager
						</h2>
          </div>
        </div>
        {cardForm && (
          <form onSubmit={onCreateTask} >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={onChangeTitle}
                placeholder="task title"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control my-3"
                onChange={onChangeDescription}
                placeholder="task title"
              />
            </div>
            <button type="submit" className="btn btn-danger"  >
              Submit
						</button>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative my-5 "
        style={STYLES}
      >
        {renderTaskList()}
      </div>
    </div>
  );
};
export default TaskPage;
