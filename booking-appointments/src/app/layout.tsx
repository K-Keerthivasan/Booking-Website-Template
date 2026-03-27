import type { Metadata } from "next";
import "./globals.css";

import { K2HomePopup } from "@/components/k2-home-popup";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Veloura Atelier",
  description:
    "Luxury spa and salon booking boilerplate for K2 Digital Media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-plum-900)]">
        <Providers>
          {children}
          <K2HomePopup />
        </Providers>
      </body>
    </html>
  );
}
