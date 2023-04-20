/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70dd68",

          secondary: "#022e93",

          accent: "#56f78c",

          neutral: "#25223A",

          "base-100": "#F6F6F9",

          info: "#4BC8E7",

          success: "#18A07C",

          warning: "#AF5F08",

          error: "#FA3347",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
