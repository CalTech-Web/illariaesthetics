import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "Illari Aesthetics | Physician-Led Medical Spa in Chicago's Wicker Park",
  description:
    "Illari Aesthetics is a physician-led medical spa in Chicago's Wicker Park. Dr. Chavez, board-certified physician with 30+ years experience, offers Botox, fillers, IV therapy, medical weight loss, and skin care.",
  alternates: { canonical: "https://illariaesthetics.com" },
  openGraph: {
    url: "https://illariaesthetics.com",
    images: [
      {
        url: "/assets/team/dr-chavez.jpg",
        width: 1023,
        height: 1273,
        alt: "Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/hero-beauty.webp"
            alt="Illari Aesthetics"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-dark/35" />
        </div>

        <div className="relative z-10 text-center px-8">
          <p className="text-white/70 text-[11px] tracking-[0.3em] uppercase font-sans font-light mb-10 animate-fade-up">
            Physician-Led Medical Spa, Chicago
          </p>
          <h1 className="font-serif text-white text-[clamp(3rem,10vw,8rem)] leading-[0.9] mb-10 animate-fade-up">
            Elevate <span className="italic">Your Beauty</span>
          </h1>
          <div className="animate-fade-up-2">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-white/40 pb-1 hover:border-white hover:text-white transition-colors duration-500"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

      </section>

      {/* ─── STATS MARQUEE ─── */}
      <section className="bg-marble-stone hairline-t hairline-b py-6 overflow-hidden linen-texture">
        <div className="relative z-10 marquee-track">
          {[1, 2].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {[
                { value: "30+", label: "Years of Clinical Experience" },
                { value: "5.0", label: "Star Google Rating" },
                { value: "2010", label: "Private Practice Opened" },
                { value: "100%", label: "Physician-Led Care" },
              ].map((stat) => (
                <div key={`${set}-${stat.label}`} className="flex items-center">
                  <div className="flex items-baseline gap-4 px-12">
                    <span className="font-serif text-gold text-3xl">{stat.value}</span>
                    <span className="text-dark/40 text-[10px] tracking-[0.2em] uppercase font-sans font-light">{stat.label}</span>
                  </div>
                  <div className="w-px h-4 bg-gold/20" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT / PHYSICIAN ─── */}
      <section className="relative bg-dark linen-texture-dark overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[700px]">
            {/* Portrait — left on desktop */}
            <div className="lg:col-span-5 order-1 relative h-[420px] lg:h-auto">
              <Image
                src="/assets/team/dr-chavez.jpg"
                alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark/60" />
              {/* Typographic stamp */}
              <div className="absolute bottom-8 left-8 bg-dark/80 backdrop-blur-sm border border-gold/20 px-7 py-5">
                <p className="font-serif text-gold text-6xl lg:text-8xl leading-none">30+</p>
                <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-sans font-light mt-2">Years of Practice</p>
              </div>
            </div>

            {/* Pull quote side — right */}
            <div className="lg:col-span-7 lg:pl-20 order-2 flex flex-col justify-center py-24 lg:py-32">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Our Difference</p>

              <blockquote className="mb-12">
                <p className="font-serif text-white text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] italic">
                  &ldquo;Most med spas are run by estheticians. This one is run by a board-certified physician with thirty years of clinical training.&rdquo;
                </p>
              </blockquote>

              <div className="w-12 h-px bg-gold/30 mb-8" />

              <p className="text-white/40 text-sm font-sans font-light leading-[1.8] mb-10 max-w-lg">
                Dr. Milton Chavez trained at Rush University, then stayed on as faculty to teach resident physicians. That combination of clinical depth and academic rigor is what he brought to Illari Aesthetics when he opened a private practice in 2010. The products are medical-grade. The treatment approach is built around your skin, not a preset menu.
              </p>

              <Link
                href="/about"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500 self-start"
              >
                Meet Dr. Chavez
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES — MAGAZINE GRID ─── */}
      <section className="bg-marble py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">What We Offer</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              Medical-Grade<br />Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Large tile — left */}
            <Link href="/skin-care" className="ken-burns group relative aspect-[3/4] overflow-hidden block">
              <Image
                src="/assets/gallery/skincare-chemical-peel.jpg"
                alt="Skin Care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="font-serif text-ivory text-4xl lg:text-5xl mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">Skin Care</h3>
                <p className="text-ivory/40 text-xs font-sans font-light tracking-wider max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Chemical peels, microneedling, cryoablation, and surgical dermatology
                </p>
              </div>
            </Link>

            {/* Two stacked — right */}
            <div className="grid grid-rows-2 gap-1">
              <Link href="/injectables" className="ken-burns group relative overflow-hidden block">
                <Image
                  src="/assets/gallery/injectables-hero.jpg"
                  alt="Injectables"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-serif text-ivory text-3xl lg:text-4xl mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">Injectables</h3>
                  <p className="text-ivory/40 text-xs font-sans font-light tracking-wider max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Botox, Xeomin, Dysport, hyaluronic acid filler, and PRF
                  </p>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-1">
                <Link href="/weight-loss-1" className="ken-burns group relative overflow-hidden block">
                  <Image
                    src="/assets/gallery/weight-loss-new.jpg"
                    alt="Weight Loss"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-ivory text-2xl lg:text-3xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">Weight Loss</h3>
                    <p className="text-ivory/40 text-[10px] font-sans font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      GLP-1 program with tirzepatide and semaglutide
                    </p>
                  </div>
                </Link>

                <Link href="/iv-infusion-services" className="ken-burns group relative overflow-hidden block">
                  <Image
                    src="/assets/gallery/iv-therapy-hero.jpg"
                    alt="IV Therapy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-ivory text-2xl lg:text-3xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">IV Therapy</h3>
                    <p className="text-ivory/40 text-[10px] font-sans font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Vitamins and nutrients delivered directly into the bloodstream
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/products"
              className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
            >
              Shop Medical-Grade Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROCESS / STEPS ─── */}
      <section className="bg-marble-stone py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">How It Works</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              Your Path to<br />Elevated Beauty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {/* Connecting line — desktop */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[12%] right-[12%] h-px bg-gold/15" />

            {[
              {
                step: "01",
                title: "Consultation",
                description: "Dr. Chavez reviews your skin and your history, covering what you see, what you have tried, and what the options actually are.",
              },
              {
                step: "02",
                title: "Customized Plan",
                description: "Your plan is built around your skin type, medical history, and the results you want. Not a one-size menu.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Medical-grade procedures in-office, using AlumierMD and Derma Made, the same products Dr. Chavez recommends for home care.",
              },
              {
                step: "04",
                title: "Ongoing Care",
                description: "Follow-ups, product guidance, and monthly check-ins. This is a practice, not a one-time appointment.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <p className="stroke-numeral font-serif text-6xl lg:text-7xl mb-6">{item.step}</p>
                <h3 className="font-serif text-dark text-xl mb-3">{item.title}</h3>
                <p className="text-dark/40 text-sm font-sans font-light leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section className="relative bg-dark linen-texture-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-3-alumier.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.04]"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 py-24">
          {/* Section label with hairline */}
          <div className="flex items-center gap-6 mb-16">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light shrink-0">Why Patients Choose Illari</p>
            <div className="flex-1 h-px bg-gold/15" />
          </div>

          {/* Two-column trust display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/10">

            {/* Left — Google rating */}
            <div className="bg-dark p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-gold text-[clamp(5rem,10vw,8rem)] leading-none mb-2">5.0</p>
                <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-10">Perfect Rating on Google</p>
                <p className="text-white/40 text-sm font-sans font-light leading-[1.8] max-w-sm">
                  Wicker Park patients rate Illari Aesthetics a perfect five stars. Physician-led care that delivers results worth talking about.
                </p>
              </div>
              <div className="mt-12">
                <a
                  href="https://www.google.com/maps/place/Illari+Aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
                >
                  Read Reviews on Google
                </a>
              </div>
            </div>

            {/* Right — Trust pillars */}
            <div className="divide-y divide-gold/10 bg-dark">
              {[
                {
                  value: "30+",
                  label: "Years of Clinical Experience",
                  desc: "Dr. Chavez trained at Rush University, stayed on as faculty, and has been practicing medicine since the early 1990s. That depth of training shows in every treatment.",
                },
                {
                  value: "M.D.",
                  label: "Physician-Led, Not Esthetician-Run",
                  desc: "Board-certified family physician overseeing every procedure. Medical-grade protocols, not beauty counter advice.",
                },
                {
                  value: "100%",
                  label: "Personalized Treatment Plans",
                  desc: "No preset packages. Every plan is built from your skin type, your history, and your actual goals. Not borrowed from a template.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-8 p-10 hover:bg-white/[0.02] transition-colors duration-500 group">
                  <p className="font-serif text-gold text-2xl lg:text-3xl shrink-0 w-14 pt-1">{item.value}</p>
                  <div>
                    <p className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-sans font-light mb-3 group-hover:text-white/90 transition-colors duration-500">{item.label}</p>
                    <p className="text-white/30 text-sm font-sans font-light leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── CONNECT / SOCIAL ─── */}
      <InstagramFeed />

      {/* ─── FOOTER CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/cta-beauty.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/75" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 py-28 lg:py-36 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Ready to Begin?</p>
          <h2 className="font-serif text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
            Your Transformation<br />Starts Here
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-white/50 text-sm font-sans font-light leading-[1.8] mb-12 max-w-md mx-auto">
            A board-certified physician is ready to evaluate your skin and build a real treatment plan. Tailored to you, not templated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Schedule Your Appointment
            </a>
            <a href="tel:7732190326" className="text-white/40 text-sm font-mono tracking-widest hover:text-white/70 transition-colors duration-500 py-3.5">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
