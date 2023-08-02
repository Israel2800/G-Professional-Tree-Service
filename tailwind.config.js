/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "mainImage": "url('../src/assets/gallery/port.png')",
        "treeRemoval": "url('../src/assets/images/tree-removal.jpg')",
        "treeTrimming": "url('../src/assets/images/tree-trimming.jpg')",
        "stumpRemoval": "url('../src/assets/images/stump-removal.jpg')",
        "treeCare": "url('../src/assets/images/tree-care.jpg')"
      }
    },
  },
  plugins: [],
}
