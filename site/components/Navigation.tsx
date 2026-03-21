"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Skin Care", href: "/skin-care" },
      { label: "Injectables", href: "/injectables" },
      { label: "Weight Loss", href: "/weight-loss-1" },
      {
        label: "IV Therapy",
        href: "/iv-infusion-services",
        sub: [
          { label: "IV Infusions", href: "/iv-infusions" },
          { label: "Injections", href: "/injections" },
          { label: "Add-Ons", href: "/add-ons" },
        ],
      },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinkClass = (href: string) =>
    `text-sm tracking-widest uppercase transition-colors ${
      isActive(href)
        ? "text-gold border-b border-gold pb-0.5"
        : "text-white/80 hover:text-gold"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logos/illari-logo.png"
              alt="Illari Aesthetics"
              width={140}
              height={95}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-gold text-sm tracking-widest uppercase transition-colors flex items-center gap-1">
                Services
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-dark-medium border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/skin-care" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                  Skin Care
                </Link>
                <Link href="/injectables" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                  Injectables
                </Link>
                <Link href="/weight-loss-1" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                  Weight Loss
                </Link>
                <div className="relative group/iv">
                  <Link href="/iv-infusion-services" className="flex items-center justify-between px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                    IV Therapy
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 w-48 bg-dark-medium border border-gold/20 opacity-0 invisible group-hover/iv:opacity-100 group-hover/iv:visible transition-all duration-200">
                    <Link href="/iv-infusions" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                      IV Infusions
                    </Link>
                    <Link href="/injections" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                      Injections
                    </Link>
                    <Link href="/add-ons" className="block px-5 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/5 transition-colors tracking-wider">
                      Add-Ons
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/products" className={navLinkClass("/products")}>
              Products
            </Link>
            <Link href="/schedule" className={navLinkClass("/schedule")}>
              Schedule
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-medium border-t border-gold/20">
          <div className="px-6 py-4 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-white/80 hover:text-gold text-sm tracking-widest uppercase">
              Home
            </Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-2 text-white/80 hover:text-gold text-sm tracking-widest uppercase"
            >
              Services
              <svg className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2">
                <Link href="/skin-care" onClick={() => setIsOpen(false)} className="block py-2 text-white/70 hover:text-gold text-sm tracking-wider">
                  Skin Care
                </Link>
                <Link href="/injectables" onClick={() => setIsOpen(false)} className="block py-2 text-white/70 hover:text-gold text-sm tracking-wider">
                  Injectables
                </Link>
                <Link href="/weight-loss-1" onClick={() => setIsOpen(false)} className="block py-2 text-white/70 hover:text-gold text-sm tracking-wider">
                  Weight Loss
                </Link>
                <Link href="/iv-infusion-services" onClick={() => setIsOpen(false)} className="block py-2 text-white/70 hover:text-gold text-sm tracking-wider">
                  IV Therapy
                </Link>
                <Link href="/iv-infusions" onClick={() => setIsOpen(false)} className="block py-1 pl-4 text-white/60 hover:text-gold text-sm">
                  IV Infusions
                </Link>
                <Link href="/injections" onClick={() => setIsOpen(false)} className="block py-1 pl-4 text-white/60 hover:text-gold text-sm">
                  Injections
                </Link>
                <Link href="/add-ons" onClick={() => setIsOpen(false)} className="block py-1 pl-4 text-white/60 hover:text-gold text-sm">
                  Add-Ons
                </Link>
              </div>
            )}
            <Link href="/products" onClick={() => setIsOpen(false)} className="block py-2 text-white/80 hover:text-gold text-sm tracking-widest uppercase">
              Products
            </Link>
            <Link href="/schedule" onClick={() => setIsOpen(false)} className="block py-2 text-white/80 hover:text-gold text-sm tracking-widest uppercase">
              Schedule
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-white/80 hover:text-gold text-sm tracking-widest uppercase">
              Contact
            </Link>
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center mt-4 text-xs"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
