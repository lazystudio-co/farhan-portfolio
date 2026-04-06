import React from "react";

const BioCard = () => (
  <div
    id="dashboard"
    className="max-md:min-h-[22rem] md:min-h-[320px] md:flex-[3.6_1_0%] rounded-3xl p-8 md:p-9 relative flex flex-col justify-between bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
  >
    <div className="text-[#a4b5c7] opacity-80 mb-6">
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect
          x="16"
          y="2"
          width="8"
          height="8"
          transform="rotate(45 20 6)"
          fill="currentColor"
        />
        <rect
          x="16"
          y="30"
          width="8"
          height="8"
          transform="rotate(45 20 34)"
          fill="currentColor"
        />
        <rect
          x="2"
          y="16"
          width="8"
          height="8"
          transform="rotate(45 6 20)"
          fill="currentColor"
        />
        <rect
          x="30"
          y="16"
          width="8"
          height="8"
          transform="rotate(45 34 20)"
          fill="currentColor"
        />
        <rect
          x="8"
          y="8"
          width="6"
          height="6"
          transform="rotate(45 11 11)"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="26"
          y="8"
          width="6"
          height="6"
          transform="rotate(45 29 11)"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="8"
          y="26"
          width="6"
          height="6"
          transform="rotate(45 11 29)"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="26"
          y="26"
          width="6"
          height="6"
          transform="rotate(45 29 29)"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    </div>
    <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium max-w-full mb-5">
      Finance undergraduate focused on capital markets, portfolio analytics, and
      valuation frameworks. I build decision-ready dashboards and research notes
      with institutional clarity.
    </p>
    <ul className="grid gap-3.5 text-[13px] list-none p-0 m-0">
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">CGPA</span>
        <span>3.84 / 4.00</span>
      </li>
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">Internships</span>
        <span>2 Completed</span>
      </li>
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">Sector Focus</span>
        <span>Banks & Fintech</span>
      </li>
    </ul>
  </div>
);

export default BioCard;
