import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "rgba(var(--primary-red),var(--tw-bg-opacity, 1))",
        "primary-dark-red":
          "rgba(var(--primary-dark-red),var(--tw-bg-opacity, 1))",
        "primary-black": "rgba(var(--primary-black),var(--tw-bg-opacity, 1))",
        "primary-gray": "rgba(var(--primary-gray),var(--tw-bg-opacity, 1))",
        "primary-white": "rgba(var(--primary-white),var(--tw-bg-opacity, 1))",
        "secondary-dark-gray": "rgba(var(--dark-gray),var(--tw-bg-opacity, 1))",
        "secondary-medium-gray":
          "rgba(var(--medium-gray),var(--tw-bg-opacity, 1))",
        "secondary-gray": "rgba(var(--gray),var(--tw-bg-opacity, 1))",
        "secondary-light-gray":
          "rgba(var(--light-gray),var(--tw-bg-opacity, 1))",
        "secondary-green": "rgba(var(--green),var(--tw-bg-opacity, 1))",
        "secondary-blue": "rgba(var(--blue),var(--tw-bg-opacity, 1))",
        "task-red": "var(--task-red)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        hero: [
          "var(--font-size-hero)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "hero-light": [
          "var(--font-size-hero)",
          { fontWeight: "var(--font-weight-light)" },
        ],
        title: [
          "var(--font-size-title)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "title-light": [
          "var(--font-size-title)",
          { fontWeight: "var(--font-weight-light)" },
        ],
        subtitle: [
          "var(--font-size-subtitle)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "subtitle-regular": [
          "var(--font-size-subtitle)",
          { fontWeight: "var(--font-weight-regular)" },
        ],
        heading: [
          "var(--font-size-heading)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "heading-semi": [
          "var(--font-size-heading)",
          { fontWeight: "var(--font-weight-semi-bold)" },
        ],
        "heading-light": [
          "var(--font-size-heading)",
          { fontWeight: "var(--font-weight-light)" },
        ],
        "subheading-lead": [
          "var(--font-size-subheading)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "subheading-lead-light": [
          "var(--font-size-subheading)",
          { fontWeight: "var(--font-weight-light)" },
        ],
        paragraph: [
          "var(--font-size-paragraph)",
          { fontWeight: "var(--font-weight-bold)" },
        ],
        "paragraph-regular": [
          "var(--font-size-paragraph)",
          { fontWeight: "var(--font-weight-regular)" },
        ],
        "caption-semi": [
          "var(--font-size-capption)",
          { fontWeight: "var(--font-weight-semi-bold)" },
        ],
        caption: [
          "var(--font-size-caption)",
          { fontWeight: "var(--font-weight-regular)" },
        ],
        "microtext-semi": [
          "var(--font-size-microtext)",
          { fontWeight: "var(--font-weight-semi-bold)" },
        ],
        microtext: [
          "var(--font-size-microtext)",
          { fontWeight: "var(--font-weight-light)" },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
