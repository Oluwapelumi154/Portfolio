/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      althetics: ["Athletics", "sans-serif"],
      grotesk: ["Space-Grotesk", "sans-serif"],
    },
    height: {
      "70": "70px",
      "650": "650px",
      "350": "350px"
    },
    borderRadius: {
      15: "15px",
      6: "6px"
    },
    borderWidth: {
      0.5: "0.5px"

    },
    fontWeight: {
      "600": "600"
    },
    width: {
      "100": "100%",
      "600": "1000px"
    },

    fontSize: {
      "50": "70px",
      "35": "35px",
      "30": "30px",
      "25": "20px",
      "38": "38px",
      "16": '16px',
      "18": "18px"
    },
    margin: {
      "20": '20px',
      "15": "15px",
      "18": "18px",
      "8": "8px",
      "10": "10px",
      "25": "25px"
    },
    padding: {
      "10": "10px",
      "20": '20px',
      "25": "25px",
      "8": "8rem",
      "120": "8rem",
      "0.5": "0.5px"
    },
    colors: {
      "dark-400": "#101010",
      "dark-100": "1A1A1A",
      "white": "#ffff",
      "shade-4": "#0A0A0A",
      "shade-2": "#B3B3B3",
      "accent-2": "#FFD84D",
      "accent-3": '#5EE2FF',
      "accent-1": "#9B5CFF",
      "accent-4": "#FFE074",
      "accent-5": "#50CAE4"
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #9B5CFF, #FFE074, #50CAE4)', // Custom gradient
    },
    screens: {
      'sm': '480px', // Small devices (phones)
      'md': '768px', // Medium devices (tablets)
      'lg': '1024px', // Large devices (laptops/desktops)
      'xl': '1280px', // Extra large devices (larger desktops)
      '2xl': '1536px', // Even larger devices (very large screens)
    },
  
  },
  plugins: [
  ],
};
