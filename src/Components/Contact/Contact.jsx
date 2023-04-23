import React, { useRef, useState } from "react";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import { BsMedium as Medium } from "react-icons/bs";
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
			className="
			bg-primary p-6 flex flex-col items-center
			md:justify-center">
			For business inquiries, please contact me at{" "}
			<strong>
				<a href="mailto:m.corbinevans@gmail.com" className="block text-accent">
					m.corbinevans@gmail.com
				</a>
			</strong>
			Or fill out the form below:
			<br />
			<br />
			<div
				className="
				p-6 h-fit rounded-xl w-full border border-secondary bg-primary
				md:w-[400px]
				lg:w-[600px]
				xl:w-[800px]">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col justify-center items-center">
					<label className="w-full py-1 text-secondary">Name</label>
					<input
						type="text"
						name="user_name"
						className="rounded p-1 w-full max-w-screen-lg border border-secondary"
						required
						ref={nameInput}
					/>
					<label className="w-full py-1 text-secondary">Email</label>
					<input
						type="email"
						name="user_email"
						className="rounded p-1 w-full border border-secondary"
						required
						ref={emailInput}
					/>
					<label className="w-full py-1 text-secondary">Message</label>
					<textarea
						name="message"
						rows="5"
						className="rounded p-1 w-full border border-secondary"
						required
						ref={messageInput}
					/>
					{sent ? (
						<p className="text-accent mt-3 p-1 border border-primary rounded">
							Message sent
						</p>
					) : (
						<input
							type="submit"
							value="Send"
							className="border border-secondary text-light bg-secondary border rounded p-1 w-full mt-3 cursor-pointer hover:bg-accent hover:border-accent hover:text-white transition hover:shadow-[10px_10px_0_0_rgba(0,0,0,.3)]"
						/>
					)}
				</form>
			</div>
			<br />
			<p className="px-6 text-center">
				Connect with me on Linkedin, follow my development projects on Github,
				and subscribe to my blog:
			</p>
			<div className="flex flex-row my-4">
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.05, y: -2 }}
					target="_blank"
					href="https://www.linkedin.com/in/madison-evans-98a350a3/"
					rel="noreferrer">
					<Linkedin size="1.5em" />
				</motion.a>
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.05, y: -2 }}
					target="_blank"
					href="https://github.com/MadisonEvans94"
					rel="noreferrer">
					<Github size="1.5em" className="mx-3" />
				</motion.a>
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.05, y: -2 }}
					target="_blank"
					href="https://medium.com/@m.corbinevans"
					rel="noreferrer">
					<Medium size="1.5em" />
				</motion.a>
			</div>
		</div>
	);
};

export default Contact;
