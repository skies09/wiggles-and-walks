/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			// Brand Primary Colors
			brand: {
				primary: "#2D7A4F",      // Rich forest green - trust, nature, reliability
				primaryLight: "#3A9B63",  // Lighter green for hover states
				primaryDark: "#1F5A38",   // Darker green for depth
				secondary: "#7EC8E3",     // Soft sky blue - calm, care, friendliness
				secondaryLight: "#A8DDF0", // Lighter blue for backgrounds
				accent: "#F4C430",        // Warm golden yellow - joy, energy
				accentLight: "#F9D96B",   // Lighter yellow for highlights
			},
			// Neutral Colors
			neutral: {
				50: "#FEFCF9",   // Soft cream - main background
				100: "#F9F7F4",  // Light beige
				200: "#E8E5DF",  // Light gray-beige
				300: "#D4CFC5",  // Medium gray-beige
				400: "#8B7D6B",  // Medium brown
				500: "#6B5D4F",  // Warm brown - text
				600: "#5C4E42",  // Dark brown
				700: "#4A3F35",  // Darker brown
				800: "#3A3229",  // Very dark brown
				900: "#2A221C",  // Almost black brown
			},
			// Legacy color support (for gradual migration)
			colorOne: "#7EC8E3",      // Updated to brand.secondary
			colorTwo: "#2D7A4F",      // Updated to brand.primary
			colorThree: "#F4C430",    // Updated to brand.accent
			colorFour: "#6B5D4F",     // Updated to neutral.500
			colorFive: "#FEFCF9",     // Updated to neutral.50
		},
		fontFamily: {
			// Primary brand fonts
			heading: ["Fredoka", "sans-serif"],      // Main headings - friendly, rounded
			body: ["Comfortaa", "sans-serif"],        // Body text - clean, readable
			accent: ["Gloria Hallelujah", "cursive"], // Special accents - playful
			// Legacy support
			comforta: ["Comfortaa", "sans-serif"],
			fredoka: ["Fredoka", "sans-serif"],
			gloria: ["Gloria Hallelujah", "cursive"],
			lobster: ["Lobster Two", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
			borderRadius: {
				'brand': '1rem',      // Standard brand border radius
				'brand-lg': '1.5rem',  // Large brand border radius
				'brand-xl': '2rem',    // Extra large brand border radius
			},
			boxShadow: {
				'brand': '0 4px 6px -1px rgba(45, 122, 79, 0.1), 0 2px 4px -1px rgba(45, 122, 79, 0.06)',
				'brand-lg': '0 10px 15px -3px rgba(45, 122, 79, 0.1), 0 4px 6px -2px rgba(45, 122, 79, 0.05)',
				'brand-xl': '0 20px 25px -5px rgba(45, 122, 79, 0.1), 0 10px 10px -5px rgba(45, 122, 79, 0.04)',
				'brand-soft': '0 2px 8px rgba(45, 122, 79, 0.08)',
			},
		},
	},
	plugins: [],
};
