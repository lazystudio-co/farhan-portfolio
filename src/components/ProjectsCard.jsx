import React from "react";

const projects = [
  {
    name: "Banking Sector Coverage",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    desc: "Built a 3-statement screening dashboard to compare 12 listed banks on profitability and capital adequacy.",
  },
  {
    name: "Consumer IPO Brief",
    desc: "Prepared valuation memo using DCF and relative multiples for a local consumer company IPO.",
  },
  {
    name: "Macro Strategy Deck",
    desc: "Translated inflation and FX trends into sector allocation guidance for a mock student fund.",
  },
  {
    name: "Fintech Unit Economics",
    desc: "Modeled CAC payback and contribution margins for three subscription fintech models.",
  },
];

const ProjectsCard = () => (
  <div
    id="casework"
    className="max-md:min-h-176 md:min-h-215 md:flex-[8.4_1_0%] rounded-3xl p-8 md:p-9 flex flex-col bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
  >
    {/* Active Project */}
    <div className="cursor-pointer group">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-medium text-[#12223a]">
          {projects[0].name}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
      <div className="w-full mb-8 overflow-hidden h-60 lg:h-72 rounded-xl">
        <img
          src={projects[0].img}
          alt="Finance project cover"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity opacity-90"
        />
      </div>
      <p className="text-[13px] text-[#3f5168] leading-relaxed">
        {projects[0].desc}
      </p>
    </div>
    {/* Project List */}
    <div className="grid gap-1 mt-6">
      {projects.slice(1).map((item) => (
        <div
          key={item.name}
          className="py-5 border-t border-[#c2d0dd]/60 group cursor-pointer hover:bg-white/40 transition-colors -mx-8 px-8 md:px-9"
        >
          <div>
            <span className="text-[1.2rem] font-semibold text-[#13233a]">
              {item.name}
            </span>
            <p className="text-[13px] text-[#4b5f78] mt-1.5 max-w-[48ch] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsCard;
