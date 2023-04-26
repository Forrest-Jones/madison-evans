import React from "react";
import image1 from "../assets/images/palette-pal-img.png";
import image2 from "../assets/images/blue-cloud-img.png";
import image3 from "../assets/images/drop-the-ball-img.png";
import Project from "../Components/Project/Project";

import projects from "./projects.json";

const ProjectPage = () => {
	const projectImages = [image1, image2, image3];

	return (
		<div id="projects" className="h-fit bg-primary">
			<div className="mb-40 h-32 py-6 text-center">
				<h1 className="font-display text-6xl font-bold text-info">
					My Projects
				</h1>
			</div>

			<div className="mx-10">
				{projects.map((project, key) => {
					return (
						<Project
							image={projectImages[key]}
							projectContent={project}
							key={key}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectPage;
