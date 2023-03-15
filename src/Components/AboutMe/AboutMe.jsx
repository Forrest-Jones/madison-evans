// import profilePic from "../../assets/images/sample-image.jpeg";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import { motion } from "framer-motion";
function AboutMe() {
	return (
		<div
			style={{ height: "100vh" }}
			id="about-me"
			className="bg-white flex flex-col items-center justify-start md:flex-row md:py-24 md:px-4">
			{Introduction()}
		</div>
	);

	// introduction
	function Introduction() {
		return (
			<div
				className="
				pt-10 px-6 flex justify-center h-full flex-col w-96
				md:pl-10 md:w-full text-primary">
				<h1 className="text-2xl md:text-3xl font-bold mb-2 text-left ">
					Hi, I'm
				</h1>
				<h1
					className="display-title
					text-7xl md:text-8xl font-bold mb-2 text-left ">
					Madison
				</h1>

				<p className="text-sm md:text-lg text-gray-700 mt-12">
					I'm a passionate designer with a love for creating beautiful and
					functional digital experiences. I have experience in user interface
					design, user experience design, and graphic design.
				</p>
				<div className="flex flex-row w-full mt-10">
					<motion.a
						initial={{ scale: 1, y: 0 }}
						whileHover={{ scale: 1.1, y: -2 }}
						transition={{ type: "spring" }}
						target="_blank"
						href="https://Linkedin.com"
						rel="noreferrer">
						<Linkedin size="1.5em" />
					</motion.a>

					<motion.a
						initial={{ scale: 1, y: 0 }}
						whileHover={{ scale: 1.1, y: -2 }}
						transition={{ type: "spring" }}
						target="_blank"
						href="https://github.com"
						rel="noreferrer">
						<Github size="1.5em" className="mx-3" />
					</motion.a>
				</div>
			</div>
		);
	}

	// // Profile Pic
	// function ProfilePic() {
	// 	return (
	// 		<div className="md:w-1/2 w-full ">
	// 			<img
	// 				src={profilePic}
	// 				alt="Madison Profile"
	// 				style={{ objectFit: "cover", maxHeight: "34em", width: "100%" }}
	// 				className="md:h-3/6"
	// 			/>
	// 		</div>
	// 	);
	// }
}

export default AboutMe;
