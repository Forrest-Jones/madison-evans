import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state to track if mobile menu is open

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
			<div
				className={`${
					isMobileMenuOpen ? "block" : "hidden"
				} md:flex md:min-h-screen md:flex-grow md:flex-col md:items-stretch md:justify-start`}>
				<motion.div className="flex-grow justify-center md:flex md:flex-col md:overflow-y-auto">
					<motion.a
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", duration: 1 },
						}}
						href="#about-me"
						className="block rounded-md px-3 py-2 text-base font-medium text-info"
						onClick={handleClickScroll}>
						About Me
					</motion.a>
					<motion.a
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", duration: 1 },
						}}
						href="#skills"
						className="block rounded-md px-3 py-2 text-base font-medium text-info "
						onClick={handleClickScroll}>
						Skills
					</motion.a>
					<motion.a
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", duration: 1 },
						}}
						href="#experience"
						className="block rounded-md px-3 py-2 text-base font-medium text-info "
						onClick={handleClickScroll}>
						Experience
					</motion.a>
					<motion.a
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", duration: 1 },
						}}
						href="#projects"
						className="block rounded-md px-3 py-2 text-base font-medium text-info "
						onClick={handleClickScroll}>
						Projects
					</motion.a>
					<motion.a
						initial={{ scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", duration: 1 },
						}}
						href="#contact"
						className="block rounded-md px-3 py-2 text-base font-medium text-info "
						onClick={handleClickScroll}>
						Contact
					</motion.a>
				</motion.div>
			</div>
		);
	}

	function HamburgerButton() {
		return (
			<button
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				type="button"
				className="inline-flex items-center justify-center rounded-md p-1 text-info hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary md:hidden">
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
		<nav className="flex w-full flex-shrink-0 p-4">
			<HamburgerButton />
			<NavLinkContainer />
		</nav>
	);
};

export default Navbar;
