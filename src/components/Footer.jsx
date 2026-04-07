import React from "react";

const Footer = () => (
  <footer className="rounded-3xl px-6 py-6 md:px-8 md:py-7 text-center bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] mb-4">
    <p className="text-[0.74rem] tracking-[0.14em] uppercase text-[#2f3a49]/80 font-['Manrope']">
      &copy; {new Date().getFullYear()} LazyStudio
    </p>
  </footer>
);

export default Footer;
