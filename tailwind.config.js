/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			colorOne: "#B3DDF2",
			colorTwo: "#355E3B",
			colorThree: "#F7E9A0",
			colorFour: "#5C4033",
			colorFive: "#FAF9F6",
		},
		fontFamily: {
			comforta: ["Comfortaa", "sans-serif"],
			fredoka: ["Fredoka", "serif"],
			lobster: ["Lobster Two", "sans-serif"],
			gloria: ["Gloria Hallelujah", "cursive"],
			poppins: ["Poppins", "serif"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
			boxShadow: {
				"shadow-colorOne":
					"0 0 5px #00A8E8, 0 0 10px #00A8E8, 0 0 20px #00A8E8, 0 0 40px #00A8E8",
				"shadow-colorTwo":
					"0 0 5px #003459, 0 0 10px #003459, 0 0 20px #003459, 0 0 40px #003459",
			},
		},
	},
	plugins: [],
};
