import React, { useMemo, useState } from "react";

const INITIAL_FORM = {
  profile: {
    name: "Farhan",
    headline: "Finance Student | Equity Research Enthusiast",
    location: "Dhaka, Bangladesh",
    availability: "Open to internship opportunities",
  },
  about:
    "I build research-driven finance case studies with a focus on valuation, macro themes, and portfolio strategy.",
  contact: {
    email: "hello@farhan.dev",
    phone: "+880 1XXX-XXXXXX",
    linkedin: "https://linkedin.com/in/farhan",
    github: "https://github.com/farhan",
  },
  projects: [
    {
      id: 1,
      title: "Banking Sector Comparative Dashboard",
      category: "Equity Research",
      summary: "Compared listed banks on ROE, NIM, and capital adequacy.",
      link: "https://example.com/project-1",
    },
    {
      id: 2,
      title: "IPO Valuation Note",
      category: "Valuation",
      summary: "Built DCF and trading comps to estimate fair value range.",
      link: "https://example.com/project-2",
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

  const projectCount = form.projects.length;
  const completion = useMemo(() => {
    const checks = [
      form.profile.name,
      form.profile.headline,
      form.about,
      form.contact.email,
      form.contact.linkedin,
      form.projects[0]?.title,
    ];

    const valid = checks.filter(Boolean).length;
    return Math.round((valid / checks.length) * 100);
  }, [form]);

  const updateProfile = (field, value) => {
    setForm((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const updateContact = (field, value) => {
    setForm((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
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
          category: "",
          summary: "",
          link: "",
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
                <span className="rounded-full border border-[#cbd5e1] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0f172a]">
                  Completion {completion}%
                </span>
                <button
                  type="button"
                  className="rounded-xl border border-[#ced7e3] bg-white px-4 py-2.5 text-sm font-semibold text-[#18304e] transition hover:bg-[#f5f8fc]"
                >
                  Preview Site
                </button>
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

          <section className="grid gap-3 border-b border-[#d8dee8] px-5 py-4 md:grid-cols-4 md:px-9 md:py-5">
            <article className="rounded-2xl border border-[#d4dce8] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#75849a]">
                Projects
              </p>
              <p className="mt-2 text-2xl font-bold text-[#12233a]">
                {projectCount}
              </p>
            </article>
            <article className="rounded-2xl border border-[#d4dce8] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#75849a]">
                Contact Channels
              </p>
              <p className="mt-2 text-2xl font-bold text-[#12233a]">4</p>
            </article>
            <article className="rounded-2xl border border-[#d4dce8] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#75849a]">
                Last Sync
              </p>
              <p className="mt-2 text-lg font-semibold text-[#12233a]">
                {saveState === "saved" ? "Just now" : "Not saved"}
              </p>
            </article>
            <article className="rounded-2xl border border-[#d4dce8] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#75849a]">
                Status
              </p>
              <p className="mt-2 text-lg font-semibold text-[#12233a]">
                {saveState === "saved" ? "Ready to publish" : "Draft mode"}
              </p>
            </article>
          </section>

          <main className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:px-9 md:py-7">
            <div className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Profile Overview
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <InputField
                    label="Full Name"
                    value={form.profile.name}
                    onChange={(event) =>
                      updateProfile("name", event.target.value)
                    }
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Location"
                    value={form.profile.location}
                    onChange={(event) =>
                      updateProfile("location", event.target.value)
                    }
                    placeholder="City, Country"
                  />
                </div>

                <div className="mt-4 space-y-4">
                  <InputField
                    label="Headline"
                    value={form.profile.headline}
                    onChange={(event) =>
                      updateProfile("headline", event.target.value)
                    }
                    placeholder="What should visitors read first?"
                  />
                  <InputField
                    label="Availability"
                    value={form.profile.availability}
                    onChange={(event) =>
                      updateProfile("availability", event.target.value)
                    }
                    placeholder="Open to..."
                  />
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  About Description
                </h2>
                <p className="mt-1 text-sm text-[#50627d]">
                  This appears in your About section and should summarize your
                  positioning.
                </p>
                <textarea
                  value={form.about}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, about: event.target.value }))
                  }
                  rows={5}
                  className="mt-4 w-full rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                />
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Contact Links
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <InputField
                    label="Email"
                    type="email"
                    value={form.contact.email}
                    onChange={(event) =>
                      updateContact("email", event.target.value)
                    }
                    placeholder="name@example.com"
                  />
                  <InputField
                    label="Phone"
                    value={form.contact.phone}
                    onChange={(event) =>
                      updateContact("phone", event.target.value)
                    }
                    placeholder="+880..."
                  />
                  <InputField
                    label="LinkedIn"
                    value={form.contact.linkedin}
                    onChange={(event) =>
                      updateContact("linkedin", event.target.value)
                    }
                    placeholder="https://linkedin.com/in/..."
                  />
                  <InputField
                    label="GitHub"
                    value={form.contact.github}
                    onChange={(event) =>
                      updateContact("github", event.target.value)
                    }
                    placeholder="https://github.com/..."
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
                        <InputField
                          label="Category"
                          value={project.category}
                          onChange={(event) =>
                            updateProject(
                              project.id,
                              "category",
                              event.target.value,
                            )
                          }
                          placeholder="Equity Research, Valuation..."
                        />

                        <label className="flex flex-col gap-2">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
                            Summary
                          </span>
                          <textarea
                            value={project.summary}
                            onChange={(event) =>
                              updateProject(
                                project.id,
                                "summary",
                                event.target.value,
                              )
                            }
                            rows={3}
                            className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                          />
                        </label>

                        <InputField
                          label="Project URL"
                          value={project.link}
                          onChange={(event) =>
                            updateProject(
                              project.id,
                              "link",
                              event.target.value,
                            )
                          }
                          placeholder="https://..."
                        />
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
