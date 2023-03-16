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
			<div
				className="
				fixed w-screen h-screen bg-opacity-80 flex bg-black z-10 items-center
				">
				<div
					style={{ backgroundColor: "#111111", maxWidth: "1280px" }}
					className="
					text-white relative border rounded-xl w-4/5 mx-auto h-4/5 parent pt-6 
					md:h-4/5 md:w-full md:pb-10 md:m-6 
					xl:mx-auto">
					<button
						onClick={toggleModal}
						className="
						absolute text-white -right-10 -top-10
						md:right-1 md:top-1
						">
						<CloseButton size="2.5em" />
					</button>
					<h1
						className="
						div1 text-4xl text-center flex justify-center items-center 
						md:text-6xl">
						{modalContent.title}
					</h1>
					<div className="div2 py-2 h-full my-auto">
						<VideoPlayer videoSource={modalContent.video} />
					</div>
					<p className="div3 overflow-y-auto px-10 my-2 h-full text-lg">
						{modalContent.description}
					</p>

					<ul
						className="
						div4 flex flex-col h-60 w-full justify-center px-10 pb-3
						md:px-0">
						<li className="w-full">
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
