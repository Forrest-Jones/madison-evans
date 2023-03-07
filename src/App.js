import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
function App() {
	return (
		<div className="flex flex-col md:flex-row">
			<Navbar />
			<AboutMe />
			<Carousel>
				<div>asdf</div>
				<div>aaaaaaa</div>
				<div>asgggggggggdf</div>
			</Carousel>
		</div>
	);
}

export default App;
