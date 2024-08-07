/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      margin: px0_200,
      padding: px0_200,
      backgroundImage: {
        countUp: "url('./assets/images/btn_count_up.png')",
        countDown: "url('./assets/images/btn_count_down.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    flowbite.plugin(),
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};
