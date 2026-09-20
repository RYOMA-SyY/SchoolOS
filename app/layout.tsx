import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "SchoolOS — Solutions Digitales pour Écoles Privées au Maroc",
  description:
    "Présence web, gestion administrative, portails enseignants, parents et élèves. Offres modulaires avec devis en MAD.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={inter.variable}>
      <body className="bg-canvas text-ink font-text">
        <a
          href="#devis"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Aller au devis
        </a>
        {children}
      </body>
    </html>
  );
}
