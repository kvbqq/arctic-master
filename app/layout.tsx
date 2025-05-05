import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Nav } from "./nav/Nav";
import { ContactFooter } from "./contactFooter/ContactFooter";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arctic Master",
  description: "Arctic Master - Montaż klimatyzacji i pomp ciepła",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
