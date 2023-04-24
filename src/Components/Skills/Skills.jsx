import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import backendIcon from "../../assets/svg/backend.svg";
import uxuiIcon from "../../assets/svg/design.svg";
import skillCardInfo from "./SkillCardInfo.json";

console.log(skillCardInfo);
const Modal = () => {
	return <></>;
};
const Skills = () => {
	const uxuiContent = ["HCI core concepts", "Figma", "Procreate, Blender"];
	return (
		<div
			id="skills"
			style={{ minHeight: "100vh" }}
			className="relative flex h-fit w-full flex-col items-center justify-around bg-primary">
			<div className="flex h-fit w-full flex-col justify-center md:flex-row">
				{/* TODO: Refactor with json and have the skill cards mapped over */}
				{skillCardInfo.map((item) => {
					return (
						<SkillCard title="title" content={["content"]} icon={jsIcon} />
					);
				})}
				{/* <SkillCard title="title" content={["content"]} icon={jsIcon} />
				<SkillCard title="title" content={["content"]} icon={jsIcon} />
				<SkillCard title="title" content={["content"]} icon={jsIcon} /> */}
				<Modal />
			</div>
		</div>
	);
};

export default Skills;
