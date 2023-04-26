import React from "react";

import ReactPlayer from "react-player"; // import the ReactPlayer component from the package

const VideoPlayer = ({ videoSource }) => {
	return (
		<div className="flex h-full w-full">
			<ReactPlayer url={videoSource} controls width="100%" height="100%" />
		</div>
	);
};

export default VideoPlayer;
