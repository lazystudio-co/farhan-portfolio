import React from "react";

const BioCard = () => (
  <div
    id="dashboard"
    className="max-md:min-h-[22rem] md:min-h-[320px] md:flex-[3.6_1_0%] rounded-3xl p-8 md:p-9 relative flex flex-col justify-between bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
  >
    <div className="text-black font-bold text-2xl opacity-80 mb-2">
      <h1>About Me</h1>
    </div>
    <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium max-w-full mb-5">
      Finance undergraduate focused on capital markets, portfolio analytics, and
      valuation frameworks. I build decision-ready dashboards and research notes
      with institutional clarity.
    </p>
    <ul className="grid gap-3.5 text-[13px] list-none p-0 m-0">
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">CGPA</span>
        <span>-- / --</span>
      </li>
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">Education</span>
        <span>Currently pursuing BBA at North South University</span>
      </li>
      <li className="flex justify-between gap-4 border-b border-[rgba(99,123,155,0.22)] pb-2.5 text-[#26364a]">
        <span className="font-bold">Sector Focus</span>
        <span>Corporate Finance and Fintech</span>
      </li>
    </ul>
  </div>
);

export default BioCard;
