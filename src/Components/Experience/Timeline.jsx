import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { FiCode, FiServer, FiUsers } from "react-icons/fi";
import TimelineElement from "./TimelineElement";

const Timeline = () => {
	const timelineData = [
		{
			icon: FiCode,
			title: "Learned to Code",
			description:
				"Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript.",
			date: "January 2021",
		},
		{
			icon: FiServer,
			title: "Back-end Development",
			description:
				"Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript.",
			date: "March 2021",
		},
		{
			icon: FiUsers,
			title: "First Job",
			description:
				"Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript. Started learning to code with HTML, CSS, and JavaScript.",
			date: "June 2021",
		},
	];

	return (
		<LayoutGroup>
			<motion.div layout className="w-full space-y-6">
				{timelineData.map((item, index) => (
					<TimelineElement
						key={index}
						icon={item.icon}
						title={item.title}
						description={item.description}
						date={item.date}
					/>
				))}
			</motion.div>
		</LayoutGroup>
	);
};

export default Timeline;
