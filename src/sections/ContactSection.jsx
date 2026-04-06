import React from "react";

const ContactSection = () => (
  <section className="section-shell reveal-up" id="contact">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Contact
    </p>
    <h2 className="section-heading">
      Open To Internships & Analyst Opportunities
    </h2>
    <p className="section-subtitle">
      Reach out for internship roles, project collaboration, or finance case
      discussions.
    </p>
    <form className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 rounded-xl border border-[#c8d4e2] bg-white/80"
      />
      <input
        type="email"
        placeholder="Professional Email"
        className="p-3 rounded-xl border border-[#c8d4e2] bg-white/80"
      />
      <input
        type="text"
        placeholder="Company / University"
        className="p-3 rounded-xl border border-[#c8d4e2] bg-white/80 md:col-span-2"
      />
      <textarea
        placeholder="How can I contribute to your team?"
        className="p-3 rounded-xl border border-[#c8d4e2] bg-white/80 md:col-span-2"
        rows={5}
      />
      <button
        type="submit"
        className="btn-gold md:col-span-2 justify-center inline-flex"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default ContactSection;
