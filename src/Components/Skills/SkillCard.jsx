import React, { useState } from "react";
import { motion } from "framer-motion";
import colors from "../../helpers/colors";
import backend from "../../assets/svg/backend.svg";
const ulVariants = {
	hidden: { opacity: 0, transition: { delay: 0.1 } },
	visible: { opacity: 1, transition: { delay: 0.1 } },
	exited: { opacity: 0, transition: { delay: 0.1 } },
};

const SkillCard = (props) => {
	const [layout, setLayout] = useState(0);
	const { title, content, icon } = props;

	function toggleLayout() {
		layout === 0 ? setLayout(1) : setLayout(0);
	}

	const dynamicContainerStyle =
		layout === 0
			? {
					marginInline: "1rem",
					display: "flex",
					width: "20em",
					height: "16em",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",

					padding: "0.5rem",
					cursor: "pointer",
			  }
			: {
					marginInline: "1rem",
					display: "flex",
					width: "20em",
					height: "25em",
					flexDirection: "column",
					alignItems: "center",
					borderRadius: "0.5rem",
					border: `1px solid ${colors.light}`,
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
		<motion.div
			layout
			onClick={() => {
				toggleLayout();
			}}
			initial={{
				backgroundColor: colors.primaryLighter,
				transition: { duration: 0.1 },
			}}
			whileHover={{
				boxShadow: "12px 12px 0 0 rgba(0,0,0,.3)",
				transition: { type: "spring", duration: 0.2 },
			}}
			transition={{ type: "ease", duration: 0.25 }}
			style={dynamicContainerStyle}
			animate={layout === 0 ? "closed" : "opened"}>
			<motion.div layout style={dynamicHeaderStyle}>
				<motion.div layout>
					<img src={icon} alt="backend" className="my-4 h-32 w-full" />
				</motion.div>
				<motion.h2
					layout
					className="my-1 font-display text-2xl font-bold text-light">
					{title}
				</motion.h2>
			</motion.div>

			{layout === 1 && (
				<motion.ul
					layout
					className="h-60 overflow-scroll overscroll-none rounded-lg border border-light p-2"
					variants={ulVariants}
					initial="hidden"
					animate="visible"
					exit="exited">
					{content.map((content, id) => {
						return (
							<>
								{" "}
								<li>
									<h3 className="font-display text-sm font-bold text-accent">
										{content.subSkill}
									</h3>
									<ul className="text-xs text-info">
										{content.description.map((description) => {
											return <li className="mx-4 list-disc">{description}</li>;
										})}
									</ul>
								</li>
							</>
						);
					})}
				</motion.ul>
			)}
		</motion.div>
	);
};

export default SkillCard;
