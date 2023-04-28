import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSource, image }) => {
	const playerRef = useRef(null);
	const [ended, setEnded] = React.useState(true);

	const handleEnded = () => {
		setEnded(true);
		playerRef.current.seekTo(0);
	};

	const handlePlay = () => {
		setEnded(false);
	};

	const handlePause = () => {
		// No need to update any state here
	};

	const showThumbnail = ended; // Show thumbnail when video is ended

	return (
		<ReactPlayer
			ref={playerRef}
			url={videoSource}
			controls
			width="100%"
			height="100%"
			style={{ backgroundColor: "black" }}
			light={showThumbnail ? image : false} // Use 'showThumbnail' to decide when to show the image
			onEnded={handleEnded}
			onPlay={handlePlay}
			onPause={handlePause}
		/>
	);
};

export default VideoPlayer;
