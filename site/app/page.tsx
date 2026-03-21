import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
            src="/assets/team/dr-chavez.jpg"
            alt="Illari Aesthetics"
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative z-10 text-center px-8">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-sans font-light mb-10 animate-fade-up">
            Physician-Led Medical Spa &mdash; Chicago
          </p>
          <h1 className="font-serif text-ivory leading-[0.9] mb-10">
            <span className="block text-[clamp(3rem,10vw,8rem)] animate-fade-up">Elevate</span>
            <span className="block text-[clamp(3rem,10vw,8rem)] italic ml-[10vw] animate-fade-up-1">Your Beauty</span>
          </h1>
          <div className="animate-fade-up-2">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/50 pb-1 hover:border-gold transition-colors duration-500"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-ivory/30 to-transparent" />
        </div>
      </section>

      {/* ─── STATS MARQUEE ─── */}
      <section className="bg-dark-medium hairline-t hairline-b py-6 overflow-hidden linen-texture">
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
                    <span className="text-ivory/40 text-[10px] tracking-[0.2em] uppercase font-sans font-light">{stat.label}</span>
                  </div>
                  <div className="w-px h-4 bg-gold/20" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT / PHYSICIAN ─── */}
      <section className="relative bg-dark py-32 linen-texture overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Pull quote side */}
            <div className="lg:col-span-7 lg:pr-20 order-2 lg:order-1">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Our Difference</p>

              <blockquote className="mb-12">
                <p className="font-serif text-ivory text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.15] italic">
                  &ldquo;Most med spas are run by estheticians. This one is run by a board-certified physician with thirty years of clinical training.&rdquo;
                </p>
              </blockquote>

              <div className="w-12 h-px bg-gold/30 mb-8" />

              <p className="text-ivory/50 text-sm font-sans font-light leading-[1.8] mb-8 max-w-lg">
                Dr. Milton Chavez trained at Rush University, then stayed on as faculty to teach resident physicians. That combination of clinical depth and academic rigor is what he brought to Illari Aesthetics when he opened a private practice in 2010. The products are medical-grade. The treatment approach is built around your skin, not a preset menu.
              </p>

              <Link
                href="/about"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                Meet Dr. Chavez
              </Link>
            </div>

            {/* Portrait — bleeds off-frame */}
            <div className="lg:col-span-5 order-1 lg:order-2 mb-12 lg:mb-0 relative">
              <div className="aspect-[3/4] relative overflow-hidden lg:-mr-12">
                <Image
                  src="/assets/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Typographic stamp */}
              <div className="absolute bottom-8 left-8 lg:-left-6">
                <p className="font-serif text-gold text-6xl lg:text-8xl leading-none">30+</p>
                <p className="text-ivory/40 text-[9px] tracking-[0.25em] uppercase font-sans font-light mt-2">Years of Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES — MAGAZINE GRID ─── */}
      <section className="bg-dark-medium py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">What We Offer</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
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
                  src="/assets/gallery/gallery-4-lip-augmentation.jpg"
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
                    src="/assets/gallery/weight-loss-hero.jpg"
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
                    src="/assets/gallery/gallery-2-treatment.jpg"
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
      <section className="bg-dark py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">How It Works</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
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
                <h3 className="font-serif text-ivory text-xl mb-3">{item.title}</h3>
                <p className="text-ivory/40 text-sm font-sans font-light leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF — SINGLE TESTIMONIAL ─── */}
      <section className="bg-dark-medium py-32 linen-texture hairline-t hairline-b">
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-12 text-center">
          {/* Star rating as custom line */}
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <blockquote className="mb-10">
            <p className="font-serif text-ivory italic text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3]">
              &ldquo;The difference between Dr. Chavez and every other med spa I have tried is that he actually listens, builds a plan around my skin, and uses products I cannot find anywhere else. I will never go back to a chain.&rdquo;
            </p>
          </blockquote>

          <p className="text-ivory/30 text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">5.0 Stars on Google</p>

          <a
            href="https://www.google.com/maps/place/Illari+Aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/50 text-[11px] tracking-[0.2em] uppercase font-sans font-light border-b border-gold/20 pb-1 hover:text-gold hover:border-gold/50 transition-colors duration-500"
          >
            Read All Reviews
          </a>
        </div>
      </section>

      {/* ─── CONNECT / SOCIAL ─── */}
      <section className="bg-dark py-24 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-12 text-center">Follow Along</p>

          <div className="flex flex-col md:flex-row items-stretch gap-1 max-w-4xl mx-auto">
            {[
              { platform: "Instagram", handle: "@illariaesthetics", stat: "178 followers", href: "https://www.instagram.com/illariaesthetics/", image: "/assets/gallery/gallery-5-face-injection.jpg" },
              { platform: "Facebook", handle: "Illari Aesthetics", stat: "7 followers", href: "https://www.facebook.com/illariaesthetics/", image: "/assets/gallery/gallery-6-lip-fillers.jpg" },
              { platform: "TikTok", handle: "@illari.aesthetics", stat: "789 likes", href: "https://www.tiktok.com/@illari.aesthetics", image: "/assets/gallery/gallery-8-profile.jpg" },
            ].map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ken-burns group relative flex-1 aspect-[3/4] overflow-hidden block"
              >
                <Image src={social.image} alt={social.platform} fill className="object-cover" />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="font-serif text-ivory text-2xl mb-1">{social.platform}</p>
                  <p className="text-ivory/40 text-[10px] tracking-[0.2em] uppercase font-sans font-light mb-4">{social.handle}</p>
                  <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans font-light border-b border-gold/30 pb-0.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Follow
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="relative py-40 linen-texture hairline-t overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-2-treatment.jpg"
            alt="Treatment"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-12 text-center">
          <h2 className="font-serif text-ivory text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-10">
            Your Transformation<br />Starts Here
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/40 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Schedule Your Appointment
            </a>
            <a href="tel:7732190326" className="text-ivory/40 text-sm font-mono tracking-widest hover:text-ivory/70 transition-colors duration-500">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
