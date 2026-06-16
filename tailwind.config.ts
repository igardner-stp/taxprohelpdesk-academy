import type { Config } from "tailwindcss";

// =============================================================================
// TaxProHelpDesk Academy brand — clean, professional, trust-forward.
// Light neutral backgrounds, navy/slate as primary, a trustworthy blue accent.
// All colors are tokens here so the palette swaps in ONE place.
// =============================================================================
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: navy / slate (brand chrome, headings, text).
        navy: {
          DEFAULT: "#1e293b",
          900: "#0f172a", // deepest — top nav, footer
          800: "#1e293b", // headings, primary buttons
          700: "#334155",
          600: "#475569",
          500: "#64748b",
        },
        // Accent: trustworthy blue (CTAs, links, progress fills).
        brand: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
        // Light neutral surfaces.
        surface: {
          DEFAULT: "#ffffff",
          50: "#f8fafc", // page background
          100: "#f1f5f9", // subtle fills
          200: "#e2e8f0", // borders
          300: "#cbd5e1",
        },
        // Semantic status (progress, quiz results, badges).
        status: {
          green: "#16a34a",
          amber: "#d97706",
          red: "#dc2626",
          blue: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.10)",
        cardHover: "0 4px 12px rgba(15,23,42,0.10), 0 2px 4px rgba(15,23,42,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
