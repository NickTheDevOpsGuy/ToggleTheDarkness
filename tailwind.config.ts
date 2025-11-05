import type { Config } from "tailwindcss";

export default {
  // content is optional in v4, fine to keep
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseOnce: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: "0.8" },
        },
      },
      animation: {
        pulseOnce: "pulseOnce 0.25s ease-in-out",
      },
      colors: {
        testPurple: "#7e22ce",
      },
    },
  },
  plugins: [],
} satisfies Config;
