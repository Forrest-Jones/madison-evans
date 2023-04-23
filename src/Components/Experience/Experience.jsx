import React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
const experienceData = [
	{
		title: "Software Engineer",
		company: "Company A",
		duration: "Jan 2020 - Present",
		description:
			"I work on building awesome features for our web applications.",
	},
	{
		title: "Junior Developer",
		company: "Company B",
		duration: "Jun 2018 - Dec 2019",
		description:
			"I contributed to the development of several projects and gained valuable experience.",
	},
	{
		title: "Software Engineer",
		company: "Company A",
		duration: "Jan 2020 - Present",
		description:
			"I work on building awesome features for our web applications.",
	},
	{
		title: "Junior Developer",
		company: "Company B",
		duration: "Jun 2018 - Dec 2019",
		description:
			"I contributed to the development of several projects and gained valuable experience.",
	},
	{
		title: "Software Engineer",
		company: "Company A",
		duration: "Jan 2020 - Present",
		description:
			"I work on building awesome features for our web applications.",
	},
];
const ExperienceTimeline = () => {
	return (
		<div
			id="experience"
			className="bg-primary h-fit w-full overflow-x-hidden overflow-y-auto">
			<VerticalTimeline>
				{experienceData.map((experience, index) => (
					<VerticalTimelineElement
						key={index}
						date={experience.duration}
						icon={<i className="fas fa-briefcase"></i>}
						iconStyle={{ background: "#e34f42", color: "#eceae7" }}>
						<h2 className="text-xl font-display font-bold text-info">
							{experience.title}
						</h2>
						<h3 className="font-semibold text-accent">{experience.company}</h3>
						<p className="text-gray-700">{experience.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default ExperienceTimeline;
