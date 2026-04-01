"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).turnstile && turnstileRef.current && !turnstileRef.current.hasChildNodes()) {
        (window as any).turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACyyv5z1Eu8aP-_e",
          callback: (token: string) => setTurnstileToken(token),
        });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "illariaesthetics.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: "contact-page",
          turnstileToken,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-gold/20 p-10 text-center bg-white/5">
        <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-white mb-3">Message Sent</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          Thank you for reaching out. Someone from Illari Aesthetics will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-white/40 font-sans mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 focus:border-gold outline-none px-4 py-3 text-white text-sm transition-colors duration-300 placeholder:text-white/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-white/40 font-sans mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-white/10 focus:border-gold outline-none px-4 py-3 text-white text-sm transition-colors duration-300 placeholder:text-white/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-white/40 font-sans mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full bg-white/5 border border-white/10 focus:border-gold outline-none px-4 py-3 text-white text-sm transition-colors duration-300 placeholder:text-white/20 resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or call us at 773.219.0326.
        </p>
      )}
      <div ref={turnstileRef} className="mt-4"></div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
