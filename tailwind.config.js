/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#12213c",
				primaryLighter: "#485d7a",
				darker: "#32466a",
				info: "#faf9f7",
				secondary: "#d8737f",
				accent: "#fcbb60",
				accentLighter: "#fcddac",
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
