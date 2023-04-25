/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#eceae7",
				darker: "#d9d7d4",
				info: "#30302d",
				secondary: "#878784",
				accent: "#e34f42",
				accentLighter: "#e39a94",
				light: "#faf9f7",
			},
			boxShadow: {
				"inset-custom":
					"inset 5px 5px 8px #cccccc, inset -5px -5px 8px #f4f4f4",
			},
			fontFamily: {
				display: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
