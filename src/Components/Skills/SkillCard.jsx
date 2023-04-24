import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsWindowFullscreen as Frontend } from "react-icons/bs";

const SkillCard = (props) => {
	const { icon, title, content } = props;
	const [boxShadowActive, setBoxShadowActive] = useState(false);

	const toggleBoxShadow = () => {
		setBoxShadowActive(!boxShadowActive);
	};

	return (
		<motion.div
			layout
			initial={{ scale: 1 }}
			onClick={toggleBoxShadow}
			className="mx-4 flex w-60 cursor-pointer flex-col items-center rounded-lg border border-secondary p-2 transition hover:bg-light hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.3)]">
			<motion.div
				layout
				transition={{ type: "spring", damping: 20, stiffness: 80 }}>
				<motion.div className="flex flex-col items-center" layout>
					<Frontend className="h-24 w-24 text-accent lg:h-36 lg:w-36" />
					<h2 className="color-black font-display text-lg  font-bold">
						{title}
					</h2>
				</motion.div>

				<ul
					initial={{ opacity: 0, y: 30 }}
					transition={{ type: "spring" }}
					className="">
					{content.map((content, id) => {
						return (
							<motion.li layout key={id} className="">
								{content}
							</motion.li>
						);
					})}
				</ul>
			</motion.div>
		</motion.div>
	);
};

export default SkillCard;
