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
		? "h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px]"
		: "h-[300px] w-[400px] md:h-[400px] md:w-[500px] lg:h-[400px] lg:w-[900px]"; // Change the width when the video is playing

	return (
		<motion.div
			layout
			className="my-12 mx-8 flex flex-col items-center justify-start md:flex-row">
			<motion.div
				layout
				whileHover={{
					boxShadow: "16px 16px 0 0 rgba(0,0,0,.3)",
					transition: { type: "spring", duration: 0.2 },
				}}
				className={`${containerClassName} overflow-hidden rounded-[6px] border `}>
				<VideoPlayer
					videoSource={video}
					image={image}
					onEndedStateChange={handleVideoEndedStateChange}
				/>
			</motion.div>
			<motion.div
				layout
				className="flex max-h-[400px] w-3/4 flex-col items-center justify-center pl-8">
				<div className="my-2 flex h-fit w-full flex-col font-display text-3xl font-bold text-accent">
					<motion.h2 layout className="w-full text-center md:text-left">
						{projectContent.title}
					</motion.h2>

					<motion.div
						layout
						className="my-1 flex w-full flex-row justify-center text-accentLighter md:w-[70px] md:justify-between">
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
							<a
								target="_blank"
								rel="noreferrer"
								href={projectContent.siteLink}>
								<Website />
							</a>
						)}
					</motion.div>
				</div>
				<motion.p
					layout
					className="lg:text-md w-full items-center overflow-auto text-sm text-info xl:text-lg">
					{projectContent.description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Project;
