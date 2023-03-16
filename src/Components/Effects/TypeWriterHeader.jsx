import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const TypeWriterHeader = ({ text }) => {
	return (
		<div className="h-32">
			<TypeWriterEffect
				textStyle={{
					color: "#101923",
					fontWeight: 700,
					fontSize: "4.5em",
				}}
				startDelay={10}
				cursorColor="#101923"
				multiText={["Madison"]}
				multiTextDelay={0}
				typeSpeed={300}
			/>
		</div>
	);
};

export default TypeWriterHeader;
