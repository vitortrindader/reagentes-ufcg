import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(authenticated)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(public)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azulEscuroUfcg: "#789FBB",
        azulClaroUfcg: "#A3C2D3",
        laranjaClaro: "#E7AA50",
        laranjaEscuro: "#D1963D",
        azulEscuro: "#1E293B",
        azulClaro: "#324154",
        "verde-piscina": "#4FDE87",
        azulClaroDemais: "#606D84",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
