/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				SFProDisplay: ["SFProDisplay", "sans-serif"],
			},
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			animation: {
				slideDown: "slideDown .5s ease-in-out",
				fadeIn: "fadeIn .5s ease-in-out",
			},
		},
	},
	plugins: [],
};
