import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import React from "react";
const Carousel = ({ imageArray }) => {
	let [count, setCount] = useState(1);
	let [ref, { width }] = useMeasure();
	let [tuple, setTuple] = useState([null, count]); // [prev, current]
	console.log(count);
	function handleLeftClick() {
		if (count === 1) {
			setCount(1);
		} else {
			setCount(count - 1);
		}
	}
	function handleRightClick() {
		if (count === imageArray.length) {
			setCount(imageArray.length);
		} else {
			setCount(count + 1);
		}
	}
	if (tuple[1] !== count) {
		setTuple([tuple[1], count]);
	}

	let prev = tuple[0];
	let direction = count > prev ? -1 : 1;

	return (
		<div className="text-white">
			{/* sliders */}
			<div className="flex justify-center items-center h-full">
				<div
					ref={ref}
					style={{ height: "100vh" }}
					className="relative overflow-hidden flex w-full bg-gray-700 items-center justify-center">
					<AnimatePresence custom={{ direction, width }}>
						<motion.div
							key={count}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							custom={{ direction, width }}
							className={`absolute flex w-full h-full items-center justify-center`}
							transition={{ type: "spring", damping: 30, mass: 3 }}>
							<img
								src={imageArray[count - 1]}
								alt={`${count}`}
								style={{ objectFit: "cover", height: "100%", width: "100%" }}
							/>
						</motion.div>
					</AnimatePresence>

					{/* button group */}
					<div className="absolute z-10 flex justify-between items-center w-4/5 h-full md:w-4/5">
						<button
							onClick={() => handleLeftClick()}
							className="flex items-center justify-center text-white  "
							style={{ transform: "translateX(-50%)" }}>
							<FaAngleLeft className="w-20 h-20" />
						</button>
						<button
							onClick={() => handleRightClick()}
							className="flex items-center justify-center text-white "
							style={{ transform: "translateX(50%)" }}>
							<FaAngleRight className="w-20 h-20" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

let variants = {
	enter: ({ direction, width }) => ({
		x: direction * -width,
	}),
	center: { x: 0 },
	exit: ({ direction, width }) => ({
		x: direction * width,
	}),
};

export default Carousel;
