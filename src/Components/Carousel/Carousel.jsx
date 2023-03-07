import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Carousel = () => {
	let [count, setCount] = useState(1);

	return (
		<div className="text-white">
			<div className="flex justify-between">
				<button onClick={() => setCount(count - 1)}>
					<FaAngleLeft className="h-10 w-10" />
				</button>
				<button onClick={() => setCount(count + 1)}>
					<FaAngleRight className="h-10 w-10" />
				</button>
			</div>

			<div className="mt-8 flex justify-center">
				<div className="relative overflow-hidden flex w-24 h-24 bg-gray-700 items-center justify-center">
					<AnimatePresence>
						<motion.div
							key={count}
							initial={{ x: 100 }}
							animate={{ x: 0 }}
							exit={{ x: -100 }}
							className={`absolute flex w-20 h-20 items-center justify-center ${
								colors[Math.abs(count % 4)]
							}`}>
							{count}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};
let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
export default Carousel;
