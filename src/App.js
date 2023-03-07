import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";

function App() {
	return (
		<div className="flex flex-col h-full md:flex-row">
			<LayoutGrid
				nav={<Navbar />}
				content={
					<div>
						<AboutMe />
						<Carousel />
					</div>
				}
			/>
		</div>
	);
}

export default App;
