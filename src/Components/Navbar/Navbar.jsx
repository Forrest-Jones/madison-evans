import React from "react";
import { useState } from "react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state to track if mobile menu is open

	return (
		<nav className="bg-gray-800 md:w-64 md:flex-shrink-0">
			{" "}
			{/* Navbar container */}
			{/* Mobile menu button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					type="button"
					className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
			</div>
			{/* Desktop menu and logo */}
			<div
				className={`${
					isMobileMenuOpen ? "block" : "hidden"
				} md:flex-grow md:flex md:flex-col md:justify-start md:items-stretch md:min-h-screen`}>
				<div className="flex-shrink-0 px-4 py-2 bg-gray-900">
					{" "}
					{/* Logo */}
					<h1 className="text-lg font-medium text-white">Logo</h1>
				</div>
				<div className="flex-grow md:flex md:flex-col md:overflow-y-auto">
					{" "}
					{/* Menu links */}
					<a
						href="/"
						className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Link 1
					</a>
					<a
						href="/"
						className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Link 2
					</a>
					<a
						href="/"
						className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
						Link 3
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
