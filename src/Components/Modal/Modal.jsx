import React from "react";
import { CgClose } from "react-icons/cg";

const Modal = ({ showModal, setShowModal }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="fixed w-screen h-screen bg-opacity-80 flex bg-black z-10 items-center">
				<button
					onClick={toggleModal}
					className="absolute text-white top-0 right-0 mr-10 mt-10">
					<CgClose size="4em" />
				</button>
				<div
					style={{ backgroundColor: "#111111" }}
					className="text-white border w-4/5 mx-auto mt-1/2 h-3/5 parent">
					<h1 className="div1 text-6xl text-center flex justify-center items-center">
						Palette Pal
					</h1>
					<p className="div3 overflow-y-auto px-4 my-3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eveniet
						quibusdam, magni molestias tempore maiores. Totam itaque animi ipsa
						nam necessitatibus vitae iure possimus perferendis corrupti
						voluptatibus! Beatae ad odit tempore voluptate! Possimus quas error
						fugiat a, inventore nemo corrupti assumenda aliquid iusto omnis
						velit, tempora odio eligendi autem dolorum soluta cum aliquam
						officiis laborum. Molestias consequatur doloremque voluptatum qui
						temporibus aut dolores autem optio, ducimus quia dolore
						exercitationem atque dicta quidem, dignissimos ad at hic vero veniam
						mollitia cumque distinctio. Asperiores earum dignissimos sunt
						blanditiis aperiam dolores, quo voluptates nostrum, labore ex omnis,
						magnam sapiente sequi. Labore libero sed ad fuga minima aut dolor
						facere magni deleniti. Voluptates incidunt, quod laborum veniam
						minus necessitatibus facilis earum at dignissimos, est dicta
						eligendi nihil, a quo animi quis qui cum. Doloremque obcaecati
						repudiandae laboriosam nostrum recusandae maiores illum, natus ea.
						Eos voluptatem optio facilis nobis quibusdam obcaecati natus eius
						recusandae vitae a, consequatur cum aliquam debitis deleniti
						accusantium architecto accusamus assumenda harum odio quod.
						Obcaecati veritatis adipisci repudiandae expedita dolores. Animi
						libero doloribus in voluptate vel eligendi eum soluta recusandae
						dignissimos rerum, voluptatibus quidem illo harum, excepturi tenetur
						perferendis quisquam itaque optio sint fugit suscipit impedit?
						Aliquid quam, recusandae non impedit, rem reprehenderit distinctio
						odit officia excepturi, illum laudantium voluptatem voluptates vel
						numquam pariatur laborum? Corrupti animi voluptatum minima
						perspiciatis provident. Sed, blanditiis! Molestiae quos, mollitia
						incidunt a voluptatibus est dolores rerum natus magni. Voluptate
						alias aut libero numquam nam reiciendis dolore accusantium nihil
						quos maxime recusandae repellat rerum accusamus voluptatem eaque,
						voluptatum aliquid at ratione mollitia sint adipisci distinctio
						tempora nisi. Odio nulla modi aspernatur voluptas facilis,
						voluptatibus possimus saepe? Quidem voluptatum, atque ullam rerum
						vitae ratione maiores ab, obcaecati cupiditate aperiam autem
						corporis minus doloribus incidunt beatae quibusdam dolor, nesciunt
						ipsum similique! Saepe facere facilis dignissimos tenetur provident
						explicabo.
					</p>
					<div className="div2 ">
						<div className="border w-auto ml-4 mr-4 h-full"></div>
					</div>

					<ul className="div4 flex flex-col h-full w-full justify-center px-4">
						<li>Explore the github repo</li>
						<li>Visit the site</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
