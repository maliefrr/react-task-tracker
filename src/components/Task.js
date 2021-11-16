import { FaTimes } from "react-icons/fa";

const Task = (props) => {
	return (
		<div className={`task ${props.tasks.reminder ? "reminder" : ""}`} onDoubleClick={() => props.onToggle(props.tasks.id)}>
			<h3>
				{props.tasks.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => props.onDelete(props.tasks.id)} />
			</h3>
			<p>{props.tasks.day}</p>
		</div>
	);
};

export default Task;
