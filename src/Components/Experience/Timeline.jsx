import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { FaGraduationCap as School } from "react-icons/fa";
import { MdWork as Work } from "react-icons/md";
import TimelineElement from "./TimelineElement";
import gt from "../../assets/svg/Primary Logos/GT Extended/GTExtended_Navy.svg";
import Porex from "../../assets/svg/Porex.svg";
import Eaton from "../../assets/svg/Eaton.svg";
import Intel from "../../assets/svg/intel.svg";
import Flatiron from "../../assets/svg/flatiron.svg";
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
			skills: ["skill1", "skill2", "skill3"],
		},
		{
			icon: Work,
			employer: "Porex",
			location: "Atlanta, GA",
			role: "Engineering Intern",
			description:
				"During my undergraduate Mechanical Engineering studies, I interned at Porex Filtration Group from May to August 2015. As an engineering intern, I tackled various quality assurance tasks, honing my problem-solving and analytical skills. I reduced diameter variability for a key product, conducted Gage R&R studies, and programmed measurement routines for the SmartScope. Additionally, I authored work instruction documents and improved plant organization through tool audits and process flow charts. This diverse experience provided a strong foundation in engineering principles and adaptability, which has been invaluable in my successful transition to a software engineering career.",
			date: "May 2016 - May 2017",
			svg: Porex,
			skills: ["skill1", "skill2", "skill3"],
		},
		{
			icon: Work,
			employer: "Eaton",
			location: "Atlanta, GA",
			role: "Product Sustaining Intern",
			description:
				"From May to August 2015, I worked as a Sustaining Intern at Eaton Corporation, where I focused on optimizing products in production. Collaborating with a team, I identified opportunities to reduce costs through BOM optimization. Throughout my internship, I extensively used SolidWorks for design tasks. This experience allowed me to develop my problem-solving skills and collaboration abilities, which have been essential in my successful transition to a software engineering role, showcasing my adaptability and talent across various engineering disciplines.",
			date: "May 2015 - Aug 2015",
			svg: Eaton,
			skills: ["skill1", "skill2", "skill3"],
		},
		{
			icon: Work,
			employer: "Intel",
			location: "Phoenix, AZ",
			role: "Mechanical Engineer",
			description:
				"From June 2018 to February 2023, I served as a Mechanical Engineer in Intel's Module Repair group, working as an onsite engineering consultant. I collaborated with internal Intel engineers, developing specialized solutions for engineering challenges. My accomplishments included leading a stanchion production project that reduced costs by 30% and improved ergonomics for technicians, as well as designing 50+ 3D printed parts for rapid prototype concepts. This diverse experience has honed my problem-solving and critical thinking skills, proving invaluable in my successful transition to a software engineering role.",
			date: "Jun 2018 - Feb 2023",
			svg: Intel,
			skills: ["skill1", "skill2", "skill3"],
		},
		{
			icon: School,
			employer: "Flatiron",
			location: "Phoenix, AZ",
			role: "Full Stack Software Engineering Student",
			description:
				"Pursuing my Master's in Computer Science at Georgia Tech, I have gained valuable knowledge in various fields. In a software development course, I learned different software processes and techniques, working with Java and JUnit testing. I also took a machine learning course covering supervised, unsupervised, and reinforcement learning, applying these techniques to real-world data science problems. Additionally, I completed an introductory Human-Computer Interaction course, exploring the principles of human-computer interaction, user-centered systems design, and cutting-edge research. This diverse and comprehensive education has prepared me for a successful career in the tech industry.",
			date: "Jan 2023 - Apr 2023",
			svg: Flatiron,
			skills: ["skill1", "skill2", "skill3"],
		},
		{
			icon: School,
			employer: "Georgia Institue of Technology",
			location: "Phoenix, AZ",
			role: "Computer Science Grad Student",
			description:
				"Pursuing my Master's in Computer Science at Georgia Tech, I have gained valuable knowledge in various fields. In a software development course, I learned different software processes and techniques, working with Java and JUnit testing. I also took a machine learning course covering supervised, unsupervised, and reinforcement learning, applying these techniques to real-world data science problems. Additionally, I completed an introductory Human-Computer Interaction course, exploring the principles of human-computer interaction, user-centered systems design, and cutting-edge research. This diverse and comprehensive education has prepared me for a successful career in the tech industry.",
			date: "Jan 2022 - 2025",
			svg: gt,
			skills: ["skill1", "skill2", "skill3"],
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
						skills={item.skills}
					/>
				))}
			</motion.div>
		</LayoutGroup>
	);
};

export default Timeline;
