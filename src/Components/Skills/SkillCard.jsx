import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const SkillCard = (props) => {
	const { icon, title, content } = props;
	const [isExtended, setIsExtended] = useState(false);
	return (
		<motion.div
			onClick={() => setIsExtended(!isExtended)}
			initial={{ scale: 1 }}
			whileHover={{
				scale: 1.05,
				transition: { type: "spring", ease: "easeInOut" },
			}}
			style={{ cursor: "pointer" }}
			className="
			border border-solid border-white text-white border-1 mx-2 mt-8 py-8 rounded-md flex flex-col w-60 justify-center
			md:mx-6 md:my-0 md:h-80 md:w-1/3 
			required:h-1/3 
			">
			<div
				className="
				flex flex-col">
				<img
					src={icon}
					alt="icon"
					className="
					mx-auto h-1/2
					md:w-auto"
				/>
				<h2 className="text-center text-lg font-semibold">{title}</h2>
			</div>
			<div>
				<ul style={{ display: isExtended ? "flex" : "none" }}>
					{content.map((content, id) => {
						return (
							<li key={id} className="text-xs text-center">
								{content}
							</li>
						);
					})}
				</ul>
			</div>
		</motion.div>
	);
};

export default SkillCard;
