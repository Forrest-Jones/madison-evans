import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";

import Experience from "./Components/Experience/Experience";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import image1 from "./assets/images/w1.jpeg";
import image2 from "./assets/images/w2.jpeg";
import image3 from "./assets/images/w3.jpeg";

import ProjectGroupContainer from "./ProjectGroupContainer/ProjectGroupContainer";

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
						<ProjectGroupContainer>
							<Project image={image1} />
							<Project image={image2} />
							<Project image={image3} />
						</ProjectGroupContainer>
						{/* Contact Section */}
						<Contact />
					</div>
				}
			/>
		</div>
	);
}

export default App;
