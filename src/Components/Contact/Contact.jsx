import React, { useRef, useState } from "react";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillGithub as Github } from "react-icons/ai";
import { BsMedium as Medium } from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import PageHeader from "../PageHeader";
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
			flex flex-col items-center  p-6
			md:justify-center">
			<PageHeader title="Get In Touch" />
			<p className="text-info">For business inquiries, please contact me at</p>
			<strong>
				<a href="mailto:m.corbinevans@gmail.com" className="block text-accent">
					m.corbinevans@gmail.com
				</a>
			</strong>
			<p className="text-info">Or fill out the form below:</p>

			<br />
			<br />
			<div
				className="
				h-fit w-full rounded-xl border border-info bg-primaryLighter p-6
				md:w-[400px]
				lg:w-[600px]
				xl:w-[800px]">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col items-center justify-center">
					<label className="w-full py-1 text-accent">Name</label>
					<input
						type="text"
						name="user_name"
						className="w-full max-w-screen-lg rounded border border-accent p-1"
						required
						ref={nameInput}
					/>
					<label className="w-full py-1 text-accent">Email</label>
					<input
						type="email"
						name="user_email"
						className="w-full rounded border border-accent p-1"
						required
						ref={emailInput}
					/>
					<label className="w-full py-1 text-accent">Message</label>
					<textarea
						name="message"
						rows="5"
						className="w-full rounded border border-accent p-1"
						required
						ref={messageInput}
					/>
					{sent ? (
						<p className="mt-3 rounded border border-primary p-1 text-accent">
							Message sent
						</p>
					) : (
						<input
							type="submit"
							value="Send"
							className="mt-3 w-full cursor-pointer rounded border border border-accent bg-accent p-1 text-light transition hover:border-accent hover:bg-accent hover:text-white hover:shadow-[10px_10px_0_0_rgba(0,0,0,.3)]"
						/>
					)}
				</form>
			</div>
			<br />
			<p className="px-6 text-center text-info">
				Connect with me on Linkedin, follow my development projects on Github,
				and subscribe to my blog:
			</p>
			<div className="my-4 flex flex-row">
				<motion.a
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.05, y: -2 }}
					className="text-accent"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/madison-evans-98a350a3/">
					<Linkedin size="1.5em" />
				</motion.a>
				<motion.a
					className="text-accent"
					initial={{ scale: 1, y: 0 }}
					whileHover={{ scale: 1.05, y: -2 }}
					target="_blank"
					href="https://github.com/MadisonEvans94"
					rel="noreferrer">
					<Github size="1.5em" className="mx-3" />
				</motion.a>
				<motion.a
					className="text-accent"
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
