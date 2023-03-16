import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TiMortarBoard as School } from "react-icons/ti";
import { MdWorkOutline as Job } from "react-icons/md";
import { AiFillCheckCircle as Current } from "react-icons/ai";
import { motion } from "framer-motion";
import { RiFileDownloadFill as Dl } from "react-icons/ri";

const Experience = () => {
	return (
		<div
			id="experience"
			className="bg-primary overscroll-x-none h-fit w-full overscroll-none ">
			{/* <div className="h-60 flex items-center justify-center bg-primary">
				<div className="h-full flex flex-col items-center justify-around px-24 ">
					<motion.h1
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 1 }}
						transition={{ type: "spring", duration: 1 }}
						className="
						text-secondary text-md py-12 text-4xl">
						Experience
					</motion.h1>
				</div>
			</div> */}
			<VerticalTimeline>
				{/* GT Undergrad */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work "
					contentStyle={{ background: "#fff", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  #fff" }}
					date="Sep 2013 - May 2018"
					iconStyle={{ background: "#101923", color: "#fff" }}
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
					iconStyle={{ background: "#101923", color: "#fff" }}
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
							- Conducted design-of-experiements that led to improved production
							capabilities
						</li>

						<li>
							- Created process flow charts and time studies for various tooling
							processes
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* Eaton */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - May 2017"
					iconStyle={{ background: "#101923", color: "#fff" }}
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
							- Performed mechanical design modifications and collaborated in
							cost saving projects
						</li>

						<li>- Vendor/stakeholder management</li>
					</ul>
				</VerticalTimelineElement>
				{/* Modif Media */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="May 2016 - Aug 2017"
					iconStyle={{ background: "#101923", color: "#fff" }}
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
						<li>- Co-Founded Modif Media, a video editing company</li>

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
					iconStyle={{ background: "#101923", color: "#fff" }}
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
							- Took mechanical design projects from conception to production
							with an emphasis on cost savings and efficiency
						</li>
						<li>
							- Worked with machine shops daily, prototyping and testing the
							production of my design projects
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* OMSCS */}
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Sep 2022 - Present (Expected Graduation: 2024)"
					iconStyle={{ background: "#101923", color: "#fff" }}
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
							- Advanced my proficiency in UX/UI, designied products for human
							interaction, and reinforced core principles of interface design
						</li>
						<li>
							- Gained hands on experience using Python to tackle problems
							within different machine learning domains such as unsupervised,
							supervised, reinforcement, and deep learning
						</li>
						<li>
							- Reinforced my core fundamental software engineering concepts:
							SOLID principles, UML diagrams, object oriented design patterns,
							scalability and architecture
						</li>
					</ul>
				</VerticalTimelineElement>
				{/* Flatiron */}
				<VerticalTimelineElement
					contentStyle={{ background: "#fff", color: "#fff" }}
					date="Jan 2023 - Apr 2023"
					iconStyle={{ background: "#101923", color: "#fff" }}
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
							- Flatiron Software Engineering 2023 Cohort: Javascript, HTML,
							CSS, React JS, Python, SQLAlchemy, and Flask
						</li>
						<li>
							- Solidified industry best practices and gained extensive
							collaboration experience on numerous group projects, each focused
							on various parts of the stack
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{ background: "#111", color: "#fff" }}
					icon={<Current />}>
					<h2 className="mb-6">
						<strong>Download Resume</strong>{" "}
					</h2>
					<motion.div
						className="w-fit"
						initial={{ rotate: 0 }}
						whileHover={{
							rotate: [5, -5, 5, -5, 5, 0],
							scale: [1, 1.05, 1],
							transition: { duration: 1, type: "spring" },
						}}>
						<Dl size="2em" className="cursor-pointer" />
					</motion.div>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
