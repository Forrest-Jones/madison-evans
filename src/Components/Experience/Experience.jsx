import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TiMortarBoard as School } from "react-icons/ti";
import { MdWorkOutline as Job } from "react-icons/md";
import { AiFillCheckCircle as Current } from "react-icons/ai";

const Experience = () => {
	return (
		<div
			id="experience"
			style={{ height: "fit-content" }}
			className="bg-transparent">
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  #fff" }}
					date="Sep 2013 - May 2018"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<h2>Georgia Institute of Technology</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Undergraduate Student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2015 - Aug 2015"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<h2>Porex</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Product Sustaining Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - May 2017"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<h2>Eaton</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Engineering Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - Aug 2017"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<h2>Modif Media Inc.</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Co-Founder
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jun 2018 - Feb 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<h2>Intel</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Mechanical Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Phoenix, AZ
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Sep 2022 - Present (Expected Graduation: 2024)"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<h2>Georgia Institute of Technology</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Master of Science in Computer Science
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jan 2023 - Apr 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<h2>Flatiron</h2>
					<h3 className="vertical-timeline-element-title text-gray-700">
						Full-stack software engineering student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Phoenix, AZ
					</h4>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						perferendis?
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Current />}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
