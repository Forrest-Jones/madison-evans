import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import skillCardInfo from "./SkillCardInfo.json";
import { useState } from "react";
const Modal = ({ title, setModal }) => {
	return (
		<>
			<div
				onClick={() => {
					setModal(null);
				}}>
				<h1>{title}</h1>
			</div>
		</>
	);
};
const Skills = () => {
	const [modal, setModal] = useState(null);
	return (
		<div
			id="skills"
			style={{ minHeight: "100vh" }}
			className="relative flex h-fit w-full flex-col items-center justify-around bg-primary">
			<div className="flex h-fit w-full flex-col justify-center md:flex-row">
				{skillCardInfo.map((skill) => {
					return (
						<SkillCard
							title={skill.title}
							content={skill.subSkills}
							icon={jsIcon}
							setModal={setModal}
						/>
					);
				})}
				{modal && <Modal title={modal.title} setModal={setModal} />}
			</div>
		</div>
	);
};

export default Skills;
