import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Botox, Lip Filler & Dermal Fillers Chicago | Injectables by Dr. Chavez",
  description: "Physician-administered Botox, lip filler, and dermal fillers in Chicago's Wicker Park. Dr. Chavez offers Botox, Xeomin, Dysport, hyaluronic acid lip injections, and PRF for natural, refined results.",
  alternates: { canonical: "https://illariaesthetics.com/injectables" },
  openGraph: {
    url: "https://illariaesthetics.com/injectables",
    title: "Botox, Lip Filler & Dermal Fillers Chicago | Physician-Administered Injectables by Dr. Chavez",
    description: "Botox, Xeomin, Dysport, lip filler, hyaluronic acid dermal fillers, and PRF administered by a board-certified physician in Chicago's Wicker Park. Not an esthetician. A doctor.",
    images: [
      {
        url: "/assets/gallery/injectable-gallery-5.jpg",
        alt: "Professional injectable treatments in Chicago by Dr. Chavez",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What injectables do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrinkle relaxers including Botox, Xeomin, and Dysport. Hyaluronic acid dermal filler for volume and lip enhancement. And PRF, a treatment derived from your own blood used for skin rejuvenation, hair growth support, and wound healing.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose a physician over a nurse practitioner for injectables?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Chavez brings 30 years of clinical training and a physician's knowledge of facial anatomy to every injection. His advanced filler technique training is not standard at most med spas. The difference shows in safety, accuracy, and how the results actually look.",
      },
    },
    {
      "@type": "Question",
      name: "How long do wrinkle relaxers last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results from wrinkle relaxers such as Botox, Xeomin, and Dysport typically last three to four months, varying by individual metabolism and treatment area. Dr. Chavez will advise on timing for maintenance during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long do fillers last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hyaluronic acid fillers generally last six to eighteen months depending on the product used, the area treated, and individual factors. Dr. Chavez will recommend the most appropriate product for your goals.",
      },
    },
    {
      "@type": "Question",
      name: "Is PRF safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PRF comes entirely from your own blood, so there is no risk of allergic reaction to a foreign substance. As a physician, Dr. Chavez follows strict clinical protocols for every step of the draw and processing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer lip filler in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez offers hyaluronic acid lip filler at Illari Aesthetics in Chicago's Wicker Park. Lip injections are customized to your anatomy and goals, with conservative dosing for results that look natural, not overdone. Dr. Chavez has advanced training in filler technique, which makes a meaningful difference in lip work specifically.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer PRF for hair loss in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez offers PRF (Platelet Rich Fibrin) treatments at Illari Aesthetics in Chicago's Wicker Park, including for hair growth support. PRF uses a concentrate derived from your own blood to stimulate natural regeneration in the scalp. It is a non-synthetic option with no risk of allergic reaction, administered as an injection by a board-certified physician.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illariaesthetics.com" },
    { "@type": "ListItem", position: 2, name: "Injectables", item: "https://illariaesthetics.com/injectables" },
  ],
};

