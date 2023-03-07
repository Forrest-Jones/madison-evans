import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import djangoIcon from "../../assets/svg/icons8-django.svg";

const Skills = () => {
	const frontendTitle = "Frontend";
	const backendTitle = "Backend";
	const fullstackTitle = "Fullstack";
	const frontendContent = ["HTML, CSS, JavaScript", "React", "UX/UI"];
	const backendContent = [
		"Java, Node, Python",
		"Django",
		"database management and optimization.",
	];
	const fullstackContent = ["front-end", "APIs", "Problem Solving"];
	return (
		<div
			id="skills"
			style={{ minHeight: "100vh" }}
			className="flex pb-10 bg-gray-800 md:flex-row flex-col items-center w-full h-full justify-around md:justify-center">
			<SkillCard
				title={frontendTitle}
				content={frontendContent}
				icon={jsIcon}
			/>
			<SkillCard
				title={backendTitle}
				content={backendContent}
				icon={djangoIcon}
			/>
			<SkillCard
				title={fullstackTitle}
				content={fullstackContent}
				icon={djangoIcon}
			/>
		</div>
	);
};

export default Skills;
