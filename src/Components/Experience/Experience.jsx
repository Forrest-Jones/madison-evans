import React from "react";

import Timeline from "./Timeline";

const ExperienceTimeline = () => {
	return (
		<>
			<div id="experience" className="h-fit w-full bg-primary ">
				<div className="mb-12 h-32 py-24 text-center">
					<h1 className="font-display text-6xl font-bold text-info">
						Experience
					</h1>
				</div>
				<div className="flex h-full w-full flex-row items-center py-8">
					<Timeline />
				</div>
			</div>
		</>
	);
};

export default ExperienceTimeline;
