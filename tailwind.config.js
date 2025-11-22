/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff00ff",
        neonCyan: "#00ffff",
        neonPurple: "#bf00ff",
        darkBg: "#050505",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        retro: ['"Press Start 2P"', "cursive"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glitch: "glitch 1s linear infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
