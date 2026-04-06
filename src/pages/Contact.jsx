import React from "react";

const Contact = () => (
  <section className="page-frame reveal-up">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Contact
    </p>
    <h1 className="section-heading">Let&apos;s Discuss Opportunities</h1>
    <p className="section-subtitle">
      Available for internships, student-led investment initiatives, and finance
      project collaboration.
    </p>
    <form className="page-grid">
      <input
        type="text"
        placeholder="Your Name"
        className="page-card split-6 border border-[#c8d4e2] bg-white/85"
      />
      <input
        type="email"
        placeholder="Work Email"
        className="page-card split-6 border border-[#c8d4e2] bg-white/85"
      />
      <input
        type="text"
        placeholder="Company / Team"
        className="page-card split-12 border border-[#c8d4e2] bg-white/85"
      />
      <textarea
        placeholder="Message"
        className="page-card split-12 border border-[#c8d4e2] bg-white/85 min-h-40"
        rows={6}
      />
      <div className="split-12">
        <button type="submit" className="btn-gold">
          Send Inquiry
        </button>
      </div>
    </form>
  </section>
);

export default Contact;
