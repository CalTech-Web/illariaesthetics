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
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/skincare-survey.jpg"
            alt="Book an appointment at Illari Aesthetics Chicago"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Wicker Park, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Schedule Your Appointment
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            Pick a time that works for you and book online, or call and we will help you choose the right service. The practice is in Wicker Park on North Western Avenue, open Monday through Friday, 9am to 4pm.
          </p>
          <a
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Online Now
          </a>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">How to Book</p>
            <h2 className="section-title">Two Ways to Schedule</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center p-10 bg-neutral-bg">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">Book Online</h3>
              <p className="text-neutral-medium leading-relaxed mb-8 text-sm">
                See real availability and book any time, day or night. Pick your service, find a slot, and you are confirmed. Takes about two minutes.
              </p>
              <a
                href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Online
              </a>
            </div>

            <div className="text-center p-10 bg-dark">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Call Us</h3>
              <p className="text-neutral-light leading-relaxed mb-8 text-sm">
                Not sure which service fits your goals, or have a question before booking? Call during office hours and someone at Illari will help you sort it out.
              </p>
              <a href="tel:7732190326" className="btn-outline-white">
                Call 773.219.0326
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services to Book */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">What to Book</p>
            <h2 className="section-title">Our Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Skin Care",
                href: "/skin-care",
                items: ["Skin Survey", "Cryoablation", "Chemical Peels", "Microneedling", "Dermaplane", "Surgical Dermatology"],
              },
              {
                title: "Injectables",
                href: "/injectables",
                items: ["Botox / Xeomin / Dysport", "Hyaluronic Acid Filler", "PRF Treatment"],
              },
              {
                title: "Weight Loss",
                href: "/weight-loss-1",
                items: ["GLP-1 Consultation", "Tirzepatide Program", "Semaglutide Program", "Monthly Check-In"],
              },
              {
                title: "IV Therapy",
                href: "/iv-infusion-services",
                items: ["IV Infusions (~45 min)", "Injections (~15 min)", "Immunity Drip", "NAD+ Therapy", "Hangover Recovery"],
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-6 h-full flex flex-col">
                <h3 className="font-serif text-xl text-dark-medium mb-4">{service.title}</h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <ul className="space-y-2 mb-6 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="text-neutral-medium text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-gold text-xs tracking-wider uppercase font-sans hover:text-gold-dark transition-colors mt-auto">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Find Us</p>
              <h2 className="section-title">Location & Hours</h2>
              <div className="gold-divider-left" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-dark-medium mb-2">Address</h3>
                  <p className="text-neutral-medium">
                    1509 North Western Avenue, Unit B<br />
                    Chicago, IL 60622 (Wicker Park)
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-dark-medium mb-2">Hours</h3>
                  <div className="space-y-1">
                    {[
                      { day: "Monday", hours: "9:00 am to 4:00 pm" },
                      { day: "Tuesday", hours: "9:00 am to 4:00 pm" },
                      { day: "Wednesday", hours: "9:00 am to 4:00 pm" },
                      { day: "Thursday", hours: "9:00 am to 4:00 pm" },
                      { day: "Friday", hours: "9:00 am to 4:00 pm" },
                      { day: "Saturday", hours: "Closed" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item) => (
                      <div key={item.day} className="flex items-center justify-between py-2 border-b border-neutral-bg last:border-0">
                        <span className="text-dark-medium text-sm font-medium">{item.day}</span>
                        <span className={`text-sm ${item.hours === "Closed" ? "text-neutral-light italic" : "text-neutral-medium font-medium"}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-dark-medium mb-2">Phone</h3>
                  <a href="tel:7732190326" className="text-gold hover:text-gold-dark text-lg transition-colors">
                    773.219.0326
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-dark-medium mb-2">Email</h3>
                  <a href="mailto:info@illariaesthetics.com" className="text-neutral-medium hover:text-gold text-sm transition-colors">
                    info@illariaesthetics.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/assets/gallery/gallery-2-treatment.jpg"
                  alt="Illari Aesthetics treatment room in Chicago Wicker Park"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/Illari+Aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm tracking-wider uppercase font-sans hover:text-gold-dark transition-colors flex items-center gap-2"
                >
                  View on Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
