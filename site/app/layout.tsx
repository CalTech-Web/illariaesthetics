import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://illariaesthetics.com"),
  title: {
    default: "Illari Aesthetics | Physician-Led Medical Spa in Chicago's Wicker Park",
    template: "%s | Illari Aesthetics",
  },
  description: "Illari Aesthetics is a physician-led medical spa in Chicago's Wicker Park, offering doctor-grade skin care, injectables, weight loss, and IV therapy with treatments customized to each patient's unique needs.",
  keywords: ["medical spa Chicago", "physician-led med spa", "Wicker Park aesthetics", "Chicago injectables", "Dr. Chavez"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illariaesthetics.com",
    siteName: "Illari Aesthetics",
    images: ["/assets/logos/illari-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
