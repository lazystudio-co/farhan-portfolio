import React from "react";

const PortraitCard = () => (
  <div className="max-md:min-h-[32rem] md:min-h-[500px] md:flex-[5.7_1_0%] rounded-3xl overflow-hidden relative bg-[#c2d0dd] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)]">
    <img
      src="https://cdn.discordapp.com/attachments/1092500394854326304/1491122373251039242/Gemini_Generated_Image_izfehkizfehkizfe.png?ex=69d68b6d&is=69d539ed&hm=ff64d9844183ca478d0f3df50f6218fd96925068d896d84552783c855f845551&"
      alt="Finance student portrait"
      className="absolute inset-0 object-cover w-full h-full mix-blend-luminosity opacity-90"
    />
    <div className="absolute left-5 bottom-5 bg-[#f7fbffde] px-4 py-3 rounded-xl border border-white/80 shadow-md">
      <p className="text-[10px] tracking-[0.2em] text-[#5f7089] font-bold">
        TARGET ROLE
      </p>
      <p className="text-sm font-semibold text-[#112035]">
        Investment Analyst Intern
      </p>
    </div>
  </div>
);

export default PortraitCard;
