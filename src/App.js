import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTask] = useState([
		{
			id: 1,
			text: "Belajar React.js",
			day: "15 November 2021",
			reminder: true,
		},
		{
			id: 2,
			text: "Membuat Paper Perancangan dan Strategi Sistem Informasi",
			day: "16 November 2021",
			reminder: true,
		},
		{
			id: 3,
			text: "Mencari Inspirasi Konsep Birthday Fiony",
			day: "17 November 2021",
			reminder: true,
		},
	]);

	const deleteTask = (id) => {
		setTask(tasks.filter((el) => el.id !== id));
	};

	const toggleReminder = (id) => {
		setTask(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newTask = { id, ...task };
		setTask([...tasks, newTask]);
	};

	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask ? <AddTask onAdd={addTask} /> : ""}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<div className="alert alert-danger alert-dismissible fade show" role="alert">
					No Task to Show
					<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			)}
		</div>
	);
}

export default App;
