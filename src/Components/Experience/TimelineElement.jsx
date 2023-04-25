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
			ref={ref}
			onClick={toggleShowDescription}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={variants}
			transition={{ duration: 0.5 }}
			className="t mx-4 flex cursor-pointer items-start space-x-4 rounded-lg border border-info bg-primaryLighter p-4">
			<div className="flex-shrink-0">
				<Icon className="h-8 w-8 text-info" />
			</div>
			<div>
				<h3 className="font-display text-lg font-semibold text-accent">
					{title}
				</h3>
				<p
					style={{ display: showDescription ? "flex" : "none" }}
					className="text-sm text-info">
					{description}
				</p>
				{/* <p className="text-xs text-info">{date}</p> */}
			</div>
		</motion.div>
	);
};

export default TimelineElement;
