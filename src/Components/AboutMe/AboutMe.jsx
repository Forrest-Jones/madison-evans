import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import TypeWriterHeader from "../Effects/TypeWriterHeader";
import overlay from "./overlay.png";
import { motion } from "framer-motion";
function AboutMe() {
	return (
		<div
			style={{ height: "100vh" }}
			id="about-me"
			className="flex flex-col items-center justify-start bg-primary md:flex-row md:py-24 md:px-4">
			{Introduction()}
		</div>
	);

	function Introduction() {
		return (
			<div
				className="
				z-50 ml-[400px] flex h-full w-96 flex-col justify-center
				px-6 pt-10 text-info md:w-full md:items-start md:pl-10">
				<div>
					<h1 className="mb-2 text-left text-2xl font-bold md:text-3xl ">
						Hi, I'm
					</h1>
					<TypeWriterHeader text={"Madison"} />
					{/* <img
						src={overlay}
						alt="overlay"
						className="absolute top-[170px] left-[400px] -z-10 w-[75%]"
					/> */}
					<p
						className="text-sm text-info md:text-lg 
					lg:w-[500px]">
						I'm a full-stack software engineer with a passion for creating
						beautiful and functional digital experiences. I strive to create web
						applications that not only look great but also perform flawlessly
					</p>
					<div className="mt-10 flex w-full flex-row">
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
			</div>
		);
	}
}

export default AboutMe;
