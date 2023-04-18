import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state to track if mobile menu is open

	// Container that holds the links in the navbar
	function NavLinkContainer() {
		const handleClickScroll = (event) => {
			event.preventDefault();
			const id = event.target.getAttribute("href").substring(1);
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
			setIsMobileMenuOpen(false);
		};

		return (
			<motion.div className="flex-grow md:flex md:flex-col md:overflow-y-auto">
				<motion.a
					initial={{ x: 0 }}
					whileHover={{ x: 5, transition: { type: "spring" } }}
					href="#about-me"
					className="text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					onClick={handleClickScroll}>
					About Me
				</motion.a>
				<motion.a
					initial={{ x: 0 }}
					whileHover={{ x: 5, transition: { type: "spring" } }}
					href="#skills"
					className="text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					onClick={handleClickScroll}>
					Skills
				</motion.a>
				<motion.a
					initial={{ x: 0 }}
					whileHover={{ x: 5, transition: { type: "spring" } }}
					href="#experience"
					className="text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					onClick={handleClickScroll}>
					Experience
				</motion.a>
				<motion.a
					initial={{ x: 0 }}
					whileHover={{ x: 5, transition: { type: "spring" } }}
					href="#projects"
					className="text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					onClick={handleClickScroll}>
					Projects
				</motion.a>
				<motion.a
					initial={{ x: 0 }}
					whileHover={{ x: 5, transition: { type: "spring" } }}
					href="#contact"
					className="text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					onClick={handleClickScroll}>
					Contact
				</motion.a>
			</motion.div>
		);
	}

	// Hamburger button inside the navbar
	function HamburgerButton() {
		return (
			<button
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				type="button"
				className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white">
				{/* Hamburger icon */}
				<svg
					className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
				{/* Close icon */}
				<svg
					className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		);
	}

	return (
		<nav className="bg-primary flex-shrink-0 p-4 absolute w-full md:w-40 xl:48">
			<div className="md:hidden">{HamburgerButton()}</div>

			<div
				className={`${
					isMobileMenuOpen ? "block" : "hidden"
				} md:flex-grow md:flex md:flex-col md:justify-start md:items-stretch md:min-h-screen`}>
				{NavLinkContainer()}
			</div>
		</nav>
	);
};

export default Navbar;
