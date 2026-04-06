import React from "react";

const FocusSection = () => (
  <section className="section-shell reveal-up" id="focus">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      Focus
    </p>
    <h2 className="section-heading">What I Bring To A Finance Team</h2>
    <p className="section-subtitle">
      Core capability areas I am actively building through coursework,
      simulations, and independent projects.
    </p>
    <div className="page-grid">
      <article className="page-card split-6">
        <h3 className="text-lg font-semibold text-[#13233a]">
          Valuation & Corporate Finance
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          DCF modeling, comparable companies, and sensitivity analysis for
          investment decision support.
        </p>
      </article>
      <article className="page-card split-6">
        <h3 className="text-lg font-semibold text-[#13233a]">
          Equity Research Writing
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Structured thesis, risk framework, and catalyst-driven recommendations
          in clean research formats.
        </p>
      </article>
      <article className="page-card split-4">
        <h3 className="text-lg font-semibold text-[#13233a]">
          Market Monitoring
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Macro and sector watchlists with key indicator tracking.
        </p>
      </article>
      <article className="page-card split-4">
        <h3 className="text-lg font-semibold text-[#13233a]">
          Data Visualization
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Executive dashboards for concise communication.
        </p>
      </article>
      <article className="page-card split-4">
        <h3 className="text-lg font-semibold text-[#13233a]">
          Presentation Delivery
        </h3>
        <p className="text-sm text-[#4b5f78] mt-2">
          Board-style summaries and investment committee storytelling.
        </p>
      </article>
    </div>
  </section>
);

export default FocusSection;
