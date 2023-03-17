import React from "react";
import { motion } from "framer-motion";
const ProjectGroupContainer = ({ children }) => {
	return (
		<div className="h-full">
			<motion.div
				className=" h-full
				w-full flex flex-col px-auto justify-start items-center pt-12
				lg:justify-center lg:pt-0 lg:pb-12
				lg:flex-row ">
				{children}
			</motion.div>
		</div>
	);
};

export default ProjectGroupContainer;
