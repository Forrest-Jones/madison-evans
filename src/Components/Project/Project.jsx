import { motion } from "framer-motion";
import { AiFillGithub as Github } from "react-icons/ai";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { TbWorldWww as Website } from "react-icons/tb";
function Project({ projectContent, image, video }) {
	return (
		<motion.div
			layout
			className="my-12 flex flex-row items-center justify-center">
			<motion.div
				whileHover={{
					boxShadow: "16px 16px 0 0 rgba(0,0,0,.3)",
					transition: { type: "spring", duration: 0.2 },
				}}
				className="h-40 w-[400px] overflow-hidden rounded-[6px] border md:h-60 md:w-[600px] lg:h-80 lg:w-[800px]">
				<VideoPlayer videoSource={video} image={image} />
			</motion.div>
			<motion.div
				layout
				className="flex h-full w-full flex-col items-center justify-center pl-8">
				<motion.div className="my-2 flex h-fit w-full flex-col font-display text-3xl font-bold text-accent">
					<motion.h2 className="">{projectContent.title}</motion.h2>

					<div className="my-1 flex w-[70px] flex-row justify-between text-accentLighter">
						{projectContent.githubLink && (
							<a href={projectContent.githubLink}>
								<Github />
							</a>
						)}
						{projectContent.siteLink && (
							<a href={projectContent.siteLink}>
								<Website />
							</a>
						)}
					</div>
				</motion.div>
				<motion.p className="lg:text-md max-h-[200px] items-center overflow-auto overscroll-none text-sm text-info xl:text-lg">
					{projectContent.description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Project;
