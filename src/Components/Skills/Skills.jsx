import React from "react";
import SkillCard from "./SkillCard";
import { TbBrandJavascript } from "react-icons/tb";
const Skills = () => {
	const title = "Frontend";
	const content = ["asdf", "asdf", "asdf"];

	return (
		<div
			id="skills"
			style={{ height: "100vh" }}
			className="flex pb-10 bg-gray-800 md:flex-row flex-col items-center w-full h-full justify-around md:justify-center">
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
		</div>
	);
};

export default Skills;
