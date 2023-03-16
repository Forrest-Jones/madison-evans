import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import djangoIcon from "../../assets/svg/icons8-django.svg";
import other from "../../assets/svg/design.svg";
const Skills = () => {
	const frontendTitle = "Frontend";
	const backendTitle = "Backend";
	const fullstackTitle = "Fullstack";
	const frontendContent = ["HTML, CSS, JavaScript", "React", "UX/UI"];
	const backendContent = [
		"Java, Node, Python",
		"Django",
		"Database Management",
	];
	const fullstackContent = ["APIs", "Problem Solving"];
	return (
		<div
			id="skills"
			style={{ minHeight: "100vh" }}
			className="
			flex bg-terciary flex-col w-full justify-around items-center h-fit
			">
			<div
				className="w-full flex flex-col h-fit 
				md:flex-row
				">
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
					icon={other}
				/>
			</div>
		</div>
	);
};

export default Skills;
