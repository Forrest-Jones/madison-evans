import React from "react";
import palettePalImg from "../assets/images/palette-pal-img.png";
import blueCloudImg from "../assets/images/blue-cloud-img.png";
import dropTheBallImg from "../assets/images/drop-the-ball-img.png";
import duoTuneImg from "../assets/images/duotune.png";
import palettePal from "../assets/palette.mp4";
import blueCloudMusic from "../assets/blue-cloud.mp4";
import duotune from "../assets/duotune.mp4";
import dropTheBall from "../assets/drop-the-ball.mp4";
import Project from "../Components/Project/Project";

import projects from "./projects.json";

const ProjectPage = () => {
	const projectAssets = [
		{ image: duoTuneImg, video: duotune },
		{ image: palettePalImg, video: palettePal },
		{ image: blueCloudImg, video: blueCloudMusic },
		{ image: dropTheBallImg, video: dropTheBall },
	];

	return (
		<div id="projects" className="h-fit bg-primary">
			<div className="mb-12 h-32 py-24 text-center">
				<h1 className="font-display text-6xl font-bold text-info">
					My Projects
				</h1>
			</div>

			<div className="mx-10">
				{projects.map((project, key) => {
					return (
						<Project
							image={projectAssets[key].image}
							video={projectAssets[key].video}
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
