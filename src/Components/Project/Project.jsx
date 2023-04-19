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
				whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
				viewport={{ amount: 1, once: true }}
				transition={{ type: "spring", duration: 1 }}
				className="
				object-contain bg-center bg-cover w-48 h-48 cursor-pointer bg-primary text-info mt-8 py-8 rounded-xl flex flex-col items-center justify-start transition hover:shadow-[20px_20px_0_0_rgba(0,0,0,.3)]
				md:mx-4"
				style={{ backgroundImage: `url(${image})` }}
				onClick={handleProjectClick}></motion.div>
		</>
	);
}

export default Project;
