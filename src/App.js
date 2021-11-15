import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
