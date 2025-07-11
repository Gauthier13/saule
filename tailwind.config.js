/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss";

const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    catppuccin({
      prefix: "ctp",
      defaultFlavour: "mocha"
    })
  ],
};

export default tailwindConfig;
