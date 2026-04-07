import React, { useState } from "react";
import GlassModalDemo from "./GlassModalDemo";
import GlassCVModal from "./GlassCVModal";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setIsCvOpen(true)}
            className="hidden cursor-pointer md:inline-flex rounded-full px-5 py-2 text-[0.75rem] font-bold tracking-[0.03em] text-[#111827] bg-white border border-black hover:bg-black hover:border-white hover:text-white transition-all duration-300"
          >
            Curriculum Vitae
          </button>
        </div>
        <nav className="hidden md:flex gap-10 text-[11px] font-semibold tracking-[0.2em] text-[#333] mt-5">
          <a href="#casework" className="transition-colors hover:text-black">
            CASEWORK
          </a>
          <a href="#insights" className="transition-colors hover:text-black">
            INSIGHTS
          </a>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="transition-colors hover:text-black cursor-pointer"
          >
            CONNECT
          </button>
        </nav>
      </header>

      <GlassModalDemo
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <GlassCVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
};

export default Header;
