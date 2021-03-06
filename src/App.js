import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTask] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const taskFromServer = await fetchTasks();
			setTask(taskFromServer);
		};

		getTasks();
	}, []);

	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();

		return data;
	};

	// Fetch Task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();

		return data;
	};

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DELETE",
		});
		setTask(tasks.filter((el) => el.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTask(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
	};

	const addTask = async (task) => {
		const res = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		setTask([...tasks, data]);

		// const id = Math.floor(Math.random() * 1000) + 1;
		// const newTask = { id, ...task };
		// setTask([...tasks, newTask]);
	};

	return (
		<Router>
			<div className="container">
				<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
				{showAddTask ? <AddTask onAdd={addTask} /> : ""}
				<Routes>
					<Route path="/" exact element={tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <div>No Task to Show</div>} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
