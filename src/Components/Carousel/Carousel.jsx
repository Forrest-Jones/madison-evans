import React, { useState } from "react";

function Carousel(props) {
	const [current, setCurrent] = useState(0);
	const { children } = props;

	const handlePrevClick = () => {
		setCurrent(current === 0 ? children.length - 1 : current - 1);
	};

	const handleNextClick = () => {
		setCurrent(current === children.length - 1 ? 0 : current + 1);
	};

	return (
		<div className="relative w-full h-screen">
			{children[current]}
			{RightButton()}
			{LeftButton()}
		</div>
	);

	function LeftButton() {
		return (
			<div className="absolute top-0 bottom-0 right-0 flex items-center">
				<button
					className="text-white bg-gray-500 hover:bg-gray-600 rounded-full px-3 py-2 mr-2 focus:outline-none"
					onClick={handleNextClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M8.793 15.707a1 1 0 001.414 0l5.657-5.657a1 1 0 000-1.414L10.207 4.3a1 1 0 00-1.414 1.414L12.586 10l-3.793 3.793a1 1 0 000 1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		);
	}

	function RightButton() {
		return (
			<div className="absolute top-0 bottom-0 left-0 flex items-center">
				<button
					className="text-white bg-gray-500 hover:bg-gray-600 rounded-full px-3 py-2 ml-2 focus:outline-none"
					onClick={handlePrevClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M11.207 4.293a1 1 0 00-1.414 0L4.336 9.293a1 1 0 000 1.414L9.793 16.7a1 1 0 001.414-1.414L7.414 10l3.793-3.793a1 1 0 000-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		);
	}
}

export default Carousel;
