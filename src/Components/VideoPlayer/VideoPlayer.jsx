import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSource, image, onEndedStateChange }) => {
	const playerRef = useRef(null);
	const [ended, setEnded] = React.useState(true);

	React.useEffect(() => {
		onEndedStateChange(ended);
	}, [ended, onEndedStateChange]);

	const handleEnded = () => {
		setEnded(true);
		playerRef.current.seekTo(0);
	};

	const handlePlay = () => {
		setEnded(false);
	};

	const showThumbnail = ended;

	const handleThumbnailClick = () => {
		if (ended) {
			setEnded(false);
		}
	};

	return (
		<ReactPlayer
			ref={playerRef}
			url={videoSource}
			controls
			width="100%"
			height="100%"
			style={{ backgroundColor: "black" }}
			light={showThumbnail ? image : false}
			onEnded={handleEnded}
			onPlay={handlePlay}
			onClickPreview={handleThumbnailClick} // Add this prop
		/>
	);
};

export default VideoPlayer;
