// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS/TS/JSX/TSX files in src folder and subfolders
    "./public/index.html", // Optional: include HTML files if Tailwind classes are used there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
