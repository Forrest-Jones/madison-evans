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
			className="cursor-pointer border hover:bg-light border-secondary rounded-lg mx-4 p-2 w-60 flex flex-col items-center hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.3)] transition">
			<motion.div
				layout
				transition={{ type: "spring", damping: 20, stiffness: 80 }}>
				<motion.div className="flex flex-col items-center" layout>
					<Frontend className="text-accent w-24 h-24 lg:w-36 lg:h-36" />
					<h2 className="font-bold font-display text-lg">{title}</h2>
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
