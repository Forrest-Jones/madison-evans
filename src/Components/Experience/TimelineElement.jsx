import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const TimelineElement = ({ icon: Icon, title, description, date }) => {
	const [showDescription, setShowDescription] = useState(false);

	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 50 },
	};
	function toggleShowDescription() {
		setShowDescription((prev) => !prev);
	}
	return (
		<motion.div
			layout
			ref={ref}
			onClick={toggleShowDescription}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={variants}
			transition={{ duration: 0.5 }}
			style={{ borderRadius: "8px" }}
			className="t mx-4 flex cursor-pointer items-start space-x-4 border border-info bg-primaryLighter p-4">
			<motion.div layout className="flex-shrink-0">
				<Icon className="h-8 w-8 text-info" />
			</motion.div>
			<motion.div layout>
				<motion.h3
					layout
					className="w-full font-display text-lg font-semibold text-accent">
					{title}
				</motion.h3>
				{showDescription && (
					<motion.p
						className="text-sm text-info"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.5 } }}>
						{description}
					</motion.p>
				)}
				{/* <p className="text-xs text-info">{date}</p> */}
			</motion.div>
		</motion.div>
	);
};

export default TimelineElement;
