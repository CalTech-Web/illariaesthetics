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
  const services = [
    {
      title: "Skin Care",
      description: "Chemical peels, microneedling, cryoablation, and surgical dermatology, each guided by a board-certified physician and medical-grade products not available at retail.",
      href: "/skin-care",
      image: "/assets/gallery/skincare-chemical-peel.jpg",
    },
    {
      title: "Injectables",
      description: "Botox, Xeomin, Dysport, hyaluronic acid filler, and PRF, all administered by a board-certified physician trained in advanced filler technique.",
      href: "/injectables",
      image: "/assets/gallery/gallery-4-lip-augmentation.jpg",
    },
    {
      title: "Weight Loss",
      description: "A physician-supervised GLP-1 program using tirzepatide and semaglutide, with monthly check-ins, tailored dosing, and a doctor who knows your chart.",
      href: "/weight-loss-1",
      image: "/assets/gallery/weight-loss-hero.jpg",
    },
    {
      title: "IV Therapy",
      description: "Vitamins, minerals, and nutrients delivered directly into the bloodstream, bypassing the digestive system entirely. Faster and more complete than anything you can swallow.",
      href: "/iv-infusion-services",
      image: "/assets/gallery/gallery-2-treatment.jpg",
    },
  ];

  const stats = [
    { value: "30+", label: "Years of Clinical Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "5.0", label: "Star Google Rating", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
    { value: "2010", label: "Private Practice Opened", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: "100%", label: "Physician-Led Care", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/team/dr-chavez.jpg"
            alt="Illari Aesthetics - Physician-Led Medical Spa in Chicago"
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-6 font-sans animate-fade-in">
            Physician-Led Medical Spa, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Elevate<br />Your Beauty
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
            Most med spas are run by estheticians. This one is run by a board-certified physician with 30 years of clinical training. That difference shows up in the products we use, the treatments we recommend, and the results you take home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 text-sm tracking-widest uppercase font-sans hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Book Your Appointment
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href="/about" className="btn-outline-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
              Meet Dr. Chavez
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats + Trust */}
      <section className="relative bg-dark-medium py-20 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(181,126,58,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(181,126,58,0.05),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="group text-center p-6 rounded-sm border border-transparent hover:border-gold/10 hover:bg-gold/[0.02] transition-all duration-500">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:shadow-[0_0_15px_rgba(181,126,58,0.15)] transition-all duration-500">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-4xl md:text-5xl font-serif text-gold mb-2 group-hover:scale-105 transition-transform duration-500">{stat.value}</p>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-3" />
                <p className="text-neutral-light text-[11px] tracking-widest uppercase font-sans">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-16" />

          {/* Google trust */}
          <div className="text-center max-w-lg mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-gold/10 rounded-full px-6 py-3 mb-6">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-serif text-lg">5.0 on Google</span>
            </div>
            <p className="text-neutral-light text-sm leading-relaxed mb-6">
              Patients across Chicago&apos;s Wicker Park trust Illari Aesthetics for physician-led care and medical-grade results.
            </p>
            <a
              href="https://www.google.com/maps/place/Illari+Aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gold text-xs tracking-widest uppercase font-sans hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              Read Reviews
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-bg/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side — show first on mobile */}
            <div className="relative order-1 lg:order-2 group">
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl shadow-dark/20">
                <Image
                  src="/assets/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>
              {/* Gold accent card */}
              <div className="absolute -bottom-5 -left-5 lg:-bottom-6 lg:-left-6 bg-gradient-to-br from-gold to-gold-dark text-white px-6 py-5 shadow-lg shadow-gold/20">
                <p className="font-serif text-3xl leading-none">30+</p>
                <p className="text-[10px] tracking-wider uppercase mt-1.5 leading-tight opacity-90">Years of Clinical<br />Experience</p>
              </div>
              {/* Decorative border */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-full h-full border border-gold/20 -z-10" />
              {/* Decorative dot pattern */}
              <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #B57E3A 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
            </div>

            {/* Content side */}
            <div className="order-2 lg:order-1">
              <p className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-sans">Our Difference</p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-dark-medium mb-5 leading-tight">
                A Board-Certified Physician,<br />Not Just an Esthetician
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent mb-8" />
              <p className="text-neutral-medium leading-relaxed mb-5">
                Dr. Milton Chavez trained at Rush University, then stayed on as faculty to teach resident physicians. That combination of clinical depth and academic rigor is what he brought to Illari Aesthetics when he opened a private aesthetics practice in 2010.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                When a physician runs your med spa, the products matter more. AlumierMD and Derma Made are professionally dispensed lines, not available over the counter. The treatment approach matters too. Dr. Chavez builds a protocol around your actual skin, not a preset menu you pick from.
              </p>
              <blockquote className="relative border-l-2 border-gold/60 pl-6 mb-10">
                <svg className="absolute -top-2 -left-1 w-8 h-8 text-gold/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-dark-medium font-serif italic text-lg leading-relaxed">
                  &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
                </p>
                <cite className="text-neutral-medium text-xs tracking-wider uppercase mt-3 block not-italic font-sans">
                  Dr. Milton Chavez, Founder &amp; Medical Director
                </cite>
              </blockquote>
              <Link href="/about" className="group inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 text-sm tracking-widest uppercase font-sans hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-sans">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-dark-medium mb-5 leading-tight">Medical-Grade Services</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-neutral-medium max-w-xl mx-auto text-sm leading-relaxed">
              Skin care, injectables, weight loss, and IV therapy, all under one roof, all grounded in the medical expertise of a board-certified physician.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden aspect-[16/9] flex items-end rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-500" />
                <div className="relative z-10 p-8 w-full">
                  <div className="w-8 h-px bg-gold mb-4 group-hover:w-12 transition-all duration-500" />
                  <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                  <div className="mt-5 flex items-center text-gold text-xs tracking-widest uppercase font-sans opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                    Explore
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/products" className="group inline-flex items-center gap-2 border border-gold text-gold px-8 py-3.5 text-sm tracking-widest uppercase font-sans hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              Shop Medical-Grade Products
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(181,126,58,0.03),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-sans">How It Works</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-dark-medium mb-5 leading-tight">Your Path to Elevated Beauty</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 z-0" />

            {[
              {
                step: "01",
                title: "Consultation",
                description: "Dr. Chavez reviews your skin and your history. A full assessment that covers what you see, what you have tried, and what the options actually are.",
              },
              {
                step: "02",
                title: "Customized Plan",
                description: "Your plan is built around your skin type, medical history, and the results you want. Not a one-size menu.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "Medical-grade procedures in-office, using AlumierMD and Derma Made, the same products Dr. Chavez recommends for your home care.",
              },
              {
                step: "04",
                title: "Ongoing Care",
                description: "Follow-ups, home product guidance, and monthly check-ins for weight loss patients. This is a practice, not a one-time appointment.",
              },
            ].map((item) => (
              <div key={item.step} className="group text-center px-4 relative z-10">
                <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-8 bg-white shadow-sm group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(181,126,58,0.15)] transition-all duration-500">
                  <span className="font-serif text-gold text-2xl group-hover:scale-110 transition-transform duration-500">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-medium mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                <p className="text-neutral-medium text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-28 bg-dark-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(181,126,58,0.04),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-sans">Follow Along</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-5">Connect with Illari Aesthetics</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-neutral-light max-w-lg mx-auto text-sm leading-relaxed">
              Behind-the-scenes treatments, skincare tips, and updates from the team. Find us on Instagram, Facebook, and TikTok.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/illariaesthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/[0.03] border border-white/5 rounded-sm hover:border-gold/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-pink-500/20 group-hover:scale-110 transition-all duration-500">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-1 group-hover:text-gold transition-colors duration-300">Instagram</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">178 followers</p>
              <p className="text-neutral-light text-xs">@illariaesthetics</p>
            </a>

            <a
              href="https://www.facebook.com/illariaesthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/[0.03] border border-white/5 rounded-sm hover:border-gold/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:scale-110 transition-all duration-500">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-1 group-hover:text-gold transition-colors duration-300">Facebook</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">7 followers</p>
              <p className="text-neutral-light text-xs">Illari Aesthetics</p>
            </a>

            <a
              href="https://www.tiktok.com/@illari.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/[0.03] border border-white/5 rounded-sm hover:border-gold/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-white/10 group-hover:scale-110 transition-all duration-500">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-1 group-hover:text-gold transition-colors duration-300">TikTok</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">789 likes</p>
              <p className="text-neutral-light text-xs">@illari.aesthetics</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-2-treatment.jpg"
            alt="Illari Aesthetics treatment room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,126,58,0.08),transparent_70%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-sans">Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Your Transformation Starts Here
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            A board-certified physician is ready to evaluate your skin and build a real treatment plan. Tailored to you, not templated.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 text-sm tracking-widest uppercase font-sans hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
            >
              Schedule Your Appointment
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="tel:7732190326" className="btn-outline-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
              Call 773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
