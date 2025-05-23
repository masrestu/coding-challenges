/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
		colors: {
			'tomato': 'hsl(4, 100%, 67%)',
			'grayish': {
				400: 'hsl(234, 29%, 20%)',
				300: 'hsl(235, 18%, 26%)',
				200: 'hsl(231, 7%, 60%)',
				100: 'hsl(0, 0%, 100%)'
			}
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		backgroundImage: {
			'hero-mobile': "url('../images/illustration-sign-up-mobile.svg')",
			'hero-desktop': "url('../images/illustration-sign-up-desktop.svg')",
		},
		gridTemplateColumns:{
			'desktop': "4fr 3fr",
		},
		gridTemplateRows:{
			'success-mobile': "4fr 3fr",
		}
	},
  },
  plugins: [],
}

