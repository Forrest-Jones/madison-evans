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
		<div className="my-12 flex flex-row items-center justify-center">
			<motion.div
				layoutId="project-video"
				className="
				flex h-80 w-96 cursor-pointer flex-col items-center justify-start rounded-md bg-primary bg-cover bg-center object-contain py-8 text-info 
				md:mx-10"
				style={{ backgroundImage: `url(${image})` }}
				whileHover={{
					boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.3)",
					transition: { duration: 0.1 },
				}}
				onClick={handleProjectClick}
			/>
			<div className="flex h-full w-full flex-col px-8">
				<h2 className="my-2 font-display text-3xl font-bold text-accent">
					{projectContent.title}
				</h2>
				<p className="items-center text-info">{projectContent.description}</p>
			</div>
		</div>
	);
}

export default Project;
