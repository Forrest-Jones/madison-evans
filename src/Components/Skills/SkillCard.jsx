import React from "react";
import { motion } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
const SkillCard = (props) => {
	const { icon, title, content } = props;
	// const [isExtended, setIsExtended] = useState(false);

	return (
		<motion.div
			layout
			initial={{ scale: 1 }}
			className="
			shadow-[20px_20px_0_0_rgba(0,0,0,0.3)] border text-info mx-2 mt-8 w-full py-8 rounded-xl flex flex-col items-center justify-center
			md:mx-6 md:my-0 md:w-1/3 
			required:h-1/3 
			">
			<motion.div
				transition={{ type: "spring", damping: 20, stiffness: 80 }}
				layout
				className="
				flex flex-row items-center justify-center w-full 
				md:flex-col">
				<motion.div layout>
					{/* <img
						layout
						src={icon}
						alt="icon"
						className="
						text-info 
					mx-auto h-32 w-32 mb-4
					md:w-full"
					/> */}
					<Frontend className="text-accent w-36 h-36" />
					<motion.h2
						layout
						className="text-center text-lg font-semibold text-info ">
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
								className="text-center text-sm text-secondary ">
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
