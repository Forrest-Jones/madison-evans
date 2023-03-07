import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import React from "react";

const Carousel = () => {
	let [count, setCount] = useState(1);
	let [ref, { width }] = useMeasure();
	let [tuple, setTuple] = useState([null, count]); // [prev, current]

	if (tuple[1] !== count) {
		setTuple([tuple[1], count]);
	}

	let prev = tuple[0];
	let direction = count > prev ? 1 : -1;

	return (
		<div className="text-white">
			{/* button group  */}
			<div className="flex justify-between absolute z-10 w-full mt-1/2 md:w-4/5">
				<button onClick={() => setCount(count - 1)}>
					<FaAngleLeft className="h-10 w-10" />
				</button>
				<button onClick={() => setCount(count + 1)}>
					<FaAngleRight className="h-10 w-10" />
				</button>
			</div>

			{/* sliders */}
			<div className="flex justify-center h-full">
				<div
					ref={ref}
					style={{ height: "20em" }}
					className="relative overflow-hidden flex w-full  bg-gray-700 items-center justify-center">
					<AnimatePresence custom={{ direction, width }}>
						<motion.div
							key={count}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							custom={{ direction, width }}
							className={`absolute flex w-full h-full items-center justify-center ${
								colors[Math.abs(count % 4)]
							}`}
							transition={{ type: "spring", damping: 30, mass: 3 }}>
							{count}
						</motion.div>
					</AnimatePresence>
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
let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
export default Carousel;
