import React from "react";

const SkillCard = (props) => {
	const { icon, title, content } = props;
	return (
		<div className="bg-pink-200 w-1/3 mx-2 mt-8 py-4 h-1/3 md:mx-6 md:my-0 md:w-1/3 rounded-md">
			<img src={icon} alt="icon" className="mx-auto" />
			<h2 className="text-center text-lg font-semibold">{title}</h2>
			<ul className="mx-6">
				{content.map((content, id) => {
					return (
						<li key={id} className="text-xs text-center">
							{content}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SkillCard;
