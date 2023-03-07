import React from "react";

const SkillCard = ({ title, icon, content }) => {
	console.log(icon);
	return (
		<div className="bg-pink-200 w-1/3 mx-2 mt-8 h-1/3 md:mx-6 md:my-0 md:w-1/3 rounded-md">
			<img src={icon} alt="icon" />
			<h2 className="text-center">{title}</h2>
			<ul>
				{content.map((item, id) => {
					return <li key={id}> {item}</li>;
				})}
			</ul>
		</div>
	);
};

export default SkillCard;
