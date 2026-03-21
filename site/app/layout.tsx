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
  keywords: [
    "med spa Chicago",
    "medical spa Chicago",
    "botox Chicago",
    "lip filler Chicago",
    "lip injections Chicago",
    "xeomin Chicago",
    "dysport Chicago",
    "IV therapy Chicago",
    "myers cocktail Chicago",
    "NAD+ IV Chicago",
    "physician-led med spa",
    "Wicker Park med spa",
    "Chicago injectables",
    "medical weight loss Chicago",
    "Dr. Chavez",
    "medical grade skin care Chicago",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illariaesthetics.com",
    siteName: "Illari Aesthetics",
    title: "Illari Aesthetics | Physician-Led Medical Spa in Chicago's Wicker Park",
    description: "Illari Aesthetics is a physician-led medical spa in Chicago's Wicker Park, offering doctor-grade skin care, injectables, weight loss, and IV therapy.",
    images: [
      {
        url: "/assets/team/dr-chavez.jpg",
        width: 1023,
        height: 1273,
        alt: "Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illari Aesthetics | Physician-Led Medical Spa in Chicago's Wicker Park",
    description: "Physician-led med spa in Chicago's Wicker Park. Botox, fillers, IV therapy, medical weight loss, and skin care by a board-certified physician.",
    images: ["/assets/team/dr-chavez.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Illari Aesthetics",
  description:
    "Physician-led medical spa in Chicago's Wicker Park offering doctor-grade skin care, injectables, weight loss, and IV therapy. Founded by Dr. Milton Chavez, board-certified family physician with 30+ years of clinical experience.",
  url: "https://illariaesthetics.com",
  telephone: "+17732190326",
  email: "info@illariaesthetics.com",
  image: "https://illariaesthetics.com/assets/team/dr-chavez.jpg",
  logo: "https://illariaesthetics.com/assets/logos/illari-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1509 North Western Avenue, Unit B",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60622",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Dr. Milton Chavez",
    jobTitle: "Founder and Medical Director",
    description:
      "Board-certified family physician with 30+ years of clinical experience. Trained at Rush University and returned as faculty and preceptor for resident physicians.",
  },
  medicalSpecialty: [
    "Family Medicine",
    "Medical Aesthetics",
    "Surgical Dermatology",
  ],
  sameAs: [
    "https://www.instagram.com/illariaesthetics/",
    "https://www.facebook.com/illariaesthetics/",
    "https://www.tiktok.com/@illari.aesthetics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
