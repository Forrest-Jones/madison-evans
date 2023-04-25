import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import skillCardInfo from "./SkillCardInfo.json";

const Skills = () => {
	return (
		<div
			id="skills"
			className="flex h-screen w-full flex-col items-center justify-around bg-primary">
			<div className="flex h-fit w-full flex-col justify-center md:flex-row">
				{skillCardInfo.map((skill, key) => {
					return (
						<SkillCard
							key={key}
							title={skill.title}
							content={skill.subSkills}
							icon={jsIcon}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
