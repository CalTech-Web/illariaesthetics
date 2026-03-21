"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-sm hairline-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logos/illari-logo.png"
              alt="Illari Aesthetics"
              width={140}
              height={95}
              className="h-10 w-auto opacity-90"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light transition-colors ${
                  isActive(link.href) ? "text-gold active" : "text-ivory/60 hover:text-ivory"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button className={`nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light transition-colors flex items-center gap-1.5 text-ivory/60 hover:text-ivory`}>
                Services
                <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-4 w-52 bg-dark-medium/95 backdrop-blur-sm hairline-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {[
                  { label: "Skin Care", href: "/skin-care" },
                  { label: "Injectables", href: "/injectables" },
                  { label: "Weight Loss", href: "/weight-loss-1" },
                  { label: "IV Therapy", href: "/iv-infusion-services" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-sans font-light text-ivory/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "Products", href: "/products" },
              { label: "Schedule", href: "/schedule" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light transition-colors ${
                  isActive(link.href) ? "text-gold active" : "text-ivory/60 hover:text-ivory"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.2em] uppercase font-sans font-light text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ivory/70 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark/98 backdrop-blur-sm hairline-t">
          <div className="px-8 py-8 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Skin Care", href: "/skin-care" },
              { label: "Injectables", href: "/injectables" },
              { label: "Weight Loss", href: "/weight-loss-1" },
              { label: "IV Therapy", href: "/iv-infusion-services" },
              { label: "Products", href: "/products" },
              { label: "Schedule", href: "/schedule" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[11px] tracking-[0.2em] uppercase font-sans font-light text-ivory/50 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase font-sans font-light text-gold border-b border-gold/40 pb-0.5"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
