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
	svg,
	employer,
	skills,
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

	if (inView) {
		controls.start("visible");
	}

	return (
		<motion.div
			className="w-full"
			layout
			variants={variants}
			transition={{ type: "spring", duration: 0.45 }}
			ref={ref}
			initial="hidden"
			animate={controls}>
			<motion.p
				layout
				className="mb-2 h-fit w-fit rounded-md border p-1 text-center text-info">
				{date}
			</motion.p>
			<motion.div
				layout
				onClick={toggleShowDescription}
				whileHover={{
					boxShadow: "12px 12px 0 0 rgba(0,0,0,.3)",
					transition: { duration: 0.1 },
				}}
				transition={{ type: "spring", duration: 0.45 }}
				style={{
					borderRadius: "8px",
					border: showDescription
						? `1px solid ${colors.info}`
						: `1px solid ${colors.primaryLighter}`,
				}}
				className="relative flex w-full cursor-pointer flex-col items-start space-x-4 bg-primaryLighter  p-4 md:mx-[200px]">
				<motion.div layout className="flex w-fit">
					<Icon className="h-8 w-8 text-accent" />
				</motion.div>
				<motion.div layout className="w-full pr-8">
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
								<motion.div
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { delay: 0.1, duration: 0.2 },
									}}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									className="w-full pt-4 text-sm text-info">
									<div className="relative my-auto flex h-[100px] w-[200px] flex-row justify-center rounded-2xl lg:w-[300px]">
										<img
											src={svg}
											alt="svg"
											className="absolute top-1/2 w-full -translate-y-1/2 py-2"
										/>
									</div>
									<p className="my-1 text-accent">Summary</p>
									<div className="flex w-full flex-col">
										<p className="mb-4 max-h-[160px] w-full overflow-scroll overscroll-none rounded-lg">
											{description}
										</p>
									</div>
									<p className="my-1 text-accent">Skills</p>
									<ul>
										{skills.map((skill) => {
											return <li className="list-disc">{skill}</li>;
										})}
									</ul>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default TimelineElement;
