import React from "react";

const ProjectGroupContainer = ({ children }) => {
	return (
		<div className="h-full">
			<div
				className=" h-full
				w-full flex flex-col px-auto justify-start items-center pt-12
				lg:justify-center lg:pt-0 lg:pb-12
				lg:flex-row ">
				{children}
			</div>
		</div>
	);
};

export default ProjectGroupContainer;
