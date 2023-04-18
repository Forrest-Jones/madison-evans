/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#d6d3c9",
				info: "#30302d",
				secondary: "#878784",
				accent: "#e34f42",
			},
		},
	},
	plugins: [],
};
