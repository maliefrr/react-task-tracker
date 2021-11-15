const Tasks = (props) => {
	return (
		<>
			<ul>
				{props.tasks.map((element) => (
					<li key={element.id}>{element.text}</li>
				))}
			</ul>
		</>
	);
};

export default Tasks;
