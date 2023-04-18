import React from "react";

function LayoutGrid({ children }) {
	return (
		<div className="fixed flex flex-col md:flex-row h-screen w-screen overflow-hidden overscroll-none">
			{/* <div className="w-full md:w-1/5 md:h-full">{nav}</div> */}
			<div className="w-full bg-gray-600 md:h-full overflow-y-scroll overflow-x-hidden overscroll-x-hidden">
				{children}
			</div>
		</div>
	);
}

export default LayoutGrid;
