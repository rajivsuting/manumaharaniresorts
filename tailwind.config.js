/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      maxWidth: {
        container: "1200px", // your desired width
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
