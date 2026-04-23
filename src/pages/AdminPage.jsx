import React, { useEffect, useMemo, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../firebase";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import toast from "react-hot-toast";
import { 
  Home, User, Info, MessageSquare, Briefcase, 
  Image as ImageIcon, Save, LogOut, Plus, Trash2, FolderOpen, GripVertical 
} from "lucide-react";

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
      className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition hover:border-[#b4beca] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
    />
  </label>
);

const ImagePreview = ({ url }) => {
  if (!url || !url.startsWith("http")) return null;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-2 overflow-hidden rounded-xl border border-[#d8dee8] bg-[#fbfcfe]"
    >
      <img 
        src={url} 
        alt="Preview" 
        className="h-32 w-full object-cover transition-opacity duration-300"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </motion.div>
  );
};

const AdminPage = () => {
  const [form, setForm] = useState({});
  const [initialForm, setInitialForm] = useState(null);
  const [saveState, setSaveState] = useState("idle");
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState("loading");
  const isLoggingOutRef = React.useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (isLoggingOutRef.current) {
          navigate("/admin");
        } else {
          setAuthStatus("illegal");
          setTimeout(() => {
            navigate("/admin");
          }, 3000);
        }
      } else {
        setAuthStatus("authenticated");
      }
    });

    const contentRef = ref(db, CONTENT_PATH);

    const unsubscribe = onValue(
      contentRef,
      (snapshot) => {
        const merged = mergeContent(snapshot.val());
        setForm(merged);
        setInitialForm(merged);
        setIsLoading(false);
      },
      () => {
        setForm({});
        setIsLoading(false);
      },
    );

    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, [navigate]);

  const isDirty = useMemo(() => {
    if (!initialForm) return false;
    return JSON.stringify(form) !== JSON.stringify(initialForm);
  }, [form, initialForm]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

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

  const handleReorderProjects = (reorderedProjects) => {
    setForm((prev) => ({
      ...prev,
      projects: reorderedProjects,
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
      toast.success("Successfully saved to Firebase!");
    } catch {
      setSaveState("error");
      toast.error("Save failed. Check Firebase rules.");
    }
  };

  const handleLogout = async () => {
    try {
      isLoggingOutRef.current = true;
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const Skeleton = () => (
    <div className="portfolio-backdrop">
      <div className="portfolio-shell p-4 md:p-8 font-['Manrope']">
        <div className="mx-auto w-full max-w-[1500px] rounded-4xl border border-white/45 bg-white/40 shadow-[0_25px_80px_rgba(10,20,34,0.05)] backdrop-blur-md overflow-hidden animate-pulse">
          {/* Header */}
          <div className="px-5 py-5 md:px-9 md:py-7 border-b border-white/40 flex justify-between items-center">
            <div className="h-8 w-48 bg-white/80 rounded-xl" />
            <div className="hidden md:flex gap-3">
              <div className="h-10 w-28 bg-white/80 rounded-xl" />
              <div className="h-10 w-36 bg-[#0f766e]/30 rounded-xl" />
            </div>
          </div>
          
          {/* Main Grid */}
          <div className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:px-9 md:py-7">
            {/* Left Column */}
            <div className="space-y-5">
              <div className="h-[280px] bg-white/80 rounded-3xl border border-white/40" />
              <div className="h-[250px] bg-white/80 rounded-3xl border border-white/40" />
              <div className="h-[320px] bg-white/80 rounded-3xl border border-white/40" />
            </div>
            
            {/* Right Column */}
            <div className="space-y-5">
              <div className="h-[240px] bg-white/80 rounded-3xl border border-white/40" />
              <div className="h-[480px] bg-white/80 rounded-3xl border border-white/40" />
              <div className="h-[200px] bg-white/80 rounded-3xl border border-white/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (authStatus === "illegal") {
    return (
      <div className="portfolio-backdrop flex h-screen items-center justify-center">
        <div className="rounded-2xl border border-red-200 bg-white/90 p-10 text-center shadow-[0_25px_80px_rgba(10,20,34,0.15)] backdrop-blur-md">
          <h1 className="mb-4 text-4xl font-bold text-red-600">Illegal Login</h1>
          <p className="text-lg text-gray-700">You do not have permission to view this page.</p>
          <p className="mt-4 text-sm font-semibold text-gray-500 animate-pulse">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  if (isLoading || authStatus === "loading") {
    return <Skeleton />;
  }

  return (
    <div className="portfolio-backdrop">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="portfolio-shell p-4 md:p-8 font-['Manrope']"
      >
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
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl border border-[#d8dee8] bg-white px-5 py-2.5 text-sm font-semibold text-[#415471] transition hover:bg-[#f8fafc]"
                >
                  <LogOut size={16} /> Log Out
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={!isDirty || saveState === "saving"}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${
                    !isDirty
                      ? "bg-[#0f766e]/50 cursor-not-allowed"
                      : "bg-[#0f766e] shadow-[0_10px_24px_rgba(15,118,110,0.35)] hover:brightness-110"
                  }`}
                >
                  <Save size={16} /> {saveState === "saving" ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </header>

          <main className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr] md:gap-7 md:px-9 md:py-7">
            <div className="space-y-5">
              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <Home size={20} className="text-[#0f766e]" /> Hero Content
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
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <User size={20} className="text-[#0f766e]" /> Profile Overview
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
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <Info size={20} className="text-[#0f766e]" /> About Content
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
                      className="w-full rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition hover:border-[#b4beca] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
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
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <MessageSquare size={20} className="text-[#0f766e]" /> Let&apos;s Connect Card
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
                      className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition hover:border-[#b4beca] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                    />
                  </label>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <Briefcase size={20} className="text-[#0f766e]" /> Projects Manager
                </h2>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={addProject}
                    className="flex items-center gap-1.5 rounded-xl border border-[#cbd5e1] px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0f172a] transition hover:bg-[#f2f6fb]"
                  >
                    <Plus size={14} /> Add Project
                  </button>
                </div>

                <div className="mt-4">
                  <AnimatePresence>
                    {(form.projects || []).length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d8dee8] p-10"
                      >
                        <FolderOpen size={40} className="text-[#a3b1c6] mb-3" />
                        <span className="text-sm font-semibold text-[#415471]">No Projects Found</span>
                        <span className="text-xs text-[#75849a] mt-1">Click "Add Project" to add your first one.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Reorder.Group 
                    axis="y" 
                    values={form.projects || []} 
                    onReorder={handleReorderProjects}
                    className="space-y-4"
                  >
                    <AnimatePresence>
                      {(form.projects || []).map((project, index) => (
                        <Reorder.Item
                          key={project.id}
                          value={project}
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: "hidden" }}
                          transition={{ duration: 0.3 }}
                          className="rounded-2xl border border-[#d8dee8] bg-[#fbfcfe] p-4 relative"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#75849a]">
                              <GripVertical size={16} className="cursor-grab active:cursor-grabbing text-[#a3b1c6] hover:text-[#0f766e] transition-colors" />
                              Project {index + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeProject(project.id)}
                              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#b91c1c] hover:opacity-70"
                            >
                              <Trash2 size={14} /> Remove
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
                              className="rounded-2xl border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#1f2a3d] outline-none transition hover:border-[#b4beca] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
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
                          <AnimatePresence>
                            <ImagePreview url={project.imageUrl} key={project.imageUrl} />
                          </AnimatePresence>
                        </div>
                        </Reorder.Item>
                      ))}
                    </AnimatePresence>
                  </Reorder.Group>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d7dfe9] bg-white p-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-[#12233a]">
                  <ImageIcon size={20} className="text-[#0f766e]" /> Portrait & Footer
                </h2>
                <div className="mt-4 space-y-4">
                  <InputField
                    label="Portrait Image URL"
                    value={form.portrait?.imageUrl || ""}
                    onChange={(event) => updatePortrait(event.target.value)}
                    placeholder="https://..."
                  />
                  <AnimatePresence>
                    <ImagePreview url={form.portrait?.imageUrl} key={form.portrait?.imageUrl} />
                  </AnimatePresence>
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
      </motion.div>
    </div>
  );
};

export default AdminPage;
