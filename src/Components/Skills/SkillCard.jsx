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
			initial={{ scale: 1 }}
			onClick={toggleBoxShadow}
			className={`${
				boxShadowActive
					? "shadow-[20px_20px_0_0_rgba(0,0,0,.3)] absolute w-4/6"
					: "shadow-[0px_0px_0_0_rgba(0,0,0,.3)] md:w-48 lg:w-60 xl:80"
			}
        	cursor-pointer border bg-primary border-secondary text-info mt-8 py-8 rounded-xl flex flex-col items-center justify-start required:h-1/3 transition md:mx-4 md:my-0 hover:shadow-[20px_20px_0_0_rgba(0,0,0,.3)]
        `}>
			<motion.div
				transition={{ type: "spring", damping: 20, stiffness: 80 }}
				className="
          flex flex-row items-center justify-center w-full 
          md:flex-col">
				<motion.div>
					<Frontend className="text-accent w-24 h-24 lg:w-36 lg:h-36" />
					<motion.h2 className="text-center text-lg lg:text-lg font-semibold text-info font-display">
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
