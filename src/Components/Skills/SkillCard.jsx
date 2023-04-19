import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";

const SkillCard = (props) => {
	const { icon, title, content } = props;
	const [boxShadowActive, setBoxShadowActive] = useState(false);

	const toggleBoxShadow = () => {
		setBoxShadowActive(!boxShadowActive);
	};

	return (
		<motion.div
			layout
			initial={{ scale: 1 }}
			onClick={toggleBoxShadow}
			className={`${
				boxShadowActive
					? "shadow-[20px_20px_0_0_rgba(0,0,0,.3)]"
					: "shadow-[0px_0px_0_0_rgba(0,0,0,.3)]"
			}
        	border border-secondary text-info mx-2 mt-8 w-full py-8 rounded-xl flex flex-col items-center justify-start max-w-[300px] required:h-1/3 transition
        	md:mx-6 md:my-0 md:w-1/3 
        `}>
			<motion.div
				transition={{ type: "spring", damping: 20, stiffness: 80 }}
				layout
				className="
          flex flex-row items-center justify-center w-full 
          md:flex-col">
				<motion.div layout>
					<Frontend className="text-accent w-24 h-24 lg:w-36 lg:h-36" />
					<motion.h2
						layout
						className="text-center text-lg lg:text-lg font-semibold text-info font-display">
						{title}
					</motion.h2>
				</motion.div>

				<ul
					initial={{ opacity: 0, y: 30 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.5, duration: 1 },
					}}
					viewport={{ amount: 1 }}
					transition={{ type: "spring" }}
					className="w-fit px-6 flex flex-col overflow-hidden my-3">
					{content.map((content, id) => {
						return (
							<motion.li
								layout
								key={id}
								className="text-center text-xs lg:text-sm text-secondary ">
								{content}
							</motion.li>
						);
					})}
				</ul>
			</motion.div>
		</motion.div>
	);
};

export default SkillCard;
