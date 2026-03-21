import type { Metadata } from "next";
import Image from "next/image";

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
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Get in Touch</p>
          <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Illari Aesthetics is at 1509 N Western Avenue in Wicker Park, open Monday through Friday, 9am to 4pm. The fastest way to get on the schedule is a phone call. Email works too, allow a business day for a response.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Contact Information</p>
              <h2 className="section-title mb-8">Reach Illari Aesthetics</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-dark-medium mb-1">Phone</h3>
                    <a href="tel:7732190326" className="text-gold hover:text-gold-dark text-xl transition-colors font-sans">
                      773.219.0326
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-dark-medium mb-1">Email</h3>
                    <a href="mailto:info@illariaesthetics.com" className="text-neutral-medium hover:text-gold transition-colors">
                      info@illariaesthetics.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-dark-medium mb-1">Location</h3>
                    <p className="text-neutral-medium leading-relaxed">
                      1509 North Western Avenue, Unit B<br />
                      Chicago, IL 60622<br />
                      Wicker Park
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Illari+Aesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-sm hover:text-gold-dark transition-colors mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-dark-medium mb-1">Hours</h3>
                    <div className="space-y-1">
                      <p className="text-neutral-medium text-sm">Monday through Friday: 9:00 am to 4:00 pm</p>
                      <p className="text-neutral-light text-sm">Saturday: Closed</p>
                      <p className="text-neutral-light text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-serif text-lg text-dark-medium mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/illariaesthetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center text-neutral-medium hover:text-gold hover:border-gold transition-colors"
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
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center text-neutral-medium hover:text-gold hover:border-gold transition-colors"
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
                    className="w-10 h-10 border border-gold/30 flex items-center justify-center text-neutral-medium hover:text-gold hover:border-gold transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Image + CTA */}
            <div>
              <div className="aspect-[4/3] relative overflow-hidden mb-8">
                <Image
                  src="/assets/gallery/skincare-microneedling.jpg"
                  alt="Illari Aesthetics treatment room, Wicker Park Chicago"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-dark p-8 text-center">
                <h3 className="font-serif text-2xl text-white mb-4">Ready to Book?</h3>
                <p className="text-neutral-light text-sm leading-relaxed mb-6">
                  The online booking system shows live availability. If you want help choosing the right service first, call and we will guide you.
                </p>
                <a
                  href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center"
                >
                  Book Your Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
