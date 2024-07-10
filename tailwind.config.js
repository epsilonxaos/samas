/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				grisOscuro: "#6b6b6b",
				gris: "#d6d6d6",
				grisFondo: "#F2F2F2",
			},
			fontFamily: {
				lettera: ["Lettera", "sans-serif"],
			},
			maxWidth: {
				app: "1500px",
			},
		},
	},
	plugins: [],
};
