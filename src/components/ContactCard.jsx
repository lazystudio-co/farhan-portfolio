import React from "react";

const ContactCard = ({ onOpenCv, contact }) => (
  <button
    type="button"
    onClick={onOpenCv}
    id="insights"
    className="max-md:min-h-84 md:min-h-90 md:flex-[4.3_1_0%] bg-[#c2d0dd] rounded-3xl p-8 md:p-9 relative flex flex-col justify-between group cursor-pointer hover:bg-[#b0c0cf] transition-colors border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
  >
    <div className="flex items-start justify-between">
      <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.14em] leading-tight text-[#3f5068] uppercase">
        {contact?.availabilityLabel}
        <br />
        {contact?.availabilityValue}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    <div>
      <h2 className="text-[2.6rem] md:text-[3.2rem] font-medium leading-none tracking-tight text-[#102036]">
        {contact?.heading}
      </h2>
      <p className="mt-3 text-sm text-[#445772]">{contact?.description}</p>
    </div>
  </button>
);

export default ContactCard;
