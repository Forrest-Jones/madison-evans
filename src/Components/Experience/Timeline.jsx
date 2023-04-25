import React from "react";

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
		<div className="w-full py-8">
			<divn className="space-y-6">
				{timelineData.map((item, index) => (
					<TimelineElement
						key={index}
						icon={item.icon}
						title={item.title}
						description={item.description}
						date={item.date}
					/>
				))}
			</divn>
		</div>
	);
};

export default Timeline;
