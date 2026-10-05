import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeContext";
import { useMotionTier } from "@/lib/motion";

// Self-hosted at build time: no request to Google at runtime, no layout shift
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
  const tier = useMotionTier();

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion={tier === "full" ? "never" : "always"}>
        <style jsx global>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-mono: ${mono.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </MotionConfig>
    </ThemeProvider>
  );
}
