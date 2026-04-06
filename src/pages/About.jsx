import React from "react";

const About = () => (
  <section className="page-frame reveal-up">
    <p className="text-[11px] tracking-[0.22em] uppercase text-[#576b86] font-semibold">
      About
    </p>
    <h1 className="section-heading">
      A Finance Student Focused On Real-World Capital Markets
    </h1>
    <p className="section-subtitle">
      I am developing practical analyst skills through valuation projects,
      research writing, and market dashboards. My goal is to join a
      high-performance team where disciplined analysis drives investment
      decisions.
    </p>
    <div className="page-grid">
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Academic Foundation
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Corporate finance, security analysis, financial statement analysis,
          and portfolio theory.
        </p>
      </article>
      <article className="page-card split-6">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Leadership & Teamwork
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Participated in finance clubs and case competitions, presenting
          recommendations to faculty panels.
        </p>
      </article>
      <article className="page-card split-12">
        <h2 className="text-lg font-semibold text-[#13233a]">
          Career Direction
        </h2>
        <p className="text-sm text-[#4b5f78] mt-2">
          Seeking internships in equity research, investment analysis, or
          corporate strategy where I can contribute quickly and learn deeply.
        </p>
      </article>
    </div>
  </section>
);

export default About;
