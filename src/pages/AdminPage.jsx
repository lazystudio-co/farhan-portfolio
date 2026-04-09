import React, { useState } from "react";

const INITIAL_FORM = {
  profile: {
    profileUrl: "https://yourportfolio.com",
    targetRole: "Investment Analyst Intern",
  },
  aboutSection: {
    aboutMe:
      "Finance undergraduate at North South University focused on capital markets. I am building a foundation in quantitative analysis to bridge the gap between academic theory and high-impact physical assets.",
    cgpa: "-- / --",
    education: "Currently pursuing BBA at North South University",
    sectorFocus: "Corporate Finance and Fintech",
  },
  projects: [
    {
      id: 1,
      title: "Banking Sector Comparative Dashboard",
      description: "Compared listed banks on ROE, NIM, and capital adequacy.",
    },
    {
      id: 2,
      title: "IPO Valuation Note",
      description: "Built DCF and trading comps to estimate fair value range.",
    },
  ],
};

const InputField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <label className="flex flex-col gap-2">
    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
      {label}
    </span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
    />
  </label>
);

const AdminPage = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [saveState, setSaveState] = useState("idle");

  const updateProfile = (field, value) => {
    setForm((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const updateProject = (id, field, value) => {
    setForm((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project,
      ),
    }));
  };

  const addProject = () => {
    setForm((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now(),
          title: "",
          description: "",
        },
      ],
    }));
  };

  const removeProject = (id) => {
    setForm((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }));
  };

  const handleSave = () => {
    setSaveState("saving");

    setTimeout(() => {
      setSaveState("saved");
    }, 900);
  };

  return (
    <div className="portfolio-backdrop">
      <div className="portfolio-shell p-4 md:p-8 font-['Manrope']">
        <div className="mx-auto w-full max-w-375 rounded-4xl border border-white/45 bg-[linear-gradient(148deg,rgba(255,255,255,0.9),rgba(247,249,252,0.82))] shadow-[0_25px_80px_rgba(10,20,34,0.2)] backdrop-blur-md">
          <header className="border-b border-[#d8dee8] px-5 py-5 md:px-9 md:py-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f7f96]">
                  Portfolio Control Center
                </p>
                <h1 className="mt-1 text-3xl font-bold text-[#12233a] md:text-4xl">
                  Admin Dashboard
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-[#415471]">
                  Update your portfolio content, tune project highlights, and
                  keep your public profile current from one place.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-xl bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,118,110,0.35)] transition hover:brightness-110"
                >
                  {saveState === "saving" ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </header>

          <main className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:px-9 md:py-7">
            <div className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Profile Overview
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <InputField
                    label="Profile URL"
                    value={form.profile.profileUrl}
                    onChange={(event) =>
                      updateProfile("profileUrl", event.target.value)
                    }
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div className="mt-4 space-y-4">
                  <InputField
                    label="Target Role"
                    value={form.profile.targetRole}
                    onChange={(event) =>
                      updateProfile("targetRole", event.target.value)
                    }
                    placeholder="Investment Analyst Intern"
                  />
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  About Section Content
                </h2>
                <p className="mt-1 text-sm text-[#50627d]">
                  Configure exactly what appears in your public About section.
                </p>

                <div className="mt-4 space-y-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
                      About Me
                    </span>
                    <textarea
                      value={form.aboutSection.aboutMe}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          aboutSection: {
                            ...prev.aboutSection,
                            aboutMe: event.target.value,
                          },
                        }))
                      }
                      rows={5}
                      className="w-full rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                    />
                  </label>

                  <div className="grid gap-4 md:grid-cols-2">
                    <InputField
                      label="CGPA"
                      value={form.aboutSection.cgpa}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          aboutSection: {
                            ...prev.aboutSection,
                            cgpa: event.target.value,
                          },
                        }))
                      }
                      placeholder="-- / --"
                    />
                    <InputField
                      label="Sector Focus"
                      value={form.aboutSection.sectorFocus}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          aboutSection: {
                            ...prev.aboutSection,
                            sectorFocus: event.target.value,
                          },
                        }))
                      }
                      placeholder="Corporate Finance and Fintech"
                    />
                  </div>

                  <InputField
                    label="Education"
                    value={form.aboutSection.education}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        aboutSection: {
                          ...prev.aboutSection,
                          education: event.target.value,
                        },
                      }))
                    }
                    placeholder="Currently pursuing BBA at North South University"
                  />
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#12233a]">
                    Projects Manager
                  </h2>
                  <button
                    type="button"
                    onClick={addProject}
                    className="rounded-xl border border-[#cbd5e1] px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0f172a] transition hover:bg-[#f2f6fb]"
                  >
                    Add Project
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {form.projects.map((project, index) => (
                    <article
                      key={project.id}
                      className="rounded-2xl border border-[#d8dee8] bg-[#fbfcfe] p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#75849a]">
                          Project {index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeProject(project.id)}
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b91c1c] hover:opacity-70"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="space-y-3">
                        <InputField
                          label="Title"
                          value={project.title}
                          onChange={(event) =>
                            updateProject(
                              project.id,
                              "title",
                              event.target.value,
                            )
                          }
                          placeholder="Project title"
                        />

                        <label className="flex flex-col gap-2">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
                            Description
                          </span>
                          <textarea
                            value={project.description}
                            onChange={(event) =>
                              updateProject(
                                project.id,
                                "description",
                                event.target.value,
                              )
                            }
                            rows={3}
                            className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                          />
                        </label>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
