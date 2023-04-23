import React from "react";
import classNames from "classnames";
import { InView } from "react-intersection-observer";
import { useState } from "react";
const VerticalTimelineElement = ({
	children = "",
	className = "",
	contentArrowStyle = null,
	contentStyle = null,
	date = "",
	dateClassName = "",
	icon = null,
	iconClassName = "",
	iconOnClick = null,
	onTimelineElementClick = null,
	iconStyle = null,
	id = "",
	position = "",
	style = null,
	textClassName = "",
	intersectionObserverProps = {
		rootMargin: "0px 0px -40px 0px",
		triggerOnce: true,
	},
	visible = false,
}) => {
	const [boxShadowActive, setBoxShadowActive] = useState(false);

	const toggleBoxShadow = () => {
		setBoxShadowActive(!boxShadowActive);
	};
	return (
		<InView {...intersectionObserverProps}>
			{({ inView, ref }) => (
				<div
					ref={ref}
					id={id}
					className="hover:bg-light cursor-pointer hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.3)] border border-secondary p-2 rounded-lg mb-10 mr-12 transition"
					style={style}>
					<span style={iconStyle} onClick={iconOnClick}>
						{icon}
					</span>
					<div style={contentStyle} onClick={onTimelineElementClick}>
						{children}
						<span className="text-secondary">{date}</span>
					</div>
				</div>
			)}
		</InView>
	);
};

export default VerticalTimelineElement;
