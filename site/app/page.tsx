import Image from "next/image";
import Link from "next/link";

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
    { value: "30+", label: "Years of Clinical Experience" },
    { value: "5.0", label: "Star Google Rating" },
    { value: "2010", label: "Private Practice Opened" },
    { value: "100%", label: "Physician-Led Care" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/team/dr-chavez.jpg"
            alt="Illari Aesthetics - Physician-Led Medical Spa in Chicago"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
              Physician-Led Medical Spa, Chicago
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Elevate<br />Your Beauty
            </h1>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Most med spas are run by estheticians. This one is run by a board-certified physician with 30 years of clinical training. That difference shows up in the products we use, the treatments we recommend, and the results you take home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Your Appointment
              </a>
              <Link href="/about" className="btn-outline-white">
                Meet Dr. Chavez
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark-medium border-y border-gold/20 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-serif text-gold mb-1">{stat.value}</p>
                <p className="text-neutral-light text-xs tracking-wider uppercase font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Trust Band */}
      <section className="py-14 bg-dark-medium border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-5 font-sans">Patient Trust</p>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-white font-serif text-3xl mb-2">5.0 Stars on Google</p>
          <p className="text-neutral-light text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Patients across Chicago&apos;s Wicker Park trust Illari Aesthetics for physician-led care and medical-grade results.
          </p>
          <a
            href="https://www.google.com/maps/place/Illari+Aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-xs"
          >
            Read Reviews
          </a>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Difference</p>
              <h2 className="section-title">A Board-Certified Physician,<br />Not Just an Esthetician</h2>
              <div className="gold-divider-left" />
              <p className="text-neutral-medium leading-relaxed mb-6">
                Dr. Milton Chavez trained at Rush University, then stayed on as faculty to teach resident physicians. That combination of clinical depth and academic rigor is what he brought to Illari Aesthetics when he opened a private aesthetics practice in 2010.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-6">
                When a physician runs your med spa, the products matter more. AlumierMD and Derma Made are professionally dispensed lines, not available over the counter. The treatment approach matters too. Dr. Chavez builds a protocol around your actual skin, not a preset menu you pick from.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 mb-8">
                <p className="text-dark-medium font-serif italic text-lg leading-relaxed">
                  &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
                </p>
                <cite className="text-neutral-medium text-sm mt-2 block not-italic">
                  Dr. Milton Chavez, Founder and Medical Director
                </cite>
              </blockquote>
              <Link href="/about" className="btn-primary">
                Our Story
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/assets/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 w-48">
                <p className="font-serif text-2xl">30+</p>
                <p className="text-xs tracking-wider uppercase mt-1">Years of Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">What We Offer</p>
            <h2 className="section-title">Medical-Grade Services</h2>
            <div className="gold-divider" />
            <p className="text-neutral-medium max-w-2xl mx-auto">
              Skin care, injectables, weight loss, and IV therapy, all under one roof, all grounded in the medical expertise of a board-certified physician.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group block bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-dark-medium mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-neutral-medium text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-gold text-sm tracking-wider uppercase font-sans">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline">
              Shop Medical-Grade Products
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">How It Works</p>
            <h2 className="section-title">Your Path to Elevated Beauty</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gold/25 z-0" />

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
              <div key={item.step} className="text-center px-4 relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6 bg-white">
                  <span className="font-serif text-gold text-xl">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-medium mb-3">{item.title}</h3>
                <p className="text-neutral-medium text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Follow Along</p>
            <h2 className="section-title">Connect with Illari Aesthetics</h2>
            <div className="gold-divider" />
            <p className="text-neutral-medium max-w-2xl mx-auto">
              Behind-the-scenes treatments, skincare tips, and updates from the team. Find us on Instagram, Facebook, and TikTok.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/illariaesthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark-medium mb-1 group-hover:text-gold transition-colors">Instagram</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">178 followers</p>
              <p className="text-neutral-medium text-xs">@illariaesthetics</p>
            </a>

            <a
              href="https://www.facebook.com/illariaesthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark-medium mb-1 group-hover:text-gold transition-colors">Facebook</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">7 followers</p>
              <p className="text-neutral-medium text-xs">Illari Aesthetics</p>
            </a>

            <a
              href="https://www.tiktok.com/@illari.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-dark flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark-medium mb-1 group-hover:text-gold transition-colors">TikTok</h3>
              <p className="text-gold font-sans text-sm font-medium mb-1">789 likes</p>
              <p className="text-neutral-medium text-xs">@illari.aesthetics</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Your Transformation Starts Here
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            A board-certified physician is ready to evaluate your skin and build a real treatment plan. Tailored to you, not templated.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Your Appointment
            </a>
            <a href="tel:7732190326" className="btn-outline-white">
              Call 773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
