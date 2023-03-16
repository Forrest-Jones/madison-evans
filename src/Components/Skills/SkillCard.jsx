import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const SkillCard = (props) => {
	const { icon, title, content } = props;
	const [isExtended, setIsExtended] = useState(false);

	return (
		<motion.div
			layout
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.04 }}
			onClick={() => setIsExtended(!isExtended)}
			className="
			text-secondary cursor-pointer mx-2 mt-8 w-full py-8 rounded-xl flex flex-col items center justify-center
			md:mx-6 md:my-0 md:h-fit md:w-1/3 
			required:h-1/3 
			">
			<motion.div
				transition={{ type: "spring", damping: 20, stiffness: 80 }}
				layout
				className="
				flex flex-row items-center justify-center w-full
				md:flex-col">
				<motion.div layout>
					<img
						layout
						src={icon}
						alt="icon"
						className="
					text-secondary
					mx-auto h-32 w-32 
					md:w-full"
					/>
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 1 }}
						transition={{ type: "spring" }}
						layout
						className="text-center text-lg font-semibold">
						{title}
					</motion.h2>
				</motion.div>

				{isExtended && (
					<motion.ul
						transition={{ type: "spring" }}
						className="w-fit px-6 flex flex-col overflow-hidden">
						{content.map((content, id) => {
							return (
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.1 }}
									layout
									key={id}
									className="text-lg text-center">
									{content}
								</motion.li>
							);
						})}
					</motion.ul>
				)}
			</motion.div>
		</motion.div>
	);
};

export default SkillCard;
