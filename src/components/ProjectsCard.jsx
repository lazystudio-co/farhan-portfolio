import React from "react";

const ProjectsCard = ({ projects = [] }) => {
  const [featuredProject, ...otherProjects] = projects;

  if (!featuredProject) {
    return (
      <div
        id="casework"
        className="max-md:min-h-176 md:min-h-215 md:flex-[8.4_1_0%] rounded-3xl p-8 md:p-9 flex flex-col bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
      >
        <h2 className="text-2xl font-medium text-[#12223a]">Projects</h2>
        <p className="text-[13px] text-[#3f5168] mt-4">
          No projects added yet.
        </p>
      </div>
    );
  }

  return (
    <div
      id="casework"
      className="max-md:min-h-176 md:min-h-215 md:flex-[8.4_1_0%] rounded-3xl p-8 md:p-9 flex flex-col bg-[#eef2f7] border border-white/85 shadow-[0_20px_60px_rgba(4,13,26,0.12)] scroll-mt-6"
    >
      <div className="group">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-medium text-[#12223a]">
            {featuredProject.title}
          </h2>
        </div>
        {featuredProject.imageUrl ? (
          <div>
            <img
              src={featuredProject.imageUrl}
              alt="Finance project cover"
              className="object-cover w-full h-full rounded-2xl shadow-md border border-gray-300"
            />
          </div>
        ) : null}
        <p className="text-[13px] text-[#3f5168] leading-relaxed mt-3">
          {featuredProject.description}
        </p>
      </div>

      <div className="grid gap-1 mt-6">
        {otherProjects.map((item, index) => (
          <div
            key={item.id || `${item.title}-${index}`}
            className="py-5 border-t border-[#c2d0dd]/60 group cursor-pointer hover:bg-white/40 transition-colors -mx-8 px-8 md:px-9"
          >
            <div>
              <span className="text-[1.2rem] font-semibold text-[#13233a]">
                {item.title}
              </span>
              <p className="text-[13px] text-[#4b5f78] mt-1.5 max-w-[48ch] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
