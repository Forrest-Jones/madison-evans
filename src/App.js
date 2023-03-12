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
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import ModalContext from "./helpers/ModalContext";
import ProjectGroupContainer from "./Components/ProjectGroupContainer/ProjectGroupContainer";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	return (
		<div className="h-full">
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				modalContent={modalContent}
			/>
			<LayoutGrid
				nav={<Navbar />}
				content={
					<div className="flex-col w-full">
						{/* about me section */}
						<AboutMe />
						{/* Skills */}
						<Skills />
						{/* experience section */}
						<Experience />
						{/* Projects section */}
						<ModalContext.Provider value={{ modalContent, setModalContent }}>
							<ProjectGroupContainer>
								<Project
									image={image1}
									setShowModal={setShowModal}
									showModal={showModal}
								/>
								<Project
									image={image2}
									setShowModal={setShowModal}
									showModal={showModal}
								/>
								<Project
									image={image3}
									setShowModal={setShowModal}
									showModal={showModal}
								/>
							</ProjectGroupContainer>
						</ModalContext.Provider>
						{/* contact */}
						<Contact />
					</div>
				}
			/>
		</div>
	);
}

export default App;
