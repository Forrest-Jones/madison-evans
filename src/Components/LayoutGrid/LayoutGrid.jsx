import React from "react";

function LayoutGrid({ nav, content }) {
	return (
		<div className="fixed flex flex-col md:flex-row h-screen w-screen overflow-hidden overscroll-none">
			<div className="w-full md:w-1/5 md:h-full">{nav}</div>
			<div className="w-full md:w-4/5 bg-gray-600 md:h-full overflow-y-scroll">
				{content}
			</div>
		</div>
	);
}

export default LayoutGrid;
