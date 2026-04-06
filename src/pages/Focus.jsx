import React from "react";

const Focus = () => (
  <section className="page-frame reveal-up">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Focus
    </p>
    <h1 className="section-heading">Core Skill Tracks</h1>
    <p className="section-subtitle">
      A balanced profile across technical analysis, business judgment, and
      communication.
    </p>
    <div className="page-grid">
      <article className="page-card split-4">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Financial Modeling
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Integrated statements, forecast logic, and scenario testing.
        </p>
      </article>
      <article className="page-card split-4">
        <h2 className="text-lg font-semibold text-[#13233a]">Valuation</h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          DCF, trading comparables, and sensitivity framework.
        </p>
      </article>
      <article className="page-card split-4">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Research Writing
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Clear thesis, downside risks, and catalyst tracking.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">Data Analytics</h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Dashboard design and insight extraction from market datasets.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">Presentation</h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Investor-ready decks and concise recommendation summaries.
        </p>
      </article>
    </div>
  </section>
);

export default Focus;
