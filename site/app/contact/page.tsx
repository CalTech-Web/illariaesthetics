import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Illari Aesthetics | Chicago Med Spa, Wicker Park",
  description: "Contact Illari Aesthetics in Chicago's Wicker Park. Call 773.219.0326 or email info@illariaesthetics.com. Open Monday through Friday, 9am to 4pm.",
  alternates: { canonical: "https://illariaesthetics.com/contact" },
  openGraph: {
    url: "https://illariaesthetics.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] pb-[75px] bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Get in Touch</p>
          <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Illari Aesthetics is at 1509 N Western Avenue in Wicker Park, open Monday through Friday, 9am to 4pm. The fastest way to get on the schedule is a phone call. Email works too, allow a business day for a response.
          </p>
        </div>
      </section>

      {/* Main Content: Editorial Split */}
      <section className="bg-dark linen-texture-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

            {/* Left: Contact Info Editorial Panel */}
            <div className="relative flex flex-col justify-between overflow-hidden">
              {/* Background image with dark overlay */}
              <div className="absolute inset-0">
                <Image
                  src="/assets/gallery/skincare-microneedling.jpg"
                  alt="Illari Aesthetics treatment room, Wicker Park Chicago"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark/97 via-dark/88 to-dark/70" />
              </div>

              {/* Content over image */}
              <div className="relative z-10 p-10 lg:p-14 flex flex-col h-full">
                <div className="mb-10">
                  <p className="text-gold text-xs tracking-widest uppercase mb-5 font-sans">Contact Information</p>
                  <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 leading-tight">
                    Reach Illari<br />Aesthetics
                  </h2>
                  <div className="w-10 h-px bg-gold mb-10" />
                </div>

                <div className="space-y-8 flex-1">
                  {/* Phone */}
                  <div className="flex gap-5 items-start group">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors duration-300">
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

                  {/* Email */}
                  <div className="flex gap-5 items-start group">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors duration-300">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-1">Email</p>
                      <a href="mailto:info@illariaesthetics.com" className="text-neutral-light hover:text-gold text-sm transition-colors duration-300">
                        info@illariaesthetics.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-5 items-start group">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors duration-300">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-1">Location</p>
                      <p className="text-neutral-light text-sm leading-relaxed">
                        1509 North Western Avenue, Unit B<br />
                        Chicago, IL 60622<br />
                        Wicker Park
                      </p>
                      <a
                        href="https://www.google.com/maps/place/Illari+Aesthetics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold text-xs tracking-wider uppercase font-sans hover:text-white transition-colors duration-300 mt-2 inline-flex items-center gap-1.5"
                      >
                        Get Directions
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
                    <div>
                      <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-2">Hours</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-neutral-light text-sm">Mon through Fri</span>
                          <span className="w-px h-3 bg-gold/30" />
                          <span className="text-gold text-sm font-serif">9 am to 4 pm</span>
                        </div>
                        <p className="text-white/30 text-xs font-sans tracking-wide">Sat &amp; Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-12 pt-8 border-t border-gold/15">
                  <p className="text-white/40 text-xs tracking-widest uppercase font-sans mb-4">Follow Us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/illariaesthetics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/illariaesthetics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@illari.aesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-colors duration-300"
                      aria-label="TikTok"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Panel */}
            <div className="bg-[#121210] px-10 lg:px-14 py-14 flex flex-col justify-center">
              <div className="mb-10">
                <p className="text-gold text-xs tracking-widest uppercase mb-5 font-sans">Send a Message</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 leading-tight">
                  We Will Get<br />Back to You
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-white/40 text-sm leading-relaxed">
                  Fill out the form and someone from Illari Aesthetics will respond within one business day. For faster help, call 773.219.0326.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-dark border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4 font-sans">Ready to Book?</p>
          <h2 className="font-serif text-3xl text-white mb-4">Book Your Appointment Online</h2>
          <p className="text-neutral-light text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            The online booking system shows live availability. Pick your service, find a time, and you are confirmed in minutes.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
