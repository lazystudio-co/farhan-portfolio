import React from "react";

const PortraitCard = ({ portrait, profile }) => (
  <div className="max-md:min-h-128 md:min-h-125 md:flex-[5.7_1_0%] rounded-3xl overflow-hidden relative bg-[#c2d0dd] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)]">
    <img
      src={portrait?.imageUrl}
      alt="Finance student portrait"
      className="absolute inset-0 object-cover w-full h-full mix-blend-luminosity opacity-90"
    />
    <div className="absolute left-5 bottom-5 bg-[#f7fbffde] px-4 py-3 rounded-xl border border-white/80 shadow-md">
      <p className="text-[10px] tracking-[0.2em] text-[#5f7089] font-bold">
        TARGET ROLE
      </p>
      <p className="text-sm font-semibold text-[#112035]">
        {profile?.targetRole}
      </p>
    </div>
  </div>
);

export default PortraitCard;
