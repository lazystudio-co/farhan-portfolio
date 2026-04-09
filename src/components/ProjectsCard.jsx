import React from "react";

const projects = [
  {
    name: "Finance Sector Coverage",
    img: "https://images.vexels.com/media/users/3/3939/raw/cf9fa275562d62abb6427e1e537a36be-word-pack-finance.jpg",
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
    <div className="group">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-medium text-[#12223a]">
          {projects[0].name}
        </h2>
      </div>
      <div>
        <img
          src={projects[0].img}
          alt="Finance project cover"
          className="object-cover w-full h-full rounded-2xl shadow-md border border-gray-300 "
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
