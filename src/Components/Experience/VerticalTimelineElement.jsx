import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { InView } from "react-intersection-observer";

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
}) => (
	<InView {...intersectionObserverProps}>
		{({ inView, ref }) => (
			<div
				ref={ref}
				id={id}
				className="shadow-[20px_20px_0_0_rgba(0,0,0,0.3)] border border-secondary p-2 rounded-lg mb-10 mr-12"
				style={style}>
				<React.Fragment>
					<span // eslint-disable-line jsx-a11y/no-static-element-interactions
						style={iconStyle}
						onClick={iconOnClick}
						className={classNames(
							iconClassName,
							"vertical-timeline-element-icon",
							{
								"bounce-in": inView || visible,
								"is-hidden": !(inView || visible),
							}
						)}>
						{icon}
					</span>
					<div
						style={contentStyle}
						onClick={onTimelineElementClick}
						className={classNames(
							textClassName,
							"vertical-timeline-element-content",
							{
								"bounce-in": inView || visible,
								"is-hidden": !(inView || visible),
							}
						)}>
						<div
							style={contentArrowStyle}
							className="vertical-timeline-element-content-arrow"
						/>
						{children}
						<span
							className={classNames(
								dateClassName,
								"vertical-timeline-element-date"
							)}>
							{date}
						</span>
					</div>
				</React.Fragment>
			</div>
		)}
	</InView>
);

VerticalTimelineElement.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	className: PropTypes.string,
	contentArrowStyle: PropTypes.shape({}),
	contentStyle: PropTypes.shape({}),
	date: PropTypes.node,
	dateClassName: PropTypes.string,
	icon: PropTypes.element,
	iconClassName: PropTypes.string,
	iconStyle: PropTypes.shape({}),
	iconOnClick: PropTypes.func,
	onTimelineElementClick: PropTypes.func,
	id: PropTypes.string,
	position: PropTypes.string,
	style: PropTypes.shape({}),
	textClassName: PropTypes.string,
	visible: PropTypes.bool,
	intersectionObserverProps: PropTypes.shape({
		root: PropTypes.object,
		rootMargin: PropTypes.string,
		threshold: PropTypes.number,
		triggerOnce: PropTypes.bool,
	}),
};

export default VerticalTimelineElement;
