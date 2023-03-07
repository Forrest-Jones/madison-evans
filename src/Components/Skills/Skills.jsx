import React from "react";
import SkillCard from "./SkillCard";
import { TbBrandJavascript } from "react-icons/tb";
const Skills = () => {
	const title = "Frontend";
	const content = ["asdf", "asdf", "asdf"];

	return (
		<div id="skills" style={{ height: "100vh" }}>
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
			<SkillCard title={title} content={content} icon={TbBrandJavascript} />
		</div>
	);
};

export default Skills;
