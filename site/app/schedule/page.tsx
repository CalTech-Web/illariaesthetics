import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule an Appointment | Illari Aesthetics Chicago",
  description: "Book your appointment at Illari Aesthetics in Chicago's Wicker Park. Physician-led skin care, injectables, weight loss, and IV therapy. Monday through Friday, 9am to 4pm.",
  alternates: { canonical: "https://illariaesthetics.com/schedule" },
  openGraph: {
    url: "https://illariaesthetics.com/schedule",
  },
};

export default function SchedulePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-[155px] pb-[75px] bg-dark overflow-hidden linen-texture-dark">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/schedule-hero.jpg"
            alt="Book an appointment at Illari Aesthetics Chicago"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/98 via-dark/80 to-dark/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">
            Wicker Park, Chicago
          </p>
          <h1 className="font-serif text-white text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-10 max-w-3xl">
            Schedule Your<br /><span className="italic">Appointment</span>
          </h1>
          <div className="w-12 h-px bg-gold/40 mb-10" />
          <p className="text-white/50 text-sm font-sans font-light leading-[1.9] mb-12 max-w-xl">
            Pick a time that works for you and book online, or call during office hours and we will help you choose the right service. The practice is in Wicker Park on North Western Avenue, open Monday through Friday, 9am to 4pm.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
          >
            Book Online Now
          </a>
        </div>
      </section>

      {/* ─── HOW TO BOOK ─── */}
      <section className="bg-dark linen-texture-dark border-t border-gold/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

            {/* Book Online */}
            <div className="py-20 lg:py-24 lg:pr-20 lg:border-r border-gold/10">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-8">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-4">Online Booking</p>
              <h2 className="font-serif text-white text-3xl lg:text-4xl mb-6 leading-tight">Book Online</h2>
              <div className="w-8 h-px bg-gold/30 mb-6" />
              <p className="text-white/40 text-sm font-sans font-light leading-[1.9] mb-10 max-w-md">
                See real availability and book any time, day or night. Pick your service, find a slot, and you are confirmed. Takes about two minutes.
              </p>
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                Book Your Appointment
              </a>
            </div>

            {/* Call Us */}
            <div className="py-20 lg:py-24 lg:pl-20 border-t border-gold/10 lg:border-t-0">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-8">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-4">Call the Practice</p>
              <h2 className="font-serif text-white text-3xl lg:text-4xl mb-6 leading-tight">Call Us</h2>
              <div className="w-8 h-px bg-gold/30 mb-6" />
              <p className="text-white/40 text-sm font-sans font-light leading-[1.9] mb-10 max-w-md">
                Not sure which service fits your goals, or have a question before booking? Call during office hours and someone at Illari will help you sort it out.
              </p>
              <a
                href="tel:7732190326"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                773.219.0326
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES TO BOOK ─── */}
      <section className="bg-dark py-32 linen-texture-dark">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">What to Book</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              {
                title: "Skin Care",
                href: "/skin-care",
                image: "/assets/gallery/skincare-facial.jpg",
                items: ["Skin Survey", "Cryoablation", "Chemical Peels", "Microneedling", "Dermaplane", "Surgical Dermatology"],
              },
              {
                title: "Injectables",
                href: "/injectables",
                image: "/assets/gallery/injectable-cosmetic.jpg",
                items: ["Botox / Xeomin / Dysport", "Hyaluronic Acid Filler", "PRF Treatment"],
              },
              {
                title: "Weight Loss",
                href: "/weight-loss",
                image: "/assets/gallery/weight-loss-new.jpg",
                items: ["GLP-1 Consultation", "Tirzepatide Program", "Semaglutide Program", "Monthly Check-In"],
              },
              {
                title: "IV Therapy",
                href: "/iv-infusion-services",
                image: "/assets/gallery/iv-therapy-hero.jpg",
                items: ["IV Infusions (~45 min)", "Injections (~15 min)", "Immunity Drip", "NAD+ Therapy", "Hangover Recovery"],
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="ken-burns group relative aspect-[3/4] overflow-hidden block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="font-serif text-ivory text-2xl lg:text-3xl mb-3 leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    {service.title}
                  </p>
                  <div className="w-8 h-px bg-gold/40 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <ul className="space-y-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.items.map((item) => (
                      <li key={item} className="text-white/30 text-[10px] font-sans font-light flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION & HOURS ─── */}
      <section className="bg-dark linen-texture-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* Left: Image panel */}
            <div className="relative hidden lg:block min-h-[500px]">
              <Image
                src="/assets/gallery/schedule-location.jpg"
                alt="Illari Aesthetics clinic in Wicker Park Chicago"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark" />
              <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/40" />
            </div>

            {/* Right: Info panel */}
            <div className="px-10 lg:px-16 py-20 flex flex-col justify-center">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Find Us</p>
              <h2 className="font-serif text-white text-3xl lg:text-4xl mb-6 leading-tight">
                Location<br />&amp; Hours
              </h2>
              <div className="w-10 h-px bg-gold/30 mb-12" />

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-1">Address</p>
                    <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                      1509 North Western Avenue, Unit B<br />
                      Chicago, IL 60622 (Wicker Park)
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Illari+Aesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-[10px] tracking-widest uppercase font-sans hover:text-white transition-colors duration-300 mt-2 inline-flex items-center gap-1.5"
                    >
                      View on Google Maps
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-3">Hours</p>
                    <div className="space-y-1.5">
                      {[
                        { day: "Monday", hours: "9:00 am to 4:00 pm" },
                        { day: "Tuesday", hours: "9:00 am to 4:00 pm" },
                        { day: "Wednesday", hours: "9:00 am to 4:00 pm" },
                        { day: "Thursday", hours: "9:00 am to 4:00 pm" },
                        { day: "Friday", hours: "9:00 am to 4:00 pm" },
                        { day: "Saturday", hours: "Closed" },
                        { day: "Sunday", hours: "Closed" },
                      ].map((item) => (
                        <div key={item.day} className="flex items-center justify-between py-1.5 border-b border-gold/10 last:border-0">
                          <span className="text-white/50 text-xs font-sans font-light">{item.day}</span>
                          <span className={`text-xs font-sans ${item.hours === "Closed" ? "text-white/20 italic" : "text-gold font-serif"}`}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-1">Phone</p>
                    <a href="tel:7732190326" className="text-gold hover:text-white text-xl font-serif transition-colors duration-300">
                      773.219.0326
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-24 bg-dark border-t border-gold/10 linen-texture-dark">
        <div className="max-w-[1000px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Ready to Begin?</p>
          <h2 className="font-serif text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-6">
            Your Consultation<br />Starts Here
          </h2>
          <div className="w-12 h-px bg-gold/20 mx-auto mb-8" />
          <p className="text-white/40 text-sm font-sans font-light leading-[1.9] mb-12 max-w-md mx-auto">
            The online booking system shows live availability. Pick your service, find a time, and you are confirmed in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book Your Appointment
            </a>
            <a href="tel:7732190326" className="text-white/30 text-sm font-mono tracking-widest hover:text-white/60 transition-colors duration-500">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
