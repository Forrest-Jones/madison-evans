import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import TypeWriterHeader from "../Effects/TypeWriterHeader";
import { motion } from "framer-motion";
function AboutMe() {
	return (
		<div
			style={{ height: "100vh" }}
			id="about-me"
			className=" flex flex-col items-center justify-start md:flex-row md:py-24 md:px-4">
			{Introduction()}
		</div>
	);

	function Introduction() {
		return (
			<div
				className="
				pt-10 px-6 flex justify-center h-full flex-col w-96
				md:pl-10 md:w-full text-info">
				<h1 className="text-2xl md:text-3xl font-bold mb-2 text-left ">
					Hi, I'm
				</h1>
				<TypeWriterHeader text={"Madison"} />

				<p
					className="text-sm md:text-lg text-gray-700 
					lg:w-[800px]">
					I'm a full-stack software engineer with a passion for creating
					beautiful and functional digital experiences. I strive to create web
					applications that not only look great but also perform flawlessly
				</p>
				<div className="flex flex-row w-full mt-10">
					<motion.a
						initial={{ scale: 1, y: 0 }}
						whileHover={{ scale: 1.1, y: -2 }}
						transition={{ type: "spring" }}
						target="_blank"
						href="https://www.linkedin.com/in/madison-evans-98a350a3/"
						rel="noreferrer">
						<Linkedin size="1.5em" />
					</motion.a>

					<motion.a
						initial={{ scale: 1, y: 0 }}
						whileHover={{ scale: 1.1, y: -2 }}
						transition={{ type: "spring" }}
						target="_blank"
						href="https://github.com/MadisonEvans94"
						rel="noreferrer">
						<Github size="1.5em" className="mx-3" />
					</motion.a>
				</div>
			</div>
		);
	}
}

export default AboutMe;
