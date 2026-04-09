import React from "react";

const HeroCard = ({ hero }) => {
  const tags = hero?.tags || [];

  return (
    <div
      id="profile"
      className="max-md:min-h-120 md:min-h-135 md:flex-[6.4_1_0%] rounded-3xl p-8 md:p-10 lg:p-12 relative flex flex-col justify-center overflow-hidden bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
    >
      <div className="absolute top-6 right-6 text-[#a4b5c7] opacity-60"></div>
      <h1 className="text-[2.15rem] lg:text-[2.95rem] xl:text-[3.45rem] font-semibold leading-[1.03] tracking-tight mt-0 -translate-y-10 z-10 text-[#0d1625] max-w-[14ch]">
        {hero?.titleStart}{" "}
        <span className="font-['Cormorant_Garamond'] italic font-medium">
          {hero?.titleEmphasis}
        </span>
        <br />
        {hero?.titleEnd}
      </h1>
      <div className="flex flex-wrap gap-2 mt-2 z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.74rem] tracking-[0.08em] text-[#34475f] bg-[#e4ecf4] border border-[rgba(94,122,152,0.25)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
