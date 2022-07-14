/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
    "!./**/*.{spec,test}.{js,jsx,ts,tsx}",
    "!./**/node_modules/**",
    "!./**/dist/**",
    "!./**/coverage/**",
    "!./**/public/**",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
