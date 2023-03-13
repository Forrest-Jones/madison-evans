import React, { useState } from "react";

const ContactPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: name,
			email: email,
			message: message,
		};
		fetch("/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				setSent(true);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div
			style={{ minHeight: "100vh" }}
			className="
			p-6 flex flex-col justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="
				flex flex-col w-full">
				{/* name */}
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
					className="my-2 p-2 rounded"
				/>
				{/* email */}
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					className="my-2 p-2 rounded"
				/>
				{/* message */}
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Message"
					className="my-2 p-2 rounded"
					rows="6"
				/>
				{/* send button */}
				<button
					type="submit"
					className="my-2 p-2 rounded transition mx-24 border-white border text-white
					hover:bg-blue-500 hover:border-blue-500">
					Send
				</button>
			</form>
			{sent && <p>Thank you for contacting me!</p>}
			<div className="text-white w-full ">
				<p>
					Email me: <strong>M.Corbinevans@gmail.com</strong>{" "}
				</p>
				<p>Find me on social media:</p>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/your-linkedin-profile">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/your-github-profile">GitHub</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactPage;
