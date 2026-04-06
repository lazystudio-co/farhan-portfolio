import React from "react";

const ProjectsSection = () => (
  <section className="section-shell reveal-up" id="projects">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Projects
    </p>
    <h2 className="section-heading">Selected Case Studies</h2>
    <p className="section-subtitle">
      Representative work demonstrating analytical depth, technical skills, and
      communication standards.
    </p>
    <div className="page-grid">
      <article className="page-card split-6">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Equity Research
        </p>
        <h3 className="text-xl font-semibold text-[#13233a]">
          Banking Sector Comparative Dashboard
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Compared 12 listed banks across ROE, NIM, and capital adequacy with
          ranking logic and visual heatmaps.
        </p>
      </article>
      <article className="page-card split-6">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Valuation
        </p>
        <h3 className="text-xl font-semibold text-[#13233a]">
          IPO Valuation Note
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Built DCF plus trading comps, then translated outputs into a
          scenario-based fair value range.
        </p>
      </article>
      <article className="page-card split-6">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Macro
        </p>
        <h3 className="text-xl font-semibold text-[#13233a]">
          Inflation & FX Strategy Deck
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Mapped macro indicators to sector implications and proposed portfolio
          tilts under different regimes.
        </p>
      </article>
      <article className="page-card split-6">
        <p className="text-xs tracking-[0.16em] uppercase text-[#60728a] mb-2">
          Fintech
        </p>
        <h3 className="text-xl font-semibold text-[#13233a]">
          Unit Economics Model
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Analyzed CAC, LTV, and payback dynamics to assess growth quality and
          scalability assumptions.
        </p>
      </article>
    </div>
  </section>
);

export default ProjectsSection;
