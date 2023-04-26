import React from "react";

import ReactPlayer from "react-player"; // import the ReactPlayer component from the package

const VideoPlayer = ({ videoSource }) => {
	return (
		<ReactPlayer
			url={videoSource}
			controls
			width="100%"
			height="100%"
			style={{ backgroundColor: "transparent" }}
		/>
	);
};

export default VideoPlayer;
