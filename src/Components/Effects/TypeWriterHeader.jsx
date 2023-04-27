import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import colors from "../../helpers/colors";
const TypeWriterHeader = ({ text }) => {
	return (
		<div className="font-dispaly h-fit text-[3em] font-bold text-accent md:text-[4em]">
			<TypeWriterEffect
				startDelay={10}
				cursorColor={colors.info}
				multiText={[text]}
				multiTextDelay={0}
				typeSpeed={300}
			/>
		</div>
	);
};

export default TypeWriterHeader;
