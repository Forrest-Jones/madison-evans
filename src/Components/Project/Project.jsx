import { motion } from "framer-motion";
function Project({ setShowModal, image, showModal }) {
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", duration: 1 }}
			className="md:h-64 md:w-64 md:my-0 my-4 w-40 h-40 mx-4 bg-center bg-cover cursor-pointer"
			style={{ backgroundImage: `url(${image})` }}
			onClick={toggleModal}></motion.div>
	);
}

export default Project;
