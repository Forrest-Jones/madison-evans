import React from "react";
import SkillCard from "./SkillCard";
import { TbBrandJavascript } from "react-icons/tb";
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
				icon={TbBrandJavascript}
			/>
			<SkillCard
				title={backendTitle}
				content={backendContent}
				icon={TbBrandJavascript}
			/>
			<SkillCard
				title={fullstackTitle}
				content={fullstackContent}
				icon={TbBrandJavascript}
			/>
		</div>
	);
};

export default Skills;
