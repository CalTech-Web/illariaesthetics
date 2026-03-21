import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark linen-texture">
      <div className="hairline-t" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logos/illari-logo.png"
              alt="Illari Aesthetics"
              width={140}
              height={95}
              className="h-10 w-auto opacity-50 mb-6"
            />
            <p className="text-ivory/30 text-xs font-sans font-light leading-[1.8]">
              A physician-led medical practice in Chicago&apos;s Wicker Park. Board-certified care, medical-grade products, real results.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-ivory/30 text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-6">Services</p>
            <ul className="space-y-3">
              {[
                { label: "Skin Care", href: "/skin-care" },
                { label: "Injectables", href: "/injectables" },
                { label: "Weight Loss", href: "/weight-loss-1" },
                { label: "IV Therapy", href: "/iv-infusion-services" },
                { label: "Products", href: "/products" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/40 hover:text-gold text-xs font-sans font-light tracking-wider transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-ivory/30 text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-6">Company</p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Schedule", href: "/schedule" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/40 hover:text-gold text-xs font-sans font-light tracking-wider transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-ivory/30 text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-6">Visit</p>
            <div className="space-y-4">
              <p className="text-ivory/40 text-xs font-sans font-light leading-[1.8]">
                1509 North Western Avenue, Unit B<br />
                Chicago, IL 60622
              </p>
              <a href="tel:7732190326" className="block text-gold/60 hover:text-gold text-xs font-mono tracking-widest transition-colors duration-300">
                773.219.0326
              </a>
              <a href="mailto:info@illariaesthetics.com" className="block text-ivory/40 hover:text-gold text-xs font-sans font-light tracking-wider transition-colors duration-300">
                info@illariaesthetics.com
              </a>
              <div className="flex items-center gap-5 pt-2">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/illariaesthetics/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { label: "Facebook", href: "https://www.facebook.com/illariaesthetics/", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "TikTok", href: "https://www.tiktok.com/@illari.aesthetics", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/20 hover:text-gold/60 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="hairline-t">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/20 text-[10px] font-mono tracking-wider">
            &copy; 2024 Illari Aesthetics
          </p>
          <p className="text-ivory/20 text-[10px] font-mono tracking-wider">
            Built by{" "}
            <a href="https://caltechweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold/40 transition-colors duration-300">
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
