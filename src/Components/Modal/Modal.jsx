import React from "react";
import { CgClose } from "react-icons/cg";

const Modal = ({ showModal, setShowModal, modalContent }) => {
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
					style={{ backgroundColor: "#111111", maxWidth: "50em" }}
					className="text-white border rounded w-4/5 mx-auto mt-1/2 h-3/5 parent">
					<h1 className="div1 text-6xl text-center flex justify-center items-center">
						Palette Pal
					</h1>
					<p className="div3 overflow-y-auto px-4 my-3">
						{modalContent.description}
					</p>
					<div className="div2 ">
						<div className="border rounded w-auto ml-4 mr-4 h-full"></div>
					</div>

					<ul className="div4 flex flex-col h-full w-full justify-center px-4">
						<li>Explore the github repo</li>
						<li>
							Visit the site{" "}
							<strong>
								<a
									href={modalContent.siteLink}
									target="_blank"
									rel="noreferrer">
									here
								</a>
							</strong>
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
