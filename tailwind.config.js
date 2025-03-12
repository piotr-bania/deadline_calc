import { heroui } from '@heroui/react'

module.exports = {
	content: ['./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF0000',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [heroui],
}
