import React, { useState } from "react";
import Header from "../components/Header";

import HeroCard from "../components/HeroCard";
import BioCard from "../components/BioCard";
import PortraitCard from "../components/PortraitCard";
import ContactCard from "../components/ContactCard";
import ProjectsCard from "../components/ProjectsCard";
import Footer from "../components/Footer";
import GlassCVModal from "../components/GlassCVModal";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

const Skeleton = () => (
  <div className="portfolio-backdrop p-2 md:p-4 font-['Manrope'] text-[#1a1a1a] bg-[radial-gradient(circle_at_10%_0%,rgba(242,246,251,0.62),transparent_38%),radial-gradient(circle_at_86%_8%,rgba(223,229,236,0.58),transparent_34%)]">
    <div className="portfolio-shell w-full max-w-420 mx-auto flex flex-col p-3 md:p-5 rounded-2xl md:rounded-4xl bg-[#d5dbe3]/35 border border-white/35 shadow-[0_30px_60px_rgba(20,30,44,0.22)] backdrop-blur-[2px]">
      
      {/* Header Skeleton */}
      <div className="h-[84px] w-full bg-[#f4f7fb]/80 rounded-3xl mb-4 animate-pulse border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-4">
          <div className="h-[300px] md:h-[450px] bg-white/60 rounded-3xl animate-pulse border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />
          <div className="h-[200px] md:h-[314px] bg-[#eef2f7]/80 rounded-3xl animate-pulse border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[300px] bg-[#eef2f7]/80 rounded-3xl animate-pulse border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />
          <div className="h-[300px] md:h-[464px] bg-[#0f172a]/60 rounded-3xl animate-pulse shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-4">
          <div className="h-[400px] md:h-[780px] bg-[#eef2f7]/80 rounded-3xl animate-pulse border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.05)]" />
        </div>

        {/* Footer */}
        <div className="md:col-span-3">
          <div className="h-[64px] w-full bg-[#202d3d]/80 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const { content, isLoading } = usePortfolioContent();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="portfolio-backdrop p-2 md:p-4 font-['Manrope'] text-[#1a1a1a] selection:bg-[#c2d0dd] selection:text-white bg-[radial-gradient(circle_at_10%_0%,rgba(242,246,251,0.62),transparent_38%),radial-gradient(circle_at_86%_8%,rgba(223,229,236,0.58),transparent_34%)]">
      <div className="portfolio-shell w-full max-w-420 mx-auto flex flex-col p-3 md:p-5 rounded-2xl md:rounded-4xl bg-[#d5dbe3]/35 border border-white/35 shadow-[0_30px_60px_rgba(20,30,44,0.22)] backdrop-blur-[2px]">
        <Header />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 md:min-h-215">
          {/* --- COLUMN 1 --- */}
          <div className="flex flex-col gap-4">
            <HeroCard hero={content.hero} />
            <BioCard aboutSection={content.aboutSection} />
          </div>
          {/* --- COLUMN 2 --- */}
          <div className="flex flex-col gap-4">
            <PortraitCard
              portrait={content.portrait}
              profile={content.profile}
            />
            <ContactCard
              onOpenCv={() => setIsCvOpen(true)}
              contact={content.contact}
            />
          </div>
          {/* --- COLUMN 3 --- */}
          <div className="flex flex-col gap-4">
            <ProjectsCard projects={content.projects} />
          </div>
          <div className="md:col-span-3">
            <Footer footer={content.footer} />
          </div>
        </div>
      </div>
      <GlassCVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
};

export default HeroSection;
