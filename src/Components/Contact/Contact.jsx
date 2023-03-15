import React, { useRef, useState } from "react";

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
			<div
				className="
				bg-primary border p-12 h-fit rounded-xl
				lg:w-1/2">
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
						<p className="text-white my-3 p-1 border border-primary rounded">
							Message sent
						</p>
					) : (
						<input
							type="submit"
							value="Send"
							className="text-white border rounded p-1 w-full my-3 cursor-pointer hover:bg-white hover:text-black transition"
						/>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
