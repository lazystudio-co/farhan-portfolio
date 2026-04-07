import React from "react";

const Header = () => (
  <header className="rounded-3xl px-5 md:px-8 py-5 mb-4 bg-[#f4f7fb] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)]">
    <div className="flex justify-between items-center gap-4">
      <a
        href="/"
        className="text-[1.2rem] md:text-[1.35rem] tracking-wide flex gap-1.5 items-center"
      >
        <span className="font-light">FARHAN'S</span>
        <span className="font-semibold">PORTFOLIO</span>
      </a>
      <a
        href="mailto:farhan.finance@studentmail.com"
        className="hidden md:inline-flex rounded-full px-5 py-2 text-[0.75rem] font-bold tracking-[0.03em] text-[#111827] bg-white border border-black hover:bg-black hover:border-white hover:text-white transition-all duration-300"
      >
        Hire Me
      </a>
    </div>
    <nav className="hidden md:flex gap-10 text-[11px] font-semibold tracking-[0.2em] text-[#333] mt-5">
      <a href="#profile" className="transition-colors hover:text-black">
        PROFILE
      </a>
      <a href="#casework" className="transition-colors hover:text-black">
        CASEWORK
      </a>
      <a href="#dashboard" className="transition-colors hover:text-black">
        DASHBOARD
      </a>
      <a href="#insights" className="transition-colors hover:text-black">
        INSIGHTS
      </a>
      <a
        href="mailto:farhan.finance@studentmail.com"
        className="transition-colors hover:text-black"
      >
        CONNECT
      </a>
    </nav>
    <nav className="flex md:hidden gap-4 text-[0.65rem] font-bold tracking-[0.16em] text-[#34475f] mt-4 overflow-x-auto pb-1">
      <a href="#profile">PROFILE</a>
      <a href="#casework">CASEWORK</a>
      <a href="#dashboard">DASHBOARD</a>
      <a href="#insights">INSIGHTS</a>
      <a href="mailto:farhan.finance@studentmail.com">CONNECT</a>
    </nav>
  </header>
);

export default Header;
