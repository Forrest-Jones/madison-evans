import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
import colors from "../../helpers/colors";

const containerVariants = {
	closed: {},
	opened: {},
};

const ulVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.3 } }, // Add a delay to control the stagger effect
	exited: { opacity: 0, transition: { delay: 0.3 } },
};

const SkillCard = (props) => {
	const [layout, setLayout] = useState(0);
	const { title, content } = props;

	function toggleLayout() {
		layout === 0 ? setLayout(1) : setLayout(0);
	}

	const dynamicContainerStyle =
		layout === 0
			? {
					marginInline: "1rem",
					display: "flex",
					width: "15em",
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
					width: "15em",
					height: "fit",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",
					border: `1px solid ${colors.secondary}`,
					padding: "0.5rem",
					cursor: "pointer",
			  };

	const dynamicHeaderStyle =
		layout === 0
			? { display: "flex", flexDirection: "column", alignItems: "center" }
			: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%",
			  };

	return (
		<AnimatePresence mode="wait">
			<motion.div
				layout
				onClick={() => {
					toggleLayout();
				}}
				style={dynamicContainerStyle}
				variants={containerVariants} // Add variants to the container
				animate={layout === 0 ? "closed" : "opened"}>
				<div className="w-full">
					<motion.div layout style={dynamicHeaderStyle}>
						<motion.div layout>
							<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
						</motion.div>
						<motion.h2 layout className="font-display">
							{title}
						</motion.h2>
					</motion.div>

					{layout === 1 && (
						<motion.ul
							layout
							className="text-center"
							variants={ulVariants} // Add variants to the motion.ul element
							initial="hidden"
							animate="visible"
							exit="exited">
							{content.map((content, id) => {
								return <li key={id}>{content}</li>;
							})}
						</motion.ul>
					)}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SkillCard;
