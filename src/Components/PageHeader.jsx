import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PageHeader = ({ title }) => {
	const animation = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
				transition: {
					duration: 2,
					ease: "easeInOut",
				},
			});
		}
	}, [animation, inView]);

	return (
		<div className="h-32 py-48 text-center" ref={ref}>
			<motion.h1
				className="font-display text-[5em] font-bold text-info"
				initial={{ opacity: 0, y: 0 }}
				animate={animation}>
				{title}
			</motion.h1>
		</div>
	);
};

export default PageHeader;
