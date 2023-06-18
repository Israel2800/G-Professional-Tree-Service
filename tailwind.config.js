/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        "mainImage": "url('../src/assets/images/mainImage.jpg')",
        "treeRemoval": "url('../src/assets/images/tree-removal.jpg')",
        "treeTrimming": "url('../src/assets/images/tree-trimming.jpg')",
        "stumpRemoval": "url('../src/assets/images/stump-removal.jpg')",
        "treeCare": "url('../src/assets/images/tree-care.jpg')",
        "treeR": "url('../src/assets/images/3.jpg')"
      }
    },
  },
  plugins: [],
}
