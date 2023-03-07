import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Experience from "./Components/Experience/Experience";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import image1 from "./assets/images/w1.jpeg";
import image2 from "./assets/images/w2.jpeg";
import image3 from "./assets/images/w3.jpeg";
import image4 from "./assets/images/w4.jpeg";
const imageArray = [image1, image2, image3, image4];
function App() {
	return (
		<div className="h-full">
			<LayoutGrid
				nav={<Navbar />}
				content={
					<div className="flex-col">
						{/* about me section */}
						<AboutMe />
						{/* Skills */}
						<Skills />
						{/* experience section */}
						<Experience />
						{/* Projects section */}
						<Carousel imageArray={imageArray} />
						{/* Contact Section */}
						<Contact />
					</div>
				}
			/>
		</div>
	);
}

export default App;
