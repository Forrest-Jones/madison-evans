import { motion } from "framer-motion";
import { AiFillGithub as Github } from "react-icons/ai";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { TbWorldWww as Website } from "react-icons/tb";
function Project({ projectContent, image, video }) {
	const [videoEnded, setVideoEnded] = useState(true);

	const handleVideoEndedStateChange = (ended) => {
		setVideoEnded(ended);
	};

	const containerClassName = videoEnded
		? "h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[400px]"
		: "h-full w-full md:h-full md:w-full lg:h-[300px] lg:w-[900px]";

	return (
		<motion.div
			layout
			className="my-12 flex flex-col items-center justify-start lg:flex-row">
			<motion.div
				layout
				className="flex max-h-[400px] w-full flex-col items-center justify-center lg:ml-4">
				<motion.div
					layout
					className="my-2 flex h-fit w-full flex-col font-display text-3xl font-bold text-accent">
					<motion.h2 layout className="h-fit w-fit text-center md:text-left">
						{projectContent.title}
					</motion.h2>

					<motion.div
						layout
						className="my-1 flex w-full flex-row justify-start text-accentLighter md:w-[70px] md:justify-between">
						{projectContent.githubLink && (
							<motion.a
								layout
								target="_blank"
								rel="noreferrer"
								href={projectContent.githubLink}>
								<Github />
							</motion.a>
						)}
						{projectContent.siteLink && (
							<motion.a
								layout
								target="_blank"
								rel="noreferrer"
								href={projectContent.siteLink}>
								<Website />
							</motion.a>
						)}
					</motion.div>
				</motion.div>
				<motion.p
					layout
					className="lg:text-md h-fit w-fit items-center overflow-auto text-sm text-info xl:text-lg">
					{projectContent.description}
				</motion.p>
			</motion.div>
			<motion.div
				layout
				whileHover={{
					boxShadow: "16px 16px 0 0 rgba(0,0,0,.3)",
					transition: { type: "spring", duration: 0.2 },
				}}
				className={`${containerClassName} mt-6 overflow-hidden rounded-[6px] border lg:ml-6 lg:mt-0`}>
				<VideoPlayer
					videoSource={video}
					image={image}
					onEndedStateChange={handleVideoEndedStateChange}
				/>
			</motion.div>
		</motion.div>
	);
}

export default Project;
