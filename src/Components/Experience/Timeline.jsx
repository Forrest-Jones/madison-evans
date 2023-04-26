import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { FaGraduationCap as School } from "react-icons/fa";
import { MdWork as Work } from "react-icons/md";
import TimelineElement from "./TimelineElement";
import gt from "../../assets/svg/Primary Logos/GT Extended/GTExtended_Navy.svg";
import Porex from "../../assets/svg/Porex.svg";
const Timeline = () => {
	const timelineData = [
		{
			icon: School,
			employer: "Georgia Institute of Technology",
			location: "Atlanta, GA",
			role: "Undergraduate Student",
			description:
				"In 2018, I graduated from the George W. Woodruff School of Mechanical Engineering. My undergraduate studies in mechanical engineering were complemented with my concentration in Automation and Robotics; during my time at Georgia Tech, I discovered my affinity for design and really enjoyed blending that skillset with my programming skills. I dove into a variety of mechatronics projects that involved working with microcontrollers and robotic kinematics. This hands-on experience not only helped me develop a versatile skillset, but also gave me a unique perspective to tackle real-world engineering challenges in a more personable and approachable way.",
			date: "Sep 2013 - Jun 2018",
			svg: gt,
		},
		{
			icon: Work,
			employer: "Porex",
			location: "Atlanta, GA",
			role: "Engineering Intern",
			description:
				"- Conducted design-of-experiements that led to improved production capabilities - Created process flow charts and time studies for various tooling processes",
			date: "May 2015 - Aug 2015",
			svg: Porex,
		},
		{
			icon: Work,
			employer: "Eaton",
			location: "Atlanta, GA",
			role: "Product Sustaining Intern",
			description:
				"- Conducted design-of-experiements that led to improved production capabilities - Created process flow charts and time studies for various tooling processes",
			date: "May 2015 - Aug 2015",
			svg: gt,
		},
		{
			icon: Work,
			employer: "Modif Media",
			location: "Atlanta, GA",
			role: "Cofounder",
			description:
				"- Conducted design-of-experiements that led to improved production capabilities - Created process flow charts and time studies for various tooling processes",
			date: "May 2015 - Aug 2015",
			svg: gt,
		},
		{
			icon: Work,
			employer: "Intel",
			location: "Phoenix, AZ",
			role: "Mechanical Engineer",
			description:
				"- Conducted design-of-experiements that led to improved production capabilities - Created process flow charts and time studies for various tooling processes",
			date: "May 2015 - Aug 2015",
			svg: gt,
		},
		{
			icon: School,
			employer: "Georgia Institue of Technology",
			location: "Phoenix, AZ",
			role: "Computer Science Grad Student",
			description:
				"- Conducted design-of-experiements that led to improved production capabilities - Created process flow charts and time studies for various tooling processes",
			date: "May 2015 - Aug 2015",
			svg: gt,
		},
	];

	return (
		<LayoutGroup>
			<motion.div layout className="w-full space-y-6">
				{timelineData.map((item, index) => (
					<TimelineElement
						key={index}
						icon={item.icon}
						role={item.role}
						employer={item.employer}
						description={item.description}
						date={item.date}
						location={item.location}
						svg={item.svg}
					/>
				))}
			</motion.div>
		</LayoutGroup>
	);
};

export default Timeline;
