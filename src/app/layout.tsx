import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Aldenaire | Turn Complex Work Into Simple Actions",
  description:
    "Aldenaire is an intelligent AI service platform that saves time, improves decisions, and automates routine work with a human-friendly assistant.",
  keywords: [
    "ai assistant",
    "automation platform",
    "productivity",
    "smart recommendations",
    "analytics dashboard",
    "saas ai"
  ],
  openGraph: {
    title: "Aldenaire | Turn Complex Work Into Simple Actions",
    description:
      "A smart AI service platform for entrepreneurs, teams, and creators who want to move faster with confidence.",
    type: "website"
  },
  metadataBase: new URL("https://aldenaire.ai")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#111827",
          colorText: "#0B0F1A",
          colorBackground: "#F7F8FB",
          colorInputBackground: "#FFFFFF",
          colorInputText: "#0B0F1A",
          borderRadius: "16px",
          fontFamily: "var(--font-body)"
        },
        elements: {
          card: "shadow-glass border border-white/20",
          headerTitle: "text-2xl font-semibold",
          headerSubtitle: "text-sm text-ink-600",
          formButtonPrimary:
            "rounded-full bg-ink-950 text-white hover:bg-ink-900"
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${display.variable} ${body.variable} min-h-screen`}>
          <ThemeScript />
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
