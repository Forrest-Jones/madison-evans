import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosCloseCircle as CloseButton } from "react-icons/io";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function ProjectVideo({ toggler, video }) {
	return (
		<motion.div
			className="
					z-10 flex h-[450px] w-[1000px] flex-row items-center justify-center bg-black bg-opacity-90
					">
			<motion.button
				onClick={toggler}
				className="
						text-white
						md:right-1 md:top-1
					">
				<CloseButton size="2.5em" />
			</motion.button>

			<motion.div
				layoutId="project-video"
				className="div2 my-auto h-full w-full py-2">
				<VideoPlayer videoSource={video} />
			</motion.div>
		</motion.div>
	);
}

function ProjectCard({ toggler, image }) {
	return (
		<motion.div
			layoutId="project-video"
			className="
					flex h-80 w-[1000px] cursor-pointer flex-col items-center justify-start bg-primary bg-cover bg-center object-contain py-8 text-info 
					md:mx-10"
			style={{ backgroundImage: `url(${image})` }}
			whileHover={{
				boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.3)",
				transition: { duration: 0.1 },
			}}
			onClick={toggler}
		/>
	);
}
function Project({ projectContent, image }) {
	const [showVideo, setShowVideo] = useState(true);
	const toggleVideo = () => {
		setShowVideo((prev) => !prev);
	};

	return (
		<motion.div
			layout
			className="my-12 flex flex-row items-center justify-center">
			{showVideo ? (
				<ProjectCard toggler={toggleVideo} image={image} />
			) : (
				<ProjectVideo toggler={toggleVideo} video={projectContent.video} />
			)}
			<motion.div
				layout
				className="flex h-full w-full flex-col items-center justify-center px-8">
				<motion.h2 className="my-2 h-fit w-full font-display text-3xl font-bold text-accent">
					{projectContent.title}
				</motion.h2>
				<motion.p className="items-center text-info">
					{projectContent.description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Project;
