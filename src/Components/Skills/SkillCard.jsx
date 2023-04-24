import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";

const SkillCard = (props) => {
	const { title, content, setModal } = props;
	return (
		<motion.div
			onClick={() => {
				setModal({
					title: title,
					content: content,
				});
			}}
			layoutId="skill-container"
			className="mx-4 flex w-60 cursor-pointer flex-col items-center rounded-lg border border-secondary p-2 transition hover:bg-light hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.3)]">
			<div>
				<div className="flex flex-col items-center">
					<motion.div layoutId="skill-icon">
						<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
					</motion.div>
					<motion.h2
						layoutId="skill-title"
						className="font-display text-lg font-bold">
						{title}
					</motion.h2>
				</div>

				<ul>
					{content.map((content, id) => {
						return <li key={id}>{content}</li>;
					})}
				</ul>
			</div>
		</motion.div>
	);
};

export default SkillCard;
