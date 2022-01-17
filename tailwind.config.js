const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "540px",
        },
      },
      colors: {
        body: {
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(235, 21%, 11%)",
        },
        mode: {
          light: "hsl(0, 0%, 100%)",
          dark: "hsl(235, 24%, 19%)",
        },
        border: {
          light: "hsl(236, 33%, 92%)",
          dark: "hsl(237, 14%, 26%)",
        },
        todo: {
          light: "hsl(235, 19%, 35%)",
          dark: "hsl(234, 39%, 85%)",
        },
        controls: {
          hover: { light: "hsl(235, 19%, 35%)", dark: "hsl(236, 33%, 92%)" },
          light: "hsl(236, 9%, 61%)",
          dark: "hsl(233, 14%, 35%)",
          blue: "hsl(220, 98%, 61%)",
        },
        todoBlue: "hsl(220, 98%, 61%)",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.neutral,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
      padding: {
        "80px": "80px",
        "20px": "20px",
        "22px": "22px",
        "74px": "74px",
      },
      margin: {
        "50px": "50px",
        "25px": "25px",
      },
      height: {
        "300px": "300px",
        "24px": "24px",
      },
      width: {
        "24px": "24px",
      },
      backgroundImage: {
        "desktop-light": `url("/images/bg-desktop-light.jpg")`,
        "desktop-dark": `url("/images/bg-desktop-dark.jpg")`,
        "mobile-light": `url("/images/bg-mobile-light.jpg)`,
        "mobile-dark": `url("/images/bg-mobile-dark.jpg")`,
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
      content: {
        link: 'url("/images/icon-check.svg")',
      },
      maxWidth: {
        540: "540px",
      },
      boxShadow: {
        "list-light": "0px 45px 44px hsl(233, 11%, 84%)",
        "list-dark": "0px 45px 44px hsl(235, 21%, 11%)",
      },
      fontSize: {
        "30px": "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
