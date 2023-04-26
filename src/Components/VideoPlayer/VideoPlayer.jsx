import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSource, image }) => {
	return (
		<ReactPlayer
			url={videoSource}
			controls
			width="100%"
			height="100%"
			style={{ backgroundColor: "transparent" }}
			light={image}
		/>
	);
};

export default VideoPlayer;
