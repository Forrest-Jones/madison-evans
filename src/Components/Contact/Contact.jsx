import React, { useState } from "react";

const ContactPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Code to send email or submit contact form goes here
		setSent(true);
	};

	return (
		<div style={{ minHeight: "100vh" }}>
			{/* <h1>Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Message:
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
				<button type="submit">Send</button>
			</form>
			{sent && <p>Thank you for contacting me!</p>}
			<p>Email me: your-email@example.com</p>
			<p>Call me: 123-456-7890</p>
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
				<li>
					<a href="https://twitter.com/your-twitter-profile">Twitter</a>
				</li>
			</ul>
			<p>Visit me: 123 Main St, Anytown USA 12345</p>
			<p>Business Hours: Monday - Friday 9am - 5pm EST</p>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.935478784341!2d-73.98785368459682!3d40.744734179329086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f0b0e51e81%3A0xb1a0a87d84c0c191!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1587026266666!5m2!1sen!2sus"
				width="600"
				height="450"
				frameborder="0"
				allowfullscreen=""
				aria-hidden="false"
				tabindex="0"></iframe> */}
		</div>
	);
};

export default ContactPage;