export default function InjectablesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-[155px] pb-[75px] bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/injectable-gallery-5.jpg"
            alt="Professional injectable treatments in Chicago"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Physician-Administered, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Injectables Performed by a Board-Certified Physician
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            Anatomy, dosing, placement depth. When a physician administers your injectables, those decisions are backed by 30 years of clinical training, not a certification course. Dr. Chavez brings that same precision to every appointment at Illari Aesthetics in Wicker Park.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book an Injectable Consultation
          </a>
        </div>
      </section>

      {/* Physician Difference */}
      <section className="py-32 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">The Physician Difference</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">
              Why a <span className="italic">Physician</span> Matters
            </h2>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <blockquote className="border-l-2 border-gold/50 pl-8 mb-10">
                <p className="font-serif text-dark text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] italic">
                  &ldquo;Anatomy, dosing, placement depth. When a physician does the injecting, those decisions carry thirty years of clinical training behind them.&rdquo;
                </p>
                <cite className="text-gold/70 text-[10px] tracking-[0.25em] uppercase font-sans font-light mt-5 block not-italic">
                  Dr. Milton Chavez, Founder &amp; Medical Director
                </cite>
              </blockquote>
              <p className="text-dark/55 text-[15px] font-sans font-light leading-[1.9]">
                Most Chicago med spas use nurse practitioners or estheticians for injectables. Dr. Chavez is a board-certified family physician with advanced training specifically in filler technique. That is a different level of anatomical knowledge, and it shows in how your results turn out.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gold/10">
              {[
                { stat: "30+", label: "Years of Clinical Training" },
                { stat: "M.D.", label: "Board-Certified Physician" },
                { stat: "100%", label: "Physician-Administered" },
              ].map((item) => (
                <div key={item.label} className="bg-marble-stone p-6 text-center">
                  <p className="font-serif text-gold text-3xl lg:text-4xl mb-3">{item.stat}</p>
                  <p className="text-dark/40 text-[10px] tracking-[0.15em] uppercase font-sans font-light leading-[1.6]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-dark/45 text-sm font-sans font-light leading-[1.9] max-w-2xl mx-auto text-center">
            Every treatment is built around your facial anatomy, your goals, and your medical history. Results that look natural, not like you had work done.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-dark linen-texture-dark">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Our Services</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              Injectable<br />Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {/* Wrinkle Relaxers */}
            <div className="ken-burns group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/gallery/injectable-wrinkle-new.jpg"
                alt="Wrinkle relaxer injections Chicago"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-dark/10" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-4">Botox · Xeomin · Dysport</p>
                <h3 className="font-serif text-ivory text-3xl lg:text-4xl mb-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-700">Wrinkle Relaxers</h3>
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <p className="text-ivory/50 text-sm font-sans font-light leading-[1.8] max-w-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Relax the muscles that create fine lines and wrinkles. Calibrated dosing and placement so results read as refreshed, not frozen.
                </p>
              </div>
            </div>

            {/* Filler */}
            <div className="ken-burns group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/gallery/injectable-gallery-5.jpg"
                alt="Dermal filler lip augmentation Chicago"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-dark/10" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-4">Hyaluronic Acid</p>
                <h3 className="font-serif text-ivory text-3xl lg:text-4xl mb-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-700">Lip Filler &amp; Dermal Filler</h3>
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <p className="text-ivory/50 text-sm font-sans font-light leading-[1.8] max-w-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Restores volume, smooths lines, and creates fuller, more defined lips. Advanced filler technique with conservative dosing for natural results.
                </p>
              </div>
            </div>

            {/* PRF */}
            <div className="ken-burns group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/gallery/injectable-syringe.jpg"
                alt="PRF platelet rich fibrinogen treatment Chicago"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-dark/10" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-light mb-4">100% Natural · Your Own Blood</p>
                <h3 className="font-serif text-ivory text-3xl lg:text-4xl mb-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-700">PRF Treatment</h3>
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <p className="text-ivory/50 text-sm font-sans font-light leading-[1.8] max-w-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Derived entirely from your own blood. Used for skin rejuvenation, hair growth support, and wound healing. Nothing foreign introduced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-dark linen-texture-dark py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">In Practice</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">Injectable<br />Expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10">
            {[
              { src: "/assets/gallery/injectable-gallery-1.jpg", alt: "Aesthetic treatment at Illari Aesthetics" },
              { src: "/assets/gallery/injectable-gallery-5.jpg", alt: "Cosmetic lip filler syringe at Illari Aesthetics" },
              { src: "/assets/gallery/injectable-gallery-2.jpg", alt: "Injectable procedure at Illari Aesthetics" },
              { src: "/assets/gallery/injectable-wrinkle-new.jpg", alt: "Wrinkle relaxer treatment" },
              { src: "/assets/gallery/injectable-gallery-6.png", alt: "Male facial injectable treatment Chicago" },
              { src: "/assets/gallery/injectable-gallery-7.png", alt: "Aesthetic skin treatment at Illari Aesthetics" },
            ].map((img) => (
              <div key={img.src} className="ken-burns group aspect-square relative overflow-hidden bg-dark">
                <Image src={img.src} alt={img.alt} fill className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Common Questions</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">
              Injectables <span className="italic">FAQ</span>
            </h2>
            <div className="w-12 h-px bg-gold/30 mx-auto mb-6" />
            <p className="text-dark/40 text-sm font-sans font-light leading-[1.8] max-w-lg mx-auto">
              Questions about Botox, filler, PRF, or what to expect from a physician-administered treatment. Answered here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "What injectables do you offer?",
                a: "Wrinkle relaxers including Botox, Xeomin, and Dysport. Hyaluronic acid dermal filler for volume and lip enhancement. And PRF, a treatment derived from your own blood used for skin rejuvenation, hair growth support, and wound healing.",
              },
              {
                q: "Why should I choose a physician over a nurse practitioner for injectables?",
                a: "Dr. Chavez brings 30 years of clinical training and a physician's knowledge of facial anatomy to every injection. His advanced filler technique training is not standard at most med spas. The difference shows in safety, accuracy, and how the results actually look.",
              },
              {
                q: "How long do wrinkle relaxers last?",
                a: "Results from wrinkle relaxers such as Botox, Xeomin, and Dysport typically last three to four months, varying by individual metabolism and treatment area. Dr. Chavez will advise on timing for maintenance during your consultation.",
              },
              {
                q: "How long do fillers last?",
                a: "Hyaluronic acid fillers generally last six to eighteen months depending on the product used, the area treated, and individual factors. Dr. Chavez will recommend the most appropriate product for your goals.",
              },
              {
                q: "Is PRF safe?",
                a: "Yes. PRF comes entirely from your own blood, so there is no risk of allergic reaction to a foreign substance. As a physician, Dr. Chavez follows strict clinical protocols for every step of the draw and processing.",
              },
              {
                q: "Do you offer lip filler in Chicago?",
                a: "Yes. Dr. Chavez offers hyaluronic acid lip filler at Illari Aesthetics in Chicago's Wicker Park. Lip injections are customized to your anatomy and goals, with conservative dosing for results that look natural, not overdone.",
              },
              {
                q: "Do you offer PRF for hair loss in Chicago?",
                a: "Yes. Dr. Chavez offers PRF (Platelet Rich Fibrin) treatments including for hair growth support. PRF uses a concentrate derived from your own blood to stimulate natural regeneration in the scalp. It is a non-synthetic option with no risk of allergic reaction.",
              },
            ].map((item, i) => (
              <details key={item.q} className="group border-b border-gold/10">
                <summary className="cursor-pointer flex items-center gap-6 py-7 list-none">
                  <span className="font-serif text-gold text-lg flex-shrink-0 opacity-40 group-open:opacity-100 transition-opacity duration-300">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-dark text-lg leading-snug group-hover:text-gold transition-colors duration-300 flex-1">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center group-open:bg-gold/10 group-open:border-gold/60 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 text-gold group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-7 pl-12">
                  <p className="text-dark/45 text-sm font-sans font-light leading-[1.9]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden">
        {/* Background image — pushed left */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 bottom-0 w-[60%]">
            <Image
              src="/assets/gallery/injectable-cta-bg.jpg"
              alt=""
              fill
              className="object-cover object-left"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/80 to-dark" />
          <div className="absolute inset-0 bg-gradient-to-l from-dark via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 py-28 lg:py-36">
          <div className="lg:ml-auto lg:max-w-lg text-center lg:text-left">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Chicago&apos;s Physician-Led Med Spa</p>
            <h2 className="font-serif text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">
              Book Your Injectable<br /><span className="italic">Consultation</span>
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-8 mx-auto lg:mx-0" />
            <p className="text-white/40 text-sm font-sans font-light mb-12 leading-[1.8]">
              Available Monday through Friday, 9am to 4pm. Located in Wicker Park at 1509 N Western Avenue, Unit B.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
              >
                Book Now
              </a>
              <a href="tel:7732190326" className="text-white/40 text-sm font-mono tracking-widest hover:text-white/70 transition-colors duration-500 py-3.5">
                773.219.0326
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
