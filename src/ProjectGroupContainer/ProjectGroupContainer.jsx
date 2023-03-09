import React from "react";

const ProjectGroupContainer = ({ children }) => {
	return (
		<div
			style={{ height: "100vh" }}
			className="w-full border border-white flex flex-row px-auto justify-center items-center">
			{children}
		</div>
	);
};

export default ProjectGroupContainer;
