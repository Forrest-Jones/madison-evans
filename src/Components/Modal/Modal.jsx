import React from "react";

const Modal = ({ showModal, setShowModal }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="absolute w-full h-full bg-opacity-80  bg-black z-10">
				<button onClick={toggleModal} className="absolute text-white">
					close
				</button>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
