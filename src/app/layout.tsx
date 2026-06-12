import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Sumiyabazar — Fullstack Engineer",
  description:
    "Fullstack engineer in Ulaanbaatar, Mongolia. I ship production platforms solo: insurance ecosystems, real-money gaming, AI-driven claims. Go, TypeScript, Vue, React, PostgreSQL.",
  openGraph: {
    title: "Sumiyabazar — Fullstack Engineer",
    description:
      "A night drive through the platforms I build. Insurance ecosystems, real-money gaming, AI claims — shipped solo, running in production.",
    images: ["/journey/keyframe-a.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
