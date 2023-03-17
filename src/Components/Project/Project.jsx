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
		<>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.05, y: -10 }}
				transition={{ type: "spring", duration: 0.5 }}
				className=" relative
				my-4 w-32 h-32 mx-4 bg-center bg-cover cursor-pointer rounded-lg
				md:h-32 md:w-32
				lg:my-0 lg:h-48 lg:w-48"
				style={{ backgroundImage: `url(${image})` }}
				onClick={handleProjectClick}></motion.div>
		</>
	);
}

export default Project;
