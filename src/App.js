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
						<Carousel>
							<div>Project 1</div>
							<div>Project 2</div>
							<div>Project 3</div>
						</Carousel>
					</div>
				}
			/>
		</div>
	);
}

export default App;
