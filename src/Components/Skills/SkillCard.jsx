import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
import colors from "../../helpers/colors";

const ulVariants = {
	hidden: { opacity: 0, transition: { delay: 0.3 } },
	visible: { opacity: 1, transition: { delay: 0.3 } },
	exited: { opacity: 0, transition: { delay: 0.3 } },
};

const SkillCard = (props) => {
	const [layout, setLayout] = useState(0);
	const { title, content } = props;

	function toggleLayout() {
		layout === 0 ? setLayout(1) : setLayout(0);
	}

	const dynamicContainerStyle = {
		marginInline: "1rem",
		display: "flex",
		width: "15em",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: "0.5rem",
		border: `1px solid ${colors.secondary}`,
		padding: "0.5rem",
		cursor: "pointer",
		height: layout === 1 ? "auto" : "fit-content",
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
		<motion.div
			layout
			onClick={() => {
				toggleLayout();
			}}
			style={dynamicContainerStyle}
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
						variants={ulVariants}
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
	);
};

export default SkillCard;
