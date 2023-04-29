import React from "react";
import PageHeader from "../PageHeader";
import Timeline from "./Timeline";

const ExperienceTimeline = () => {
	return (
		<>
			<div id="experience" className="h-fit w-full">
				<PageHeader title="Experience" />
				<div className="flex h-full w-full flex-row items-center py-8">
					<Timeline />
				</div>
			</div>
		</>
	);
};

export default ExperienceTimeline;
