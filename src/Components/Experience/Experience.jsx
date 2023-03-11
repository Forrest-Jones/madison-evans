import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TiMortarBoard } from "react-icons/ti";

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
					date="2011 - present"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					date="2010 - 2011"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					date="2008 - 2010"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					date="2006 - 2008"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					date="April 2013"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					date="November 2012"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					className="vertical-timeline-element--education"
					date="2002 - 2006"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<TiMortarBoard />}>
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
					icon={<TiMortarBoard />}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
