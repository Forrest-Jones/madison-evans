/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#eceae7",
				info: "#30302d",
				secondary: "#878784",
				accent: "#e34f42",
			},
			fontFamily: {
				display: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
