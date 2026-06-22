/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', '"Neue Montreal"', "Inter", "sans-serif"],
        mono: ['"Spline Sans Mono"', "ui-monospace", "monospace"],
        serif: ['"Instrument Serif"', "serif"],
      },
      colors: {
        ink: "#0a0a0a",
        bone: "#f4f1ea",
        cream: "#ebe6da",
        acid: "#d6ff3d",
        ember: "#ff4d2e",
        haze: "#9b96a3",
      },
      fontSize: {
        "12xl": ["12rem", { lineHeight: "0.85" }],
        "14xl": ["16rem", { lineHeight: "0.8" }],
        "18xl": ["22rem", { lineHeight: "0.78" }],
      },
      letterSpacing: {
        tightest: "-0.06em",
        megaloose: "0.5em",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-rev": "marquee-rev 36s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        "float-y": "float-y 7s ease-in-out infinite",
        blink: "blink 1.05s steps(2) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
