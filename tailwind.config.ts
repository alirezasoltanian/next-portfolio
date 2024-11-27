import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        brand: {
          DEFAULT: "var(--color-bg)",
          foreground: "hsl(var(--color-primary-hsl))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500"
        )}, 50px, ${theme("colors.gray.800")} 50%)`,
        "custom-vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.800"
        )}, 50px, ${theme("colors.gray.500")} 50%)`,
        "light-custom-gradient":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.50) 25%, rgba(0, 0, 0, 0.02) 100%)",
        "light-custom-y-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.50) 25%, rgba(0, 0, 0, 0.02) 90%)",
        "custom-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.18) 25%, rgba(255, 255, 255, 0.02) 100%)",
      }),
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        ripple: {
          "50%": {
            transform: "scale(var(--scale, 1.25))",
          },
        },
        "hover-tada": {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9) rotate(-3deg)",
          },
          "20%": {
            transform: "scale(0.9) rotate(-3deg)",
          },
          "30%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "40%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "50%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "60%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "70%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "80%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "90%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        ripple:
          "ripple var(--duration, 1.5s) ease calc(var(--i, 0) * 0.1s) infinite",
        "hover-tada": "hover-tada 1s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({
      addComponents,
      theme,
    }: {
      addComponents: any;
      theme: any;
    }) {
      addComponents({
        ".ripple": {
          "--size":
            "calc(var(--baseSize, 80px) + var(--sizeStep, 64px) * var(--i, 0))",
          width: "var(--size)",
          height: "var(--size)",
          opacity:
            "calc(var(--baseOpacity, 0.25) - var(--opacityStep, 0.05) * var(--i, 0))",
          animation: theme("animation.ripple"),
        },
      });
    }),
  ],
} satisfies Config;

export default config;
