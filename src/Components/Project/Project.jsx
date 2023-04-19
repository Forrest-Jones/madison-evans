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
				initial={{ scale: 1, opacity: 0, y: 50 }}
				whileHover={{
					scale: 1.04,
					y: -5,
					opacity: 1,
					transition: { type: "spring", bounce: 0.4 },
				}}
				whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				viewport={{ amount: 1, once: true }}
				transition={{ type: "spring", duration: 1 }}
				className="shadow-[20px_20px_0_0_rgba(0,0,0,0.3)] relative
				my-4 w-32 h-32 mx-4 bg-center bg-cover cursor-pointer rounded-lg
				md:h-32 md:w-32
				lg:my-0 lg:h-48 lg:w-48"
				style={{ backgroundImage: `url(${image})` }}
				onClick={handleProjectClick}></motion.div>
		</>
	);
}

export default Project;
