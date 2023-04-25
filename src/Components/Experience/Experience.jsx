import React from "react";

import Timeline from "./Timeline";

const ExperienceTimeline = () => {
	return (
		<>
			<div id="experience" className="h-fit w-full bg-primary ">
				<h1 className="w-full px-1 text-center font-display text-[4em] font-bold text-light">
					Experience
				</h1>
				<div className="flex h-full w-full flex-row items-center py-8">
					<Timeline />
				</div>
			</div>
		</>
	);
};

export default ExperienceTimeline;
