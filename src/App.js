import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";
import Contact from "./Components/Contact/Contact";
import ProjectPage from "./Pages/ProjectPage";
import Skills from "./Components/Skills/Skills";
import useScrollDirection from "./helpers/useScrollDirection";

import Modal from "./Components/Modal/Modal";

import { useState, useEffect } from "react";

function App() {
	const scrollDirection = useScrollDirection();

	function enterFullscreen() {
		const element = document.documentElement;

		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			// Firefox
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			// Chrome, Safari, and Opera
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			// IE/Edge
			element.msRequestFullscreen();
		}
	}

	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			// Firefox
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			// Chrome, Safari, and Opera
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			// IE/Edge
			document.msExitFullscreen();
		}
	}

	useEffect(() => {
		if (scrollDirection === "down") {
			enterFullscreen();
		} else if (scrollDirection === "up") {
			exitFullscreen();
		}
	}, [scrollDirection]);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	return (
		<div className="h-full App">
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
						<ProjectPage
							modalContent={modalContent}
							setModalContent={setModalContent}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
						{/* contact */}
						<Contact />
					</div>
				}
			/>
		</div>
	);
}

export default App;
