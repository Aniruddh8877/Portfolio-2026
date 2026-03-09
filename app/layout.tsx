import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Aniruddh Portfolio ",
  description: "Portfolio of Aniruddh Sharma, a creative Full-Stack Web Developer specializing in React, Next.js, and modern UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} bg-dark text-white font-sans selection:bg-accent selection:text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
