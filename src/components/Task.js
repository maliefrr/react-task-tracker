const Task = (props) => {
	return (
		<div className="task">
			<h3>{props.tasks.text}</h3>
			<p>{props.tasks.day}</p>
		</div>
	);
};

export default Task;
