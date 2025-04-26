import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F8FA", // Soft Frost
        primary: {
          DEFAULT: "#3E64FF", // Indigo Blue
          50: "#eaefff",
          100: "#d5dfff",
          200: "#acbeff",
          300: "#819dff",
          400: "#567dff",
          500: "#3E64FF", // Indigo Blue
          600: "#3051cc",
          700: "#233d99",
          800: "#152966",
          900: "#081433",
        },
        accent: "#7ED957", // Lime Green
        secondary: "#64748B", // Mid Gray
        cta: "#536DFE", // Electric Blue
      },
    },
  },
  plugins: [],
};

export default config;
