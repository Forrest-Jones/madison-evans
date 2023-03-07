import React from "react";
import SkillCard from "./SkillCard";
import { TbBrandJavascript } from "react-icons/tb";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import djangoIcon from "../../assets/svg/icons8-django.svg";

const Skills = () => {
	const frontendTitle = "Frontend";
	const backendTitle = "Backend";
	const fullstackTitle = "Fullstack";
	const frontendContent = [
		"Proficiency in HTML, CSS, and JavaScript.",
		"Knowledge of front-end frameworks like React, Angular, or Vue.",
		"Understanding of UX and design principles.",
	];
	const backendContent = [
		"Expertise in at least one backend programming language like Java, Python, or Node.js.",
		"Knowledge of server-side frameworks like Spring, Django, or Express.js.",
		"Understanding of database management and optimization.",
	];
	const fullstackContent = [
		"Proficiency in both front-end and back-end development.",
		"Ability to integrate and work with different APIs and third-party services.",
		"Strong problem-solving and communication skills.",
	];
	return (
		<div
			id="skills"
			style={{ height: "100vh" }}
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
