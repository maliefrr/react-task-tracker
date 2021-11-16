import Task from "./Task";

const Tasks = (props) => {
	return (
		<>
			{props.tasks.map((element) => (
				<Task key={element.id} tasks={element} onDelete={props.onDelete} onToggle={props.onToggle} />
			))}
		</>
	);
};

export default Tasks;
