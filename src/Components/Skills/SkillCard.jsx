import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";
import colors from "../../helpers/colors";

const ulVariants = {
	hidden: { opacity: 0, transition: { delay: 0.1 } },
	visible: { opacity: 1, transition: { delay: 0.1 } },
	exited: { opacity: 0, transition: { delay: 0.1 } },
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
					height: "25em",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",
					border: `1px solid ${colors.secondary}`,
					padding: "0.5rem",
					cursor: "pointer",
					backgroundColor: colors.light,
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
			initial={{
				backgroundColor: colors.primary,
				transition: { duration: 0.1 },
			}}
			whileHover={{
				// backgroundColor: colors.light,
				boxShadow: "16px 16px 0 0 rgba(0,0,0,.3)",
				transition: { duration: 0.1 },
			}}
			transition={{ type: "ease", duration: 0.25 }}
			style={dynamicContainerStyle}
			animate={layout === 0 ? "closed" : "opened"}>
			<motion.div layout style={dynamicHeaderStyle}>
				<motion.div layout>
					<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
				</motion.div>
				<motion.h2 layout className="my-1 font-display text-2xl font-bold">
					{title}
				</motion.h2>
			</motion.div>

			{layout === 1 && (
				<motion.ul
					layout
					className="h-60 overflow-scroll rounded-lg border border-secondary bg-darker p-4"
					variants={ulVariants}
					initial="hidden"
					animate="visible"
					exit="exited">
					{/* {content.map((content, id) => {
							return <li key={id}>{content}</li>;
						})} */}
					<li>
						<h3 className="font-display text-sm font-bold text-accent">
							HTML, CSS, Javascript
						</h3>
						<p className="text-xs text-info">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							eaque suscipit nulla voluptas vel ex, sequi pariatur expedita.
						</p>
					</li>

					<li>
						<h3 className="font-display text-sm font-bold text-accent">
							React
						</h3>
						<p className="text-xs text-info">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							eaque suscipit nulla voluptas vel ex, sequi pariatur expedita.
						</p>
					</li>
				</motion.ul>
			)}
		</motion.div>
	);
};

export default SkillCard;
