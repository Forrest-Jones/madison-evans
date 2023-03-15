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
			className="bg-transparent w-screen overscroll-x-none">
			<VerticalTimeline>
				{/* GT Undergrad */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work "
					contentStyle={{ background: "#fff", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  #fff" }}
					date="Sep 2013 - May 2018"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Georgia Institute of Technology</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-primary">
						Undergraduate Student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Atlanta, GA
					</h4>
					<ul className="text-primary mt-4">
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

					<h3 className="vertical-timeline-element-title text-primary">
						Product Sustaining Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Atlanta, GA
					</h4>
					<ul className="text-primary mt-4">
						<li>
							- Performed a Design of Experiments that resulted in improved
							production capability of filtration parts
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

					<h3 className="vertical-timeline-element-title text-primary">
						Engineering Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Atlanta, GA
					</h4>
					<ul className="text-primary mt-4">
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

					<h3 className="vertical-timeline-element-title text-primary">
						Co-Founder
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Atlanta, GA
					</h4>
					<ul className="text-primary mt-4">
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
				{/* Intel */}
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jun 2018 - Feb 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<Job />}>
					<strong>
						<h2>Intel</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-primary">
						Mechanical Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Phoenix, AZ
					</h4>
					<ul className="text-primary mt-4">
						<li>
							- Worked as a development engineer within Intel Module Repair
							group, designing manufacturable solutions for improving the
							quality and ergonomic conditions of technicians and the accuracy
							of tools.
							<li>
								- Moved on to a mechanical design engineer role, designing,
								prototyping, and launching products for other engineers on the
								manufacturing side of things, using Solidworks and occasionally
								python and data analysis tools.
							</li>
							<li>
								- Functioned as an onsite engineering consultant, managing
								vendor relations and making cost decisions while taking on
								projects from conception to production.
							</li>
							<li>
								Contributed to the goal of saving Intel money by providing
								cheaper and more impactful solutions for other internal
								engineering groups.
							</li>
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* OMSCS */}
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Sep 2022 - Present (Expected Graduation: 2024)"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Georgia Institute of Technology</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-primary">
						Master of Science in Computer Science
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Atlanta, GA
					</h4>
					<ul className="text-primary mt-4">
						<li>
							- Completed a Human Computer Interaction course, learning about
							UX/UI, designing products for human interaction, and core
							principles of interface design.
						</li>
						<li>
							- Took a challenging Machine Learning course, covering supervised
							learning, deep learning, reinforcement learning, unsupervised
							learning, and utilizing libraries such as scikit learn, numpy,
							matplotlib, and tensorflow through research papers and labs
							executed in Python.
						</li>
						<li>
							- Learned core fundamental software engineering concepts such as
							SOLID principles, creating UML class diagrams, clean code,
							collaboration via Github, and design patterns for cleaner and more
							scalable architecture in a Software Design course.
						</li>
						<li>
							- Contributed front-end functionality in a group project using
							Android Studio in a Java course. Created a job comparison app that
							allows users to compare job offers in terms of salary, location,
							and experience level.
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* Flatiron */}
				<VerticalTimelineElement
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jan 2023 - Apr 2023"
					iconStyle={{ background: "#4B5563", color: "#fff" }}
					icon={<School />}>
					<strong>
						<h2>Flatiron</h2>
					</strong>

					<h3 className="vertical-timeline-element-title text-primary">
						Full-stack software engineering student
					</h3>
					<h4 className="vertical-timeline-element-subtitle text-primary">
						Phoenix, AZ
					</h4>
					<ul className="text-primary mt-4">
						<li>
							- Completed a full-stack web development program that covered a
							range of programming languages and frameworks, including
							Javascript, HTML, CSS, React JS, Python, SQLAlchemy, and Flask.
							<li>
								- Gained experience working on several group projects, which
								helped to build skills in collaboration, communication, and
								project management.
							</li>
							<li>
								- Benefited from the support and resources provided by Flatiron
								School, including career coaching, networking opportunities, and
								job placement assistance, which will be valuable as you prepare
								to transition to a career in software engineering.
							</li>
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
