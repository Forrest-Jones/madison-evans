import React from "react";

const ProjectGroupContainer = ({ children }) => {
	return (
		<div
			style={{ height: "100vh" }}
			className="
			w-full bg-white flex flex-col px-auto justify-center items-center
			lg:flex-row ">
			{children}
		</div>
	);
};

export default ProjectGroupContainer;
