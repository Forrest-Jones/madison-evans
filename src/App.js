import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
function App() {
	return (
		<div className="flex flex-col md:flex-row">
			<Navbar />
			<AboutMe />
			<Projects />
		</div>
	);
}

export default App;
