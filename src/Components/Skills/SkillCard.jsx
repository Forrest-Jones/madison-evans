import React from "react";
import { motion } from "framer-motion";
const SkillCard = (props) => {
	const { icon, title, content } = props;
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{
				scale: 1.05,
				transition: { type: "spring", ease: "easeInOut" },
			}}
			className="border border-solid border-black border-1 w-1/2 mx-2 mt-8 py-8 required:h-1/3 md:mx-6 md:my-0 md:h-80 md:w-1/3 rounded-md">
			<img src={icon} alt="icon" className="mx-auto w-1/3 md:w-auto" />
			<h2 className="text-center text-lg font-semibold">{title}</h2>
			<ul className="mx-6">
				{content.map((content, id) => {
					return (
						<li key={id} className="text-xs text-center">
							{content}
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default SkillCard;
