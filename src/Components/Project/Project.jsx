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
				className="h-[300px] w-[300px] overflow-hidden rounded-[6px] border md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px]">
				<VideoPlayer videoSource={video} image={image} />
				{/* <video src={video} className="h-full object-cover object-center" /> */}
			</motion.div>
			<motion.div
				layout
				className="flex max-h-[400px] w-1/2 flex-col items-center justify-center pl-8">
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
				<motion.p className="lg:text-md h-full w-full items-center overflow-auto text-sm text-info xl:text-lg">
					{projectContent.description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Project;
