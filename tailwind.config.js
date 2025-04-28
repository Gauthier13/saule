/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss";
import daisyui from "daisyui";
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
    }),
    daisyui()
  ],
};

export default tailwindConfig;
