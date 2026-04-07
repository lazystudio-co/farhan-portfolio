import React from "react";

const socials = [
  { name: "LINKEDIN", url: "https://linkedin.com" },
  { name: "FACEBOOK", url: "https://facebook.com" },
  { name: "EMAIL", url: "mailto:farhan.finance@studentmail.com" },
];

const SocialLinks = () => (
  <div className="rounded-3xl min-h-24 p-6 flex justify-evenly items-center bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)]">
    {socials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-gray-700 hover:text-black transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {social.name}
      </a>
    ))}
  </div>
);

export default SocialLinks;
