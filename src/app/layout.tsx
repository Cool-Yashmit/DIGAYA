import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ScrollExperience } from "@/components/motion/ScrollExperience";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DIGAYA — Build, Run & Grow Your Online Business",
  description:
    "Build your online presence, manage customers and automate growth from one connected DIGAYA workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${manrope.className}`}
      >
        <ScrollExperience />
        {children}
      </body>
    </html>
  );
}