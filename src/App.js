import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";
import Contact from "./Components/Contact/Contact";
import ProjectPage from "./Pages/ProjectPage";
import Skills from "./Components/Skills/Skills";

import Modal from "./Components/Modal/Modal";

import { useState } from "react";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	return (
		<div className="h-full App">
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				modalContent={modalContent}
			/>
			<LayoutGrid>
				<Navbar />
				<div className="flex-col w-full">
					<AboutMe />
					<Skills />
					<Experience />
					<ProjectPage
						modalContent={modalContent}
						setModalContent={setModalContent}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
					<Contact />
				</div>
			</LayoutGrid>
		</div>
	);
}

export default App;
