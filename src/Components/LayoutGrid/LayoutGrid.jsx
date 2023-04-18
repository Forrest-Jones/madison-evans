import React from "react";

function LayoutGrid({ children }) {
	const navStyling =
		"md:w-40 fixed flex flex-col justify-center h-full border border-red-500";
	const contentStyling = "md:pl-40";
	const containerStyling =
		"fixed h-screen w-screen overflow-hidden overscroll-none md:h-full overflow-y-scroll overflow-x-hidden overscroll-x-hidden flex flex-row";
	return (
		<div className={containerStyling}>
			<div className={navStyling}>{children[0]}</div>
			<div className={contentStyling}>{children[1]}</div>
		</div>
	);
}

export default LayoutGrid;
