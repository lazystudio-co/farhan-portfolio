import React from "react";

const HeroCard = () => (
  <div
    id="profile"
    className="max-md:min-h-[30rem] md:min-h-[540px] md:flex-[6.4_1_0%] rounded-3xl p-8 md:p-10 lg:p-12 relative flex flex-col justify-center overflow-hidden bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
  >
    <div className="absolute top-6 right-6 text-[#a4b5c7] opacity-60">
      <svg viewBox="0 0 100 100" className="w-24 h-24">
        <g stroke="currentColor" fill="none" strokeWidth="0.5">
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="42"
              ry="12"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
        </g>
      </svg>
    </div>
    <p className="text-[11px] md:text-[12px] tracking-[0.24em] text-[#4b5f78] font-semibold uppercase z-10">
      <span className="inline-block w-16 h-px bg-linear-to-r from-transparent via-[#d4b26a] to-transparent mr-3 align-middle" />
      Finance Student Portfolio
    </p>
    <h1 className="text-[2.5rem] lg:text-[3.35rem] xl:text-[3.9rem] font-semibold leading-[1.03] tracking-tight mt-8 z-10 text-[#0d1625] max-w-[14ch]">
      Building{" "}
      <span className="font-['Cormorant_Garamond'] italic font-medium">
        Market Intelligence
      </span>
      <br />
      with Valuation Discipline
    </h1>
    <div className="flex flex-wrap gap-2 mt-8 z-10">
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.74rem] tracking-[0.08em] text-[#34475f] bg-[#e4ecf4] border border-[rgba(94,122,152,0.25)]">
        Equity Research
      </span>
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.74rem] tracking-[0.08em] text-[#34475f] bg-[#e4ecf4] border border-[rgba(94,122,152,0.25)]">
        DCF & Comps
      </span>
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.74rem] tracking-[0.08em] text-[#34475f] bg-[#e4ecf4] border border-[rgba(94,122,152,0.25)]">
        Power BI
      </span>
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.74rem] tracking-[0.08em] text-[#34475f] bg-[#e4ecf4] border border-[rgba(94,122,152,0.25)]">
        Excel Modeling
      </span>
    </div>
  </div>
);

export default HeroCard;
