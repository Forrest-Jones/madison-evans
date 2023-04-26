import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import colors from "../../helpers/colors";

const TimelineElement = ({
	icon: Icon,
	location,
	role,
	description,
	date,
	employer,
}) => {
	const [showDescription, setShowDescription] = useState(false);

	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.9,
	});

	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: 50 },
	};

	function toggleShowDescription() {
		setShowDescription((prev) => !prev);
	}

	// Animate the entry only once and maintain the visibility
	if (inView) {
		controls.start("visible");
	}

	return (
		<motion.div
			layout
			ref={ref}
			onClick={toggleShowDescription}
			initial="hidden"
			animate={controls}
			whileHover={{
				boxShadow: "12px 12px 0 0 rgba(0,0,0,.3)",
				transition: { duration: 0.1 },
			}}
			variants={variants}
			transition={{ type: "spring", duration: 0.45 }}
			style={{
				borderRadius: "8px",
				border: showDescription
					? `1px solid ${colors.info}`
					: `1px solid ${colors.primaryLighter}`,
			}}
			className="relative mx-[200px] flex cursor-pointer flex-col items-start space-x-4  bg-primaryLighter p-4">
			<motion.p
				layout
				className="absolute -left-[150px] h-fit rounded border border-light p-1 text-xs text-info">
				{date}
			</motion.p>
			<motion.div layout className="flex">
				<Icon className="h-8 w-8 text-accent" />
			</motion.div>
			<motion.div layout>
				<motion.div layout className="w-fit">
					<motion.h2 className="text-info">{employer}</motion.h2>
					<motion.h3 className="w-fit font-display text-lg font-semibold text-accent">
						{role}
					</motion.h3>
					<motion.p className="italic text-info">{location}</motion.p>
				</motion.div>
				<AnimatePresence>
					{showDescription && (
						<motion.div layout>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 0.1, duration: 0.2 },
								}}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								className="pt-4 text-sm text-info">
								<p className="my-1 text-accent">Summary</p>
								<p className="mb-4 max-h-[160px] overflow-scroll overscroll-none rounded-lg p-2">
									{description}
								</p>
								<p className="my-1 text-accent">Skills</p>
								<ul>
									<li>skill 1</li>
									<li>skill 2</li>
									<li>skill 3</li>
								</ul>
							</motion.p>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
};

export default TimelineElement;
