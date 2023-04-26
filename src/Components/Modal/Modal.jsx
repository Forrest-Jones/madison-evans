import React from "react";
import { IoIosCloseCircle as CloseButton } from "react-icons/io";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { motion } from "framer-motion";
const Modal = ({ showModal, setShowModal, modalContent }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<motion.div
				className="
				fixed z-10 flex h-screen w-full flex-row items-center justify-center bg-black bg-opacity-90
				">
				<motion.button
					onClick={toggleModal}
					className="
						absolute -right-10 -top-10 text-white
						md:right-1 md:top-1
						">
					<CloseButton size="2.5em" />
				</motion.button>

				<motion.div className="div2 my-auto h-5/6 w-5/6 py-2">
					<VideoPlayer videoSource={modalContent.video} />
				</motion.div>
			</motion.div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
