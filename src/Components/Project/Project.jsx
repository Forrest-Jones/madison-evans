import { motion } from "framer-motion";
import { useContext } from "react";
import ModalContext from "../../helpers/ModalContext";
import sampleVid from "../../assets/palette.mp4";
function Project({ setShowModal, image, showModal }) {
	const modalContent = {
		title: "Palette Pal",
		description:
			"Palette pal is a really cool app. I'm pretty proud of it, therefore, I'm taking this time to make a dummy description for a modal I'm making. In the real thing, this text will actually be meaningful, but rn, I'm just using it to fill out some space and allow me to see how things will eventually be layed out... so... yeah... Here I am. just filling out space. you know me. the usual. lol. asdf. asdf asdf asdf  fjasld;gk; asd;gjkas llaskjdhg laskdh lkajshdglakjshd lgjkashd lgkjhasldkgjhalsdk ga  alskjdgh laksjdgh lkajshdg jkashd glkajsh dglkjahsd lgjkl  s",
		video: sampleVid,
		githubLink: "https://github.com/MadisonEvans94/",
		siteLink: "https://palettepal.herokuapp.com/",
	};
	const { setModalContent } = useContext(ModalContext);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const handleProjectClick = () => {
		setModalContent(modalContent);
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
