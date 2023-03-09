import React from "react";
import { CgClose } from "react-icons/cg";

const Modal = ({ showModal, setShowModal }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="fixed w-full h-full bg-opacity-80  bg-black z-10 ">
				<button
					onClick={toggleModal}
					className="absolute text-white top-0 right-0 mr-10 mt-10">
					<CgClose size="4em" />
				</button>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
