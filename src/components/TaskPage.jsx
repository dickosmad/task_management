import React from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TaskPage = props => {
	const [cardForm, setCardForm] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');

	const formToggler = () => {
		setCardForm(!cardForm);
	};
	const onChangeTitle = e => {
		setTitle(e.target.value);
	};
	const onChangeDescription = e => {
		setDescription(e.target.value);
	};

	const renderTaskList = () => {
		const { tasks } = props;
		console.log(props);
		return TASK_STATUSES.map((status, id) => {
			const taskStatus = tasks.filter(task => task.status === status);
			console.log(status);
			return (
				<div key={id}>
					<TaskList key={status} status={status} tasks={taskStatus} />
				</div>
			);
		});
	};

	return (
		<div className="container my-5">
			<div className="jumbotron py-3">
				<div className="row">
					<div className="col-md-2">
						<button className="btn btn-success m-3" onClick={formToggler}>
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
					<form>
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
								oncChange={onChangeDescription}
								placeholder="task title"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				)}
			</div>
			<div
				className="row d-flex justify-content-center position-relative"
				style={{ background: '#e9ecef' }}
			>
				<p>Hello</p>
				{renderTaskList()}
			</div>
		</div>
	);
};
export default TaskPage;
