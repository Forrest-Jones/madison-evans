import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="flex flex-col md:flex-row">
			<Navbar />
			<AboutMe />
		</div>
	);
}

export default App;
