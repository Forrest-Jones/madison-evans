import React from "react";
import { motion } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
import { useState } from "react";
import colors from "../../helpers/colors";
const SkillCard = (props) => {
	const [layout, setLayout] = useState(0);
	const { title, content } = props;
	const closedLayout =
		"mx-4 flex w-60 cursor-pointer flex-col items-center rounded-lg border border-secondary p-2 hover:bg-light hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.3)]";
	const openedLayout =
		"absolute cursor-pointer rounded-lg border border-secondary w-full";
	function toggleLayout() {
		layout === 0 ? setLayout(1) : setLayout(0);
	}
	const dynamicStyle =
		layout === 0
			? {
					marginInline: "1rem",
					display: "flex",
					width: "15rem",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",
					border: `1px solid ${colors.secondary}`,
					padding: "0.5rem",
					cursor: "pointer",
			  }
			: {
					marginInline: "1rem",
					display: "flex",
					width: "30em",
					height: "30em",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",
					border: `1px solid ${colors.secondary}`,
					padding: "0.5rem",
					cursor: "pointer",
			  };
	return (
		<motion.div
			layout
			onClick={() => {
				toggleLayout();
			}}
			style={dynamicStyle}>
			<div>
				<div className="flex flex-col items-center">
					<motion.div layout>
						<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
					</motion.div>
					<motion.h2 layout className="font-display text-lg font-bold">
						{title}
					</motion.h2>
				</div>

				<ul>
					{content.map((content, id) => {
						return <li key={id}>{content}</li>;
					})}
				</ul>
			</div>
		</motion.div>
	);
};

export default SkillCard;
