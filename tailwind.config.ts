import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-lapis": "linear-gradient(90deg, #247BA0 0%, #E8F1F2 100%)",
        "gradient-alice":
          "linear-gradient(96.18deg, rgba(19, 41, 61, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)",
      },
      colors: {
        red: "#EB4A4A",
        "pussian-blue": "#13293D",
        "alice-blue": "#E8F1F2",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
export default config;
