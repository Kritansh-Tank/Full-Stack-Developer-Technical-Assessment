/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f8fa",
        white: "#fff",
        limegreen: "#4aea40",
        black: "#000",
        whitesmoke: {
          "100": "#eee",
          "200": "#e9edf1",
          "300": "#eaeaea",
        },
        tomato: {
          "100": "#ff4949",
          "200": "#ea4e40",
        },
        darkslategray: "#3f526e",
        typography: "#05162e",
        "icon-deactive": "#808281",
        slategray: "#6f767e",
        gray: "#0a0a0a",
      },
      spacing: {},
      fontFamily: {
        p4: "'Noto Sans'",
        inherit: "inherit",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      mini: "0.938rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
