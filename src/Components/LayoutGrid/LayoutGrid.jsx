import React from "react";

function LayoutGrid({ children }) {
	const navStyling =
		"z-30 w-full h-28 md:h-full md:w-40 md:fixed flex-col justify-center";

	const contentStyling = "md:pl-40 w-full";

	const containerStyling =
		"w-screen background-gradient overflow-hidden overscroll-none md:h-full overflow-y-scroll overflow-x-hidden overscroll-x-hidden flex flex-col md:flex-row";

	return (
		<div className={containerStyling}>
			<div className={navStyling}>{children[0]}</div>
			<div className={contentStyling}>{children[1]}</div>
		</div>
	);
}

export default LayoutGrid;
