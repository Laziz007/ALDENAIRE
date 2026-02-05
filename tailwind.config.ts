import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          950: "#0B0F1A",
          900: "#111827",
          800: "#1F2937"
        },
        mist: {
          50: "#F7F8FB",
          100: "#EEF1F6",
          200: "#D9DEE8",
          400: "#9AA4B2"
        },
        accent: {
          400: "#7DD3FC",
          500: "#4F9CFB",
          600: "#3B82F6",
          700: "#2563EB"
        },
        glow: {
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 156, 251, 0.35)",
        card: "0 20px 60px -40px rgba(15, 23, 42, 0.6)",
        glass: "0 20px 60px -40px rgba(79, 156, 251, 0.35)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)",
        "glow-radial": "radial-gradient(circle at top left, rgba(59,130,246,0.35), transparent 50%)",
        "glow-orb": "radial-gradient(circle, rgba(124,58,237,0.25), transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
