module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        width: {
          776: "32rem",
        },
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
