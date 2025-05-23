/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html, css}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    colors: {
      "custom-green": "hsl(75, 94%, 57%)",
      "custom-white": "hsl(0, 0%, 100%)",
      "custom-grey": "hsl(0, 0%, 20%)",
      "custom-darkgrey": "hsl(0, 0%, 12%)",
      "custom-offblack": "hsl(0, 0%, 8%)"
    }
  }
};
export const plugins = [];

