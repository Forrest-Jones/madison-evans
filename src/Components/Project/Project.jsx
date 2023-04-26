import { motion } from "framer-motion";
import { AiFillGithub as Github } from "react-icons/ai";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { TbWorldWww as Website } from "react-icons/tb";
function Project({ projectContent, image, video }) {
	return (
		<motion.div
			layout
			className="my-12 flex flex-row items-center justify-center">
			<div className="h-80 w-[800px]">
				<VideoPlayer videoSource={video} image={image} />
			</div>
			<motion.div
				layout
				className="flex h-full w-full flex-col items-center justify-center px-8">
				<motion.div className="my-2 flex h-fit w-full flex-col font-display text-3xl font-bold text-accent">
					<motion.h2 className="">{projectContent.title}</motion.h2>

					<div className="flex w-[70px] flex-row justify-between">
						{projectContent.githubLink && <Github />}
						{projectContent.siteLink && <Website />}
					</div>
				</motion.div>
				<motion.p className="items-center text-info">
					{projectContent.description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Project;
