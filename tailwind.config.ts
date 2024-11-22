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
  			'primary-red': 'rgba(var(--primary-red),var(--tw-bg-opacity, 1))',
  			'primary-dark-red': 'rgba(var(--primary-dark-red),var(--tw-bg-opacity, 1))',
  			'primary-black': 'rgba(var(--primary-black),var(--tw-bg-opacity, 1))',
  			'primary-gray': 'rgba(var(--primary-gray),var(--tw-bg-opacity, 1))',
  			'primary-white': 'rgba(var(--primary-white),var(--tw-bg-opacity, 1))',
  			'secondary-dark-gray': 'rgba(var(--dark-gray),var(--tw-bg-opacity, 1))',
  			'secondary-medium-gray': 'rgba(var(--medium-gray),var(--tw-bg-opacity, 1))',
  			'secondary-gray': 'rgba(var(--gray),var(--tw-bg-opacity, 1))',
  			'secondary-light-gray': 'rgba(var(--light-gray),var(--tw-bg-opacity, 1))',
  			'secondary-green': 'rgba(var(--green),var(--tw-bg-opacity, 1))',
  			'secondary-blue': 'rgba(var(--blue),var(--tw-bg-opacity, 1))',
  			'task-red': 'var(--task-red)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontSize: {
  			hero: [\r\n          "var(--font-size-hero)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'hero-light': [\r\n          "var(--font-size-hero)",\r\n          { fontWeight: "var(--font-weight-light)" },\r\n        ],
  			title: [\r\n          "var(--font-size-title)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'title-light': [\r\n          "var(--font-size-title)",\r\n          { fontWeight: "var(--font-weight-light)" },\r\n        ],
  			subtitle: [\r\n          "var(--font-size-subtitle)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'subtitle-regular': [\r\n          "var(--font-size-subtitle)",\r\n          { fontWeight: "var(--font-weight-regular)" },\r\n        ],
  			heading: [\r\n          "var(--font-size-heading)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'heading-semi': [\r\n          "var(--font-size-heading)",\r\n          { fontWeight: "var(--font-weight-semi-bold)" },\r\n        ],
  			'heading-light': [\r\n          "var(--font-size-heading)",\r\n          { fontWeight: "var(--font-weight-light)" },\r\n        ],
  			'subheading-lead': [\r\n          "var(--font-size-subheading)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'subheading-lead-light': [\r\n          "var(--font-size-subheading)",\r\n          { fontWeight: "var(--font-weight-light)" },\r\n        ],
  			paragraph: [\r\n          "var(--font-size-paragraph)",\r\n          { fontWeight: "var(--font-weight-bold)" },\r\n        ],
  			'paragraph-regular': [\r\n          "var(--font-size-paragraph)",\r\n          { fontWeight: "var(--font-weight-regular)" },\r\n        ],
  			'caption-semi': [\r\n          "var(--font-size-capption)",\r\n          { fontWeight: "var(--font-weight-semi-bold)" },\r\n        ],
  			caption: [\r\n          "var(--font-size-caption)",\r\n          { fontWeight: "var(--font-weight-regular)" },\r\n        ],
  			'microtext-semi': [\r\n          "var(--font-size-microtext)",\r\n          { fontWeight: "var(--font-weight-semi-bold)" },\r\n        ],
  			microtext: [\r\n          "var(--font-size-microtext)",\r\n          { fontWeight: "var(--font-weight-light)" },\r\n        ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
