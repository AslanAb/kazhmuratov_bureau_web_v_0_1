/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			minHeight: {
				"1/2": "585px"
			},
			height: {
				600: "600px"
			},
			animation: {
				show: "show 1s",
				showOut: "showOut 1s"
			},
			keyframes: {
				show: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				showOut: {
					from: { opacity: 1 },
					to: { opacity: 0 }
				}
			},
			transitionStylesAll: {
				entering: { opacity: 1 },
				entered: { opacity: 1 },
				exiting: { opacity: 0 },
				exited: { opacity: 0 }
			}
		}
	},
	plugins: []
}
