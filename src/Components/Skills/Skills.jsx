import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import backendIcon from "../../assets/svg/backend.svg";
import uxuiIcon from "../../assets/svg/design.svg";

const Skills = () => {
	const frontendTitle = "Frontend";
	const backendTitle = "Backend";
	const uxuiTitle = "UX/UI";
	const frontendContent = ["HTML, CSS, JavaScript", "React", "UX/UI"];
	const backendContent = [
		"Java, Node, Python",
		"Django",
		"Flask",
		"Database Management",
	];
	const uxuiContent = ["HCI core concepts", "Figma", "Procreate, Blender"];
	return (
		<div
			id="skills"
			style={{ minHeight: "100vh" }}
			className="
			flex flex-col w-full justify-around items-center h-fit
			">
			<div
				className="w-full flex flex-col h-fit 
				md:flex-row justify-center
				">
				<SkillCard
					title={frontendTitle}
					content={frontendContent}
					icon={jsIcon}
				/>
				<SkillCard
					title={backendTitle}
					content={backendContent}
					icon={backendIcon}
				/>
				<SkillCard title={uxuiTitle} content={uxuiContent} icon={uxuiIcon} />
			</div>
		</div>
	);
};

export default Skills;
