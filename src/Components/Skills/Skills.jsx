import React from "react";
import SkillCard from "./SkillCard";
import skillCardInfo from "./SkillCardInfo.json";
import backend from "../../assets/svg/backend.svg";
import frontend from "../../assets/svg/frontend.svg";
const Skills = () => {
	const icons = [backend, frontend, backend];
	return (
		<div
			id="skills"
			className="flex h-screen w-full flex-col items-center justify-around bg-primary">
			<div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
				{skillCardInfo.map((skill, key) => {
					return (
						<SkillCard
							key={key}
							title={skill.title}
							content={skill.subSkills}
							icon={icons[key]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
