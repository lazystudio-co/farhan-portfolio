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

const HeroSection = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const { content } = usePortfolioContent();

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
