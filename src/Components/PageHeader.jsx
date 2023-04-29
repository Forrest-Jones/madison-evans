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
				x: 0,
				transition: {
					duration: 1,
					ease: "easeInOut",
				},
			});
		}
	}, [animation, inView]);

	return (
		<div className="h-32 py-48 text-center" ref={ref}>
			<motion.h1
				className="font-display text-[3em] font-bold text-info md:text-[4em]"
				initial={{ opacity: 0, x: 50 }}
				animate={animation}>
				{title}
			</motion.h1>
		</div>
	);
};

export default PageHeader;
