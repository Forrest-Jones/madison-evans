import React from "react";
import { IoIosCloseCircle as CloseButton } from "react-icons/io";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Modal = ({ showModal, setShowModal, modalContent }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="fixed w-screen h-screen bg-opacity-80 flex bg-black z-10 items-center">
				<div
					style={{ backgroundColor: "#111111", maxWidth: "50em" }}
					className="text-white relative border rounded-xl w-4/5 mx-auto mt-1/2 h-4/5 parent">
					<button
						onClick={toggleModal}
						className="
						absolute text-white -right-10 -top-12
						">
						<CloseButton size="4em" />
					</button>
					<h1 className="div1 text-6xl text-center flex justify-center items-center my-6">
						Palette Pal
					</h1>
					<div className="div2 py-2 h-full">
						<VideoPlayer videoSource={modalContent.video} />
					</div>
					<p className="div3 overflow-y-auto px-10 my-3 h-full text-lg">
						{modalContent.description}
					</p>

					<ul className="div4 flex flex-col h-full w-full px-10 justify-center ">
						<li>
							Explore the{" "}
							<strong>
								<a
									href={modalContent.siteLink}
									target="_blank"
									rel="noreferrer">
									<span className="text-red-500 text-xl">github repo</span>
								</a>
							</strong>
						</li>
						<li>
							Visit the site{" "}
							<strong>
								<a
									href={modalContent.siteLink}
									target="_blank"
									rel="noreferrer">
									<span className="text-red-500 text-xl">here</span>
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
