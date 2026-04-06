import React from "react";

const AboutSection = () => (
  <section className="section-shell reveal-up" id="about">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      About
    </p>
    <h2 className="section-heading">
      Finance Student With Institutional Thinking
    </h2>
    <p className="section-subtitle">
      I am building toward equity research and investment analyst roles through
      hands-on financial modeling, macro research, and portfolio case studies.
      My work blends technical rigor with clear communication for
      decision-makers.
    </p>
    <div className="grid md:grid-cols-3 gap-4">
      <article className="page-card">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Education
        </p>
        <h3 className="text-lg font-semibold text-[#13233a]">BBA in Finance</h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Major in Finance, focus on valuation, corporate finance, and capital
          markets.
        </p>
      </article>
      <article className="page-card">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Tools
        </p>
        <h3 className="text-lg font-semibold text-[#13233a]">
          Excel • Power BI • SQL
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Comfortable transforming raw financial data into thesis-ready
          insights.
        </p>
      </article>
      <article className="page-card">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Strength
        </p>
        <h3 className="text-lg font-semibold text-[#13233a]">
          Storytelling With Data
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Turn complex market signals into concise memos and presentation-ready
          recommendations.
        </p>
      </article>
    </div>
  </section>
);

export default AboutSection;
