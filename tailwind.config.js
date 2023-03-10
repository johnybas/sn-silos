/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('/images/hero/hero-image-01.jpg')",
        "simon-img": "url('/images/hero/simon.jpg')",
        leaves: "url('/images/illustration/leaves-pattern.png')",
        "leaves-svg": "url('/images/illustration/leaves-pattern.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
