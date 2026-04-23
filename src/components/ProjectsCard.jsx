import React, { useRef, useEffect, useState } from "react";

const ProjectsCard = ({ projects = [] }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  if (!projects || projects.length === 0) {
    return (
      <div
        id="casework"
        className="max-md:min-h-176 md:h-[780px] rounded-3xl p-8 md:p-9 flex flex-col bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
      >
        <h2 className="text-2xl font-medium text-[#12223a]">Projects</h2>
        <p className="text-[13px] text-[#3f5168] mt-4">
          No projects added yet.
        </p>
      </div>
    );
  }

  // Duplicate projects to create a seamless infinite loop
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    let animationFrameId;
    
    const autoScroll = () => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollTop += 0.5; // Pixel speed
        
        // Loop when hitting 50% scroll distance
        if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight / 2) {
          scrollRef.current.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    
    // Only run the loop if there's enough content to scroll
    if (scrollRef.current && scrollRef.current.scrollHeight > scrollRef.current.clientHeight) {
      animationFrameId = requestAnimationFrame(autoScroll);
    } else {
      animationFrameId = requestAnimationFrame(autoScroll);
    }
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, duplicatedProjects.length]);

  return (
    <div
      id="casework"
      className="max-md:h-[600px] md:h-[780px] overflow-hidden rounded-3xl bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6 flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Fixed Header */}
      <div className="absolute top-0 left-0 w-full z-20 bg-[#eef2f7]/95 backdrop-blur-md px-8 py-6 md:px-9 md:py-8 border-b border-[#c2d0dd]/40 rounded-t-3xl">
        <h2 className="text-2xl font-medium text-[#12223a]">Projects</h2>
      </div>

      {/* Marquee Wrapper with Absolute Inset to force height bounds */}
      <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 z-10 bg-gradient-to-b from-[#eef2f7] to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10 bg-gradient-to-t from-[#eef2f7] to-transparent"></div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="h-full w-full overflow-y-auto px-8 md:px-9 pt-28 pb-10 flex flex-col gap-10 [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id || project.title}-${index}`} 
              className="group pb-10 border-b border-[#c2d0dd]/60 last:border-b-0 last:pb-0 shrink-0"
            >
              <h3 className="text-xl font-medium text-[#12223a] mb-4">
                {project.title}
              </h3>
              {project.imageUrl ? (
                <div className="mb-4 overflow-hidden rounded-2xl shadow-sm border border-gray-200 bg-white">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} cover`}
                    className="object-cover w-full h-full grayscale-100 group-hover:scale-105 group-hover:grayscale-0 duration-300 ease-in-out "
                  />
                </div>
              ) : null}
              <p className="text-[14px] text-[#3f5168] leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
