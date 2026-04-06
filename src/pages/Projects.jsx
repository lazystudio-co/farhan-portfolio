import React from "react";

const Projects = () => (
  <section className="page-frame reveal-up">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Projects
    </p>
    <h1 className="section-heading">Finance Work Samples</h1>
    <p className="section-subtitle">
      A curated set of projects designed to mirror analyst-level workflows and
      deliverables.
    </p>
    <div className="page-grid">
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Bank Screening Dashboard
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Automated peer benchmarking for profitability, asset quality, and
          valuation metrics.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          IPO Valuation Memo
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Fair value band and investment stance using DCF and comps with
          scenario assumptions.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Macro Pulse Tracker
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Monitored inflation, rates, and FX movements to evaluate sector
          positioning opportunities.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Fintech Unit Economics
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Modeled revenue quality and customer economics to assess
          sustainability of growth.
        </p>
      </article>
    </div>
  </section>
);

export default Projects;
