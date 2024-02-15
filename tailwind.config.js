/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "halloween",
      {
        mytheme: { 
          "primary": "#33007b",
          "secondary": "#292524",
          "accent": "#bf8706",
          "neutral": "#d0d2d6",
          "base-100": "#ffffff",
          "info": "#3fc3ee",
          "success": "#a5dc86",
          "warning": "#f8bb86",
          "error": "#f27474",
        },
      }
    ]
  }
}

