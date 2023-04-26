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
	return (
		<div className="h-full">
			<LayoutGrid>
				<Navbar />
				<div className="flex w-full flex-col">
					<AboutMe />
					<Skills />
					<Experience />
					<ProjectPage />
					<Contact />
				</div>
			</LayoutGrid>
		</div>
	);
}

export default App;
