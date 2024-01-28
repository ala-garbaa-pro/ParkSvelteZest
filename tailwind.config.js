/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'ghost-white': '#F8F8F8',
				'snow-white': '#FCFCFC',
				'steel-blue': '#8FABC8',
				azure: '#037BFE',
				'eerie-black': '#20211A',
				'absolute-black': '#020202'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
