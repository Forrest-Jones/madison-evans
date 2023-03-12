import { motion } from "framer-motion";
import { useContext } from "react";
import ModalContext from "../../helpers/ModalContext";

function Project({ setShowModal, showModal, projectContent, image }) {
	const { setModalContent } = useContext(ModalContext);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const handleProjectClick = () => {
		setModalContent(projectContent);
		toggleModal();
	};

	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.05, y: -10 }}
			transition={{ type: "spring", duration: 0.5 }}
			className="md:h-64 md:w-64 md:my-0 my-4 w-40 h-40 mx-4 bg-center bg-cover cursor-pointer rounded-lg"
			style={{ backgroundImage: `url(${image})` }}
			onClick={handleProjectClick}
		/>
	);
}

export default Project;
