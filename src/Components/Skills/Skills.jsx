import React from "react";
import SkillCard from "./SkillCard";
import skillCardInfo from "./SkillCardInfo.json";
import backend from "../../assets/svg/backend.svg";
import frontend from "../../assets/svg/frontend.svg";
import uxui from "../../assets/svg/uxui.svg";
import { LayoutGroup } from "framer-motion";
const Skills = () => {
	const icons = [frontend, backend, uxui];
	return (
		<div
			id="skills"
			className="flex w-full flex-col items-center justify-around bg-primary sm:min-h-screen md:h-screen">
			<div className="mb-12 h-32 py-24 text-center">
				<h1 className="font-display text-6xl font-bold text-info">My Skills</h1>
			</div>
			<div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
				<LayoutGroup>
					{skillCardInfo.map((skill, key) => {
						return (
							<SkillCard
								key={key}
								title={skill.title}
								content={skill.content}
								description={skill.description}
								icon={icons[key]}
							/>
						);
					})}
				</LayoutGroup>
			</div>
		</div>
	);
};

export default Skills;
