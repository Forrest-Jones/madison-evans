import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const SkillCard = (props) => {
	const { icon, title, content } = props;
	const [isExtended, setIsExtended] = useState(false);
	return (
		<motion.div
			layout
			onClick={() => setIsExtended(!isExtended)}
			style={{ cursor: "pointer" }}
			className="
			text-secondary border-1 mx-2 mt-8 py-8 rounded-xl flex flex-col w-60 justify-center
			md:mx-6 md:my-0 md:h-fit md:w-1/3 
			required:h-1/3 
			">
			<motion.div
				layout
				className="
				flex flex-col items-center justify-center">
				<motion.img
					layout
					src={icon}
					alt="icon"
					className="
					text-secondary
					mx-auto h-32
					md:w-full"
				/>
				<motion.h2 layout className="text-center text-lg font-semibold">
					{title}
				</motion.h2>
				{isExtended && (
					<motion.ul className="w-full px-6 flex flex-col">
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
