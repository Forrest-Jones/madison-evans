import { useState } from "react";
import * as Icons from "@heroicons/react/solid";
import React from "react";

const Carousel = () => {
	let [count, setCount] = useState(1);

	return (
		<div className="text-white">
			<div className="flex justify-between">
				<button onClick={() => setCount(count - 1)}>Prev</button>
				<button onClick={() => setCount(count + 1)}>Next</button>
			</div>

			<div className="mt-8 flex justify-center">
				<div className="flex w-24 h-24 bg-gray-700 items-center justify-center">
					<div className="w-20 h-20 bg-red-500">{count}</div>
				</div>
			</div>
		</div>
	);
};
export default Carousel;
