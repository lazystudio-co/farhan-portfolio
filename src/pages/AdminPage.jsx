import React, { useEffect, useMemo, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../firebase";

const CONTENT_PATH = "portfolioContent";

const mergeContent = (remoteContent) => {
  const content = remoteContent || {};

  return {
    ...content,
    hero: {
      ...(content.hero || {}),
      tags: Array.isArray(content.hero?.tags) ? content.hero.tags : [],
      titleStart: content.hero?.titleStart || "",
      titleEmphasis: content.hero?.titleEmphasis || "",
      titleEnd: content.hero?.titleEnd || "",
    },
    profile: {
      ...(content.profile || {}),
      profileUrl: content.profile?.profileUrl || "",
      targetRole: content.profile?.targetRole || "",
    },
    aboutSection: {
      ...(content.aboutSection || {}),
      aboutMe: content.aboutSection?.aboutMe || "",
      cgpa: content.aboutSection?.cgpa || "",
      education: content.aboutSection?.education || "",
      sectorFocus: content.aboutSection?.sectorFocus || "",
    },
    contact: {
      ...(content.contact || {}),
      availabilityLabel: content.contact?.availabilityLabel || "",
      availabilityValue: content.contact?.availabilityValue || "",
      heading: content.contact?.heading || "",
      description: content.contact?.description || "",
    },
    portrait: {
      ...(content.portrait || {}),
      imageUrl: content.portrait?.imageUrl || "",
    },
    footer: {
      ...(content.footer || {}),
      brandName: content.footer?.brandName || "",
    },
    projects: Array.isArray(content.projects)
      ? content.projects.map((project, index) => ({
          id: project.id || Date.now() + index,
          title: project.title || "",
          description: project.description || "",
          imageUrl: project.imageUrl || "",
        }))
      : [],
  };
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
  const [form, setForm] = useState({});
  const [saveState, setSaveState] = useState("idle");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contentRef = ref(db, CONTENT_PATH);

    const unsubscribe = onValue(
      contentRef,
      (snapshot) => {
        setForm(mergeContent(snapshot.val()));
        setIsLoading(false);
      },
      () => {
        setForm({});
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const heroTagsValue = useMemo(
    () => (form.hero?.tags ? form.hero.tags.join(", ") : ""),
    [form.hero],
  );

  const updateHero = (field, value) => {
    setForm((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  const updateProfile = (field, value) => {
    setForm((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const updateAbout = (field, value) => {
    setForm((prev) => ({
      ...prev,
      aboutSection: { ...prev.aboutSection, [field]: value },
    }));
  };

  const updateContact = (field, value) => {
    setForm((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  const updatePortrait = (value) => {
    setForm((prev) => ({
      ...prev,
      portrait: { ...prev.portrait, imageUrl: value },
    }));
  };

  const updateFooter = (value) => {
    setForm((prev) => ({
      ...prev,
      footer: { ...prev.footer, brandName: value },
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
          imageUrl: "",
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

  const handleSave = async () => {
    setSaveState("saving");

    try {
      await set(ref(db, CONTENT_PATH), form);
      setSaveState("saved");
    } catch {
      setSaveState("error");
    }
  };

  // Simple skeleton loader component
  const Skeleton = () => (
    <div className="portfolio-backdrop">
      <div className="portfolio-shell flex items-center justify-center p-6">
        <div className="w-full max-w-375 rounded-4xl border border-white/45 bg-white/80 px-6 py-8 shadow-[0_25px_80px_rgba(10,20,34,0.08)] animate-pulse">
          <div className="h-6 w-1/3 bg-gray-200 rounded mb-4" />
          <div className="h-10 w-2/3 bg-gray-200 rounded mb-6" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/4 bg-gray-200 rounded mb-6" />
          <div className="h-12 w-full bg-gray-200 rounded mb-4" />
          <div className="h-12 w-full bg-gray-200 rounded mb-4" />
          <div className="h-12 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <Skeleton />;
  }

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
                  Manage all main-page content and sync it to Firebase in real
                  time.
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
                {saveState === "saved" ? (
                  <span className="text-xs font-semibold text-[#0f766e]">
                    Saved to Firebase
                  </span>
                ) : null}
                {saveState === "error" ? (
                  <span className="text-xs font-semibold text-[#b91c1c]">
                    Save failed. Check Firebase rules.
                  </span>
                ) : null}
              </div>
            </div>
          </header>

          <main className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:px-9 md:py-7">
            <div className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Hero Content
                </h2>
                <div className="mt-4 space-y-4">
                  <InputField
                    label="Hero Title Start"
                    value={form.hero?.titleStart || ""}
                    onChange={(event) =>
                      updateHero("titleStart", event.target.value)
                    }
                    placeholder="Building"
                  />
                  <InputField
                    label="Hero Title Emphasis"
                    value={form.hero?.titleEmphasis || ""}
                    onChange={(event) =>
                      updateHero("titleEmphasis", event.target.value)
                    }
                    placeholder="Market Intelligence"
                  />
                  <InputField
                    label="Hero Title End"
                    value={form.hero?.titleEnd || ""}
                    onChange={(event) =>
                      updateHero("titleEnd", event.target.value)
                    }
                    placeholder="with Valuation Discipline"
                  />
                  <InputField
                    label="Hero Tags (comma separated)"
                    value={heroTagsValue}
                    onChange={(event) =>
                      updateHero(
                        "tags",
                        event.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter(Boolean),
                      )
                    }
                    placeholder="Equity Research, Corporate Finance, Fintech"
                  />
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Profile Overview
                </h2>
                <div className="mt-4 space-y-4">
                  <InputField
                    label="Profile URL"
                    value={form.profile?.profileUrl || ""}
                    onChange={(event) =>
                      updateProfile("profileUrl", event.target.value)
                    }
                    placeholder="https://yourportfolio.com"
                  />
                  <InputField
                    label="Target Role"
                    value={form.profile?.targetRole || ""}
                    onChange={(event) =>
                      updateProfile("targetRole", event.target.value)
                    }
                    placeholder="Investment Analyst Intern"
                  />
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  About Content
                </h2>
                <div className="mt-4 space-y-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
                      About Me
                    </span>
                    <textarea
                      value={form.aboutSection?.aboutMe || ""}
                      onChange={(event) =>
                        updateAbout("aboutMe", event.target.value)
                      }
                      rows={5}
                      className="w-full rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                    />
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <InputField
                      label="CGPA"
                      value={form.aboutSection?.cgpa || ""}
                      onChange={(event) =>
                        updateAbout("cgpa", event.target.value)
                      }
                      placeholder="-- / --"
                    />
                    <InputField
                      label="Sector Focus"
                      value={form.aboutSection?.sectorFocus || ""}
                      onChange={(event) =>
                        updateAbout("sectorFocus", event.target.value)
                      }
                      placeholder="Corporate Finance and Fintech"
                    />
                  </div>
                  <InputField
                    label="Education"
                    value={form.aboutSection?.education || ""}
                    onChange={(event) =>
                      updateAbout("education", event.target.value)
                    }
                    placeholder="Currently pursuing BBA at North South University"
                  />
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Let&apos;s Connect Card
                </h2>
                <div className="mt-4 space-y-4">
                  <InputField
                    label="Availability Label"
                    value={form.contact?.availabilityLabel || ""}
                    onChange={(event) =>
                      updateContact("availabilityLabel", event.target.value)
                    }
                    placeholder="Open to"
                  />
                  <InputField
                    label="Availability Value"
                    value={form.contact?.availabilityValue || ""}
                    onChange={(event) =>
                      updateContact("availabilityValue", event.target.value)
                    }
                    placeholder="Analyst Internships"
                  />
                  <InputField
                    label="Heading"
                    value={form.contact?.heading || ""}
                    onChange={(event) =>
                      updateContact("heading", event.target.value)
                    }
                    placeholder="Let's connect"
                  />
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7a879b] font-semibold">
                      Description
                    </span>
                    <textarea
                      value={form.contact?.description || ""}
                      onChange={(event) =>
                        updateContact("description", event.target.value)
                      }
                      rows={3}
                      className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                    />
                  </label>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Projects Manager
                </h2>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={addProject}
                    className="rounded-xl border border-[#cbd5e1] px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0f172a] transition hover:bg-[#f2f6fb]"
                  >
                    Add Project
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {(form.projects || []).map((project, index) => (
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
                        <InputField
                          label="Image URL (optional)"
                          value={project.imageUrl}
                          onChange={(event) =>
                            updateProject(
                              project.id,
                              "imageUrl",
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

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="text-lg font-semibold text-[#12233a]">
                  Portrait & Footer
                </h2>
                <div className="mt-4 space-y-4">
                  <InputField
                    label="Portrait Image URL"
                    value={form.portrait?.imageUrl || ""}
                    onChange={(event) => updatePortrait(event.target.value)}
                    placeholder="https://..."
                  />
                  <InputField
                    label="Footer Brand Name"
                    value={form.footer?.brandName || ""}
                    onChange={(event) => updateFooter(event.target.value)}
                    placeholder="LazyStudio"
                  />
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
