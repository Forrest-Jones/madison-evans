import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import TypeWriterHeader from "../Effects/TypeWriterHeader";
import lightbulbGear from "../../assets/svg/lightbulbgear.svg";
import { motion } from "framer-motion";
function AboutMe() {
	return (
		<div
			style={{ height: "100vh" }}
			id="about-me"
			className="flex flex-col items-center justify-start md:flex-row md:py-24 md:px-4">
			{Introduction()}
		</div>
	);

	function Introduction() {
		return (
			<div
				className="
				z-50 mb-32 flex h-full w-full flex-col justify-center px-6
				text-info md:mb-0 md:w-full">
				<div className="flex w-full flex-row items-center justify-between md:justify-start ">
					<div className="md:ml-32">
						<h1 className="mb-2 text-left text-2xl font-bold text-primary md:text-3xl ">
							Hi, I'm
						</h1>
						<TypeWriterHeader text={"Madison"} />

						<p className="w-[90%] text-xs text-primary md:w-[360px] md:text-sm lg:w-[500px] lg:text-lg">
							I'm a full-stack software engineer with a passion for creating
							beautiful and functional digital experiences. I strive to create
							web applications that not only look great but also perform
							flawlessly
						</p>
						<div className="mt-10 flex w-full flex-row text-primaryLighter">
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
					<img
						src={lightbulbGear}
						alt="overlay"
						className="mx-auto w-[25%] md:w-[170px] lg:w-[250px] xl:w-[320px]"
					/>
				</div>
			</div>
		);
	}
}

export default AboutMe;
