import React from "react";
import { CgClose } from "react-icons/cg";

const Modal = ({ showModal, setShowModal }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="fixed w-screen h-screen bg-opacity-80 flex bg-black z-10 items-center">
				<button
					onClick={toggleModal}
					className="absolute text-white top-0 right-0 mr-10 mt-10">
					<CgClose size="4em" />
				</button>
				<div className="text-white border w-4/5 mx-auto mt-1/2 h-3/5 "></div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
