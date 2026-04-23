import React, { useState } from "react";
import GlassModalDemo from "./GlassModalDemo";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="rounded-3xl px-5 md:px-8 py-5 mb-4 bg-[#f4f7fb] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)]">
        <div className="flex justify-between items-center gap-4">
          <a
            href="/"
            className="text-[1.2rem] md:text-[1.35rem] tracking-wide flex gap-1.5 items-center"
          >
            <span className="font-light">FARHAN'S</span>
            <span className="font-semibold">PORTFOLIO</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-10 text-[11px] font-semibold tracking-[0.2em] text-[#333] mt-5">
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className=" text-[18px] font-semibold transition-colors hover:text-black cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </header>

      <GlassModalDemo
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Header;
