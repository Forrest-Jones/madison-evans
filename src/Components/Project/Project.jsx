import React, { useState } from "react";
import Modal from "../Modal/Modal";

function Project(props) {
	const [displayModal, setDisplayModal] = useState(false);

	const toggleModal = () => {
		setDisplayModal(!displayModal);
	};

	return (
		<div
			className="h-64 w-64 mx-4 bg-center bg-cover cusor-pointer"
			style={{ backgroundImage: `url(${props.image})` }}
			onClick={toggleModal}>
			{displayModal && <Modal toggleModal={toggleModal} />}
		</div>
	);
}

export default Project;
