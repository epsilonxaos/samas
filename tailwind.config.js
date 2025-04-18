/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				itc: ['ITC Berkeley Oldstyle Std', 'sans-serif'],
			},
			maxWidth: {
				app: '1520px',
				section: '1320px',
			},
		},
	},
	daisyui: {
		themes: ['cupcake'],
	},
}
