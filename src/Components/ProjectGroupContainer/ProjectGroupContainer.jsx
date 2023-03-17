import React from "react";

const ProjectGroupContainer = ({ children }) => {
	return (
		<div className="h-full">
			<div
				className=" h-full
				w-full flex flex-col px-auto justify-center items-center
				lg:flex-row ">
				{children}
			</div>
		</div>
	);
};

export default ProjectGroupContainer;
