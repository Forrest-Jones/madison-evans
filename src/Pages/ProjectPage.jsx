import React from "react";
import ProjectGroupContainer from "../Components/ProjectGroupContainer/ProjectGroupContainer";
import palettePalVid from "../assets/palette.mp4";
import blueCloudVid from "../assets/blue-cloud.mp4";
import dropTheBallVid from "../assets/drop-the-ball.mp4";
import image1 from "../assets/images/palette-pal-img.png";
import image2 from "../assets/images/blue-cloud-img.png";
import image3 from "../assets/images/drop-the-ball-img.png";
import Project from "../Components/Project/Project";
import ModalContext from "../helpers/ModalContext";
// Palette Pal
const project1Content = {
	title: "Palette Pal",
	description: `"Palette Pal" is a React-based web app that enables users to upload images and create color palettes by breaking down the image into its constituent pixels and projecting them into RGB color space. The app employs a K-means clustering algorithm to cluster similar pixels and generate a specified number of colors to represent the image. Users can select the number of colors they want in their palette and copy the corresponding hex codes for use in their design projects. The app runs entirely client-side, including the clustering algorithm, to ensure maximum performance. "Palette Pal" is an excellent tool for developers and designers who want to create color themes quickly based on images.`,
	video: palettePalVid,
	githubLink: "https://github.com/MadisonEvans94/",
	siteLink: "https://palettepal.herokuapp.com/",
};
// BlueCloud
const project2Content = {
	title: "Blue Cloud Music",
	description: `"Blue Cloud Music" is a personal music website that I created using React and Django. As an artist, producer, and audio engineer with over a decade of experience, I am incredibly proud of this project, which showcases my music and creative abilities. The site features captivating animations, UI, and other design principles that I poured my heart into during the development process. Through this site, I am able to connect with my fans and share my music with the world. In addition, I plan to sell sample packs and plugins that I'm currently working on. "Blue Cloud Music" is a creative venture that allows me to express myself musically and share my passion with others.`,
	video: blueCloudVid,
	githubLink: "https://github.com/MadisonEvans94/",
	siteLink: "https://bluecloudmusic.herokuapp.com",
};
// DropTheBall
const project3Content = {
	title: "Drop the Ball",
	description: `"Drop The Ball" is an interactive game developed using Vanilla Javascript and HTML Canvas, featuring animation and physics simulation. The game involves dropping a ball into a virtual peg board where the ball adheres to gravity and bounces off the pegs. The physics simulation is implemented using mathematical equations to accurately simulate the ball's movement and collision with the pegs. The HTML canvas is used to render the game graphics and create the user interface. Overall, 'Drop The Ball' is a fun and engaging project that showcases the power of Vanilla Javascript and HTML Canvas for game development.`,
	video: dropTheBallVid,
	githubLink: "https://github.com/MadisonEvans94/phase-1-Project-1",
	siteLink: "https://palettepal.herokuapp.com/",
};

const ProjectPage = ({
	modalContent,
	setModalContent,
	showModal,
	setShowModal,
}) => {
	return (
		<>
			<ModalContext.Provider value={{ modalContent, setModalContent }}>
				<ProjectGroupContainer>
					<Project
						image={image1}
						setShowModal={setShowModal}
						showModal={showModal}
						projectContent={project1Content}
					/>
					<Project
						image={image2}
						setShowModal={setShowModal}
						showModal={showModal}
						projectContent={project2Content}
					/>
					<Project
						image={image3}
						setShowModal={setShowModal}
						showModal={showModal}
						projectContent={project3Content}
					/>
				</ProjectGroupContainer>
			</ModalContext.Provider>
		</>
	);
};

export default ProjectPage;
