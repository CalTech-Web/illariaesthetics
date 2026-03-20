import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Injectables Chicago | Botox, Fillers & PRF by Dr. Chavez",
  description: "Physician-administered injectables in Chicago's Wicker Park. Dr. Chavez offers Botox, Xeomin, Dysport, hyaluronic acid fillers, and PRF treatments for natural, refined results.",
};

export default function InjectablesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-6-lip-fillers.jpg"
            alt="Professional injectable treatments in Chicago"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Physician-Administered, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Injectables Performed by a Board-Certified Physician
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            When a physician administers your injectables, the results are different. Dr. Chavez combines 30+ years of medical expertise with advanced training in filler technique to deliver natural, precise results in Chicago&apos;s Wicker Park.
          </p>
          <a
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book an Injectable Consultation
          </a>
        </div>
      </section>

      {/* Physician Difference */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">The Physician Difference</p>
          <h2 className="section-title">Doctor-Level Precision in Every Injection</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
            In Chicago, many med spas offer injectables performed by nurse practitioners or estheticians. At Illari Aesthetics, Dr. Chavez, a board-certified family physician with additional specialized training in advanced filler technique, performs your treatment. The depth of medical knowledge matters when it comes to anatomy, dosing, and outcome.
          </p>
          <p className="text-neutral-medium leading-relaxed text-lg">
            Every injectable treatment is fully customized to your facial anatomy, your goals, and your medical history, delivering results that look natural and feel like you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Services</p>
            <h2 className="section-title">Injectable Treatments</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wrinkle Relaxers */}
            <div className="bg-white p-8">
              <div className="aspect-[4/3] relative overflow-hidden mb-6">
                <Image
                  src="/assets/gallery/gallery-1-injections.jpg"
                  alt="Wrinkle relaxer injections Chicago"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">Wrinkle Relaxers</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-neutral-medium leading-relaxed mb-4">
                Relax muscles and temporarily reduce the appearance of fine lines and wrinkles. Dr. Chavez uses leading wrinkle relaxer brands to achieve soft, natural-looking results tailored to your expressions and face.
              </p>
              <p className="text-sm text-neutral-medium font-sans">
                <span className="text-gold font-medium">Brands used:</span> Botox, Xeomin, and Dysport
              </p>
            </div>

            {/* Filler */}
            <div className="bg-white p-8">
              <div className="aspect-[4/3] relative overflow-hidden mb-6">
                <Image
                  src="/assets/gallery/gallery-4-lip-augmentation.jpg"
                  alt="Dermal filler lip augmentation Chicago"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">Filler</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-neutral-medium leading-relaxed mb-4">
                Hyaluronic acid dermal filler restores volume to the face, smooths fine lines and wrinkles, and creates fuller, plumper lips. Dr. Chavez&apos;s advanced filler technique training means every placement is precise and results look natural, not overdone.
              </p>
              <p className="text-sm text-neutral-medium font-sans">
                <span className="text-gold font-medium">Product type:</span> Hyaluronic Acid
              </p>
            </div>

            {/* PRF */}
            <div className="bg-white p-8">
              <div className="aspect-[4/3] relative overflow-hidden mb-6">
                <Image
                  src="/assets/gallery/gallery-9-syringe.jpg"
                  alt="PRF platelet rich fibrinogen treatment Chicago"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">PRF (Platelet Rich Fibrinogen)</h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-neutral-medium leading-relaxed mb-4">
                A natural option derived entirely from your own blood. One to two vials are drawn and spun at lower speed to separate PRF from red blood cells, then injected back into the treatment area. Used for skin rejuvenation, hair growth promotion, and wound healing support.
              </p>
              <p className="text-sm text-neutral-medium font-sans">
                <span className="text-gold font-medium">Source:</span> Your own blood, 100% natural
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">In Practice</p>
            <h2 className="section-title">Injectable Expertise</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/assets/gallery/gallery-5-face-injection.jpg", alt: "Face injection treatment Chicago" },
              { src: "/assets/gallery/gallery-7-face-injection2.jpg", alt: "Physician injectable treatment" },
              { src: "/assets/gallery/gallery-6-lip-fillers.jpg", alt: "Lip filler treatment Chicago" },
              { src: "/assets/gallery/gallery-8-profile.jpg", alt: "Patient profile injectable results" },
              { src: "/assets/gallery/gallery-1-injections.jpg", alt: "Injectable treatment in progress" },
              { src: "/assets/gallery/gallery-4-lip-augmentation.jpg", alt: "Lip augmentation before and after" },
            ].map((img) => (
              <div key={img.src} className="aspect-square relative overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Common Questions</p>
            <h2 className="section-title">Injectables FAQ</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What injectables do you offer?",
                a: "We offer wrinkle relaxers including Botox, Xeomin, and Dysport, as well as hyaluronic acid dermal fillers for volume restoration and lip enhancement, and PRF (Platelet Rich Fibrinogen) treatments using your own blood for natural skin rejuvenation and hair growth support.",
              },
              {
                q: "Why should I choose a physician over a nurse practitioner for injectables?",
                a: "Dr. Chavez brings 30+ years of medical training and specialized knowledge of facial anatomy to every injection. His advanced filler technique training and physician-level understanding of physiology means a higher standard of safety, precision, and outcome for your treatment.",
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
                a: "Yes. PRF is derived entirely from your own blood, making it one of the most biocompatible treatments available. There is no risk of allergic reaction to a foreign substance. As a physician, Dr. Chavez follows strict protocols for blood draw and processing.",
              },
            ].map((item) => (
              <details key={item.q} className="border border-neutral-bg bg-white group">
                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between font-serif text-dark-medium text-lg hover:text-gold transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-neutral-medium leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Chicago&apos;s Physician-Led Med Spa</p>
          <h2 className="section-title-white mb-6">Book Your Injectable Consultation</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 max-w-xl mx-auto leading-relaxed">
            Available Monday through Friday, 9am to 4pm. Located in Wicker Park at 1509 N Western Avenue, Unit B.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
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
