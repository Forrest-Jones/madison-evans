import React, { useState } from "react";
import Modal from "../Modal/Modal";

function Project(props) {
	const [displayModal, setDisplayModal] = useState(false);

	const toggleModal = () => {
		setDisplayModal(!displayModal);
	};

	return (
		<div
			className="h-full w-full bg-center bg-cover border border-white"
			style={{ backgroundImage: `url(${props.image})` }}
			onClick={toggleModal}>
			{displayModal && <Modal toggleModal={toggleModal} />}
			test
		</div>
	);
}

export default Project;
