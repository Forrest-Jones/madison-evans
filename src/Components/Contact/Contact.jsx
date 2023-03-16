import React, { useRef, useState } from "react";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
const Contact = () => {
	const form = useRef();
	const nameInput = useRef();
	const emailInput = useRef();
	const messageInput = useRef();
	const [sent, setSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		// TODO: Don't Delete
		emailjs
			.sendForm(
				"service_ptv88yz",
				"template_tkul86p",
				form.current,
				"QXbk0V9wjQFcqNmT5"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		console.log("test mode");

		// clear input values
		nameInput.current.value = "";
		emailInput.current.value = "";
		messageInput.current.value = "";
		setSent(true);
		setTimeout(() => setSent(false), 2000);
	};

	return (
		<div
			id="contact"
			style={{ minHeight: "100vh" }}
			className="p-6 flex flex-col justify-center items-center">
			For business inquiries, please contact me at{" "}
			<strong>
				<motion.a
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.02, transition: { type: "spring" } }}
					href="mailto:m.corbinevans@gmail.com"
					className="block">
					m.corbinevans@gmail.com
				</motion.a>
			</strong>
			Or fill out the form below:
			<br />
			<br />
			<div
				className="
				bg-primary p-6 h-fit rounded-xl
				md:w-[400px]
				lg:w-[600px]
				xl:w-[800px]">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col justify-center items-center">
					<label className="w-full py-1 text-white">Name</label>
					<input
						type="text"
						name="user_name"
						className="rounded p-1 w-full max-w-screen-lg"
						required
						ref={nameInput}
					/>
					<label className="w-full py-1 text-white">Email</label>
					<input
						type="email"
						name="user_email"
						className="rounded p-1 w-full"
						required
						ref={emailInput}
					/>
					<label className="w-full py-1 text-white">Message</label>
					<textarea
						name="message"
						rows="6"
						className="rounded p-1 w-full"
						required
						ref={messageInput}
					/>
					{sent ? (
						<p className="text-white mt-3 p-1 border border-primary rounded">
							Message sent
						</p>
					) : (
						<input
							type="submit"
							value="Send"
							className="text-white border rounded p-1 w-full mt-3 cursor-pointer hover:bg-white hover:text-black transition "
						/>
					)}
				</form>
			</div>
			<br />
			<p className="px-6 text-center">
				Connect with me on Linkedin or follow my current and future projects on
				Github:
			</p>
			<div className="flex flex-row my-4">
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.1, y: -2 }}
					transition={{ type: "spring" }}
					target="_blank"
					href="https://Linkedin.com"
					rel="noreferrer">
					<Linkedin size="1.5em" />
				</motion.a>
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.1, y: -2 }}
					transition={{ type: "spring" }}
					target="_blank"
					href="https://github.com"
					rel="noreferrer">
					<Github size="1.5em" className="mx-3" />
				</motion.a>
			</div>
		</div>
	);
};

export default Contact;
