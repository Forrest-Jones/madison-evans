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
				{/* GT Undergrad */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  #fff" }}
					date="Sep 2013 - May 2018"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Georgia Institute of Technology</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Undergraduate Student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>
							- Graduated from George W. Woodruff School of Mechanical
							Engineering
						</li>
						<li>- Completed a concentration in Automation and Robotics</li>
					</ul>
				</VerticalTimelineElement>
				{/* Porex */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2015 - Aug 2015"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<strong>
						<h2>Porex</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Product Sustaining Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>
							- Performed a Design of Experiments that resulted in improved
							production capability of filtration parts
						</li>
						<li>
							- Programmed measurement routines for SmartScope, an automated
							multi-sensor measurement device
						</li>
						<li>
							- Remodeled product molds in order to make maintenance processes
							safer and more efficient
						</li>
						<li>
							- Created process flow charts and conducted time studies for
							various tooling processes
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* Eaton */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - May 2017"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<strong>
						<h2>Eaton Corporation</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Engineering Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>
							- Contributed design modifications to a collaborative cost saving
							project that saved nearly $1M in annual costs during internship
						</li>
						<li>
							- Implemented engineering design changes to sustain product
							manufacturability and quality
						</li>
						<li>
							- Managed vendor relationships by facilitating product orders
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* Modif Media */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - Aug 2017"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<strong>
						<h2>Modif Media Inc.</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Co-Founder
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>
							- Co-Founded Modif Media, a video editing company, which was
							accepted into Georgia Tech's highly competitive Create X Startup
							Program
						</li>
						<li>
							- Consulted on video editing, providing promotional video content
							for multiple Atlanta Startups
						</li>
						<li>
							- Implemented Final Cut editing software to develop several
							promotional videos for initial phase of startup
						</li>
						<li>
							- Received investment of $20,000 from Georgia Tech’s Create X
							program, valuing the company at $400,000
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jun 2018 - Feb 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<strong>
						<h2>Intel</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Mechanical Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Phoenix, AZ
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>- Intel Item</li>
						<li>- Intel Item</li>
						<li>- Intel Item </li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Sep 2022 - Present (Expected Graduation: 2024)"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Georgia Institute of Technology</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Master of Science in Computer Science
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Atlanta, GA
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>- OMSCS item</li>
						<li>- OMSCS item</li>
						<li>- OMSCS item</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jan 2023 - Apr 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Flatiron</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-gray-700">
						Full-stack software engineering student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-gray-700">
						Phoenix, AZ
					</h4>
					<ul className="text-gray-700 mt-4">
						<li>
							- Contributed design modifications to a collaborative cost saving
							project that saved nearly $1M in annual costs during internship
						</li>
						<li>
							- Implemented engineering design changes to sustain product
							manufacturability and quality
						</li>
						<li>
							- Managed vendor relationships by facilitating product orders
						</li>
					</ul>
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
