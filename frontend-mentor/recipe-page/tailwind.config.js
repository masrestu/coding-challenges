/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'young-serif': ['Young Serif', 'serif'],
        'outfit': ['Outfit', 'sans-serif']
      },
      colors: {
        "custom-nutmeg": "hsl(14, 45%, 36%)",
        "custom-darkraspberry": "hsl(332, 51%, 32%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-rosewhite": "hsl(330, 100%, 98%)",
        "custom-eggshell": "hsl(30, 54%, 90%)",
        "custom-lightgrey": "hsl(30, 18%, 87%)",
        "custom-wengebrown": "hsl(30, 10%, 34%)",
        "custom-darkcharcoal": "hsl(24, 5%, 18%)"
      }
    },
  },
  plugins: [],
}

