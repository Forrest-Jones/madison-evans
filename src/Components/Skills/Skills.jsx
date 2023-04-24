import React from "react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/svg/icons8-javascript-logo.svg";
import skillCardInfo from "./SkillCardInfo.json";
import { useState } from "react";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
import { motion } from "framer-motion";

const Modal = ({ title, content, setModal }) => {
	return (
		<>
			<motion.div
				layoutId="skill-container"
				className="absolute top-0 mt-8 h-[90%] w-5/6 cursor-pointer rounded-2xl border border-secondary bg-primary shadow-[20px_20px_0_0_rgba(0,0,0,0.3)]"
				onClick={() => {
					setModal(null);
				}}>
				<div className="flex flex-row px-4">
					<motion.div layoutId="skill-icon">
						<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
					</motion.div>
					<motion.h1
						layoutId="skill-title"
						className="flex w-full flex-row items-center px-8 text-center font-display text-4xl font-bold">
						{title}
					</motion.h1>
				</div>
				{content.map((item) => (
					<motion.div>{item}</motion.div>
				))}
			</motion.div>
		</>
	);
};
const Skills = () => {
	const [modal, setModal] = useState(null);
	return (
		<div
			id="skills"
			className="relative flex h-screen w-full flex-col items-center justify-around bg-primary">
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
			</div>
			{modal && (
				<Modal
					title={modal.title}
					content={modal.content}
					setModal={setModal}
				/>
			)}
		</div>
	);
};

export default Skills;
