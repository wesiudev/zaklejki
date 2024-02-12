import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { "woman-pc": "url('/home-images/woman-pc.webp')" },
      fontFamily: {
        druk: ["var(--font-druk)"],
        coco: ["var(--font-cocosharp)"],
      },
    },
  },
  plugins: [],
};
export default config;
