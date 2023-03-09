import React from "react";

import ReactPlayer from "react-player"; // import the ReactPlayer component from the package

const VideoPlayer = ({ videoSource }) => {
	return (
		<div className="w-5/6 h-full flex mx-auto">
			<ReactPlayer url={videoSource} controls width="100%" height="100%" />
		</div>
	);
};

export default VideoPlayer;
