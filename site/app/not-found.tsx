import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark linen-texture-dark">
      <div className="relative z-10 max-w-[600px] mx-auto px-8 text-center">
        <p className="font-serif text-gold text-[clamp(6rem,15vw,10rem)] leading-none mb-6">404</p>
        <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
        <h1 className="font-serif text-ivory text-2xl md:text-3xl mb-4">
          Page Not <span className="italic">Found</span>
        </h1>
        <p className="text-ivory/35 text-sm font-sans font-light leading-[1.8] mb-12 max-w-md mx-auto">
          The page you are looking for does not exist or may have been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="text-ivory/40 text-sm font-sans font-light hover:text-gold transition-colors duration-500 py-3.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
