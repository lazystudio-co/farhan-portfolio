import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

export default function GlassCVModal({ isOpen, onClose }) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const isClosingRef = useRef(false);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen || isAnimatingOut || !overlayRef.current || !cardRef.current)
      return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(cardRef.current, { opacity: 0, y: 24, scale: 0.97 });

    const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    introTimeline
      .to(overlayRef.current, { opacity: 1, duration: 0.28 })
      .to(
        cardRef.current,
        { opacity: 1, y: 0, scale: 1, duration: 0.38 },
        "-=0.16",
      );

    return () => {
      introTimeline.kill();
    };
  }, [isOpen, isAnimatingOut]);

  const handleClose = useCallback(() => {
    if (isClosingRef.current || !overlayRef.current || !cardRef.current) return;
    isClosingRef.current = true;
    setIsAnimatingOut(true);

    const exitTimeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        isClosingRef.current = false;
        setIsAnimatingOut(false);
        onClose();
      },
    });

    exitTimeline
      .to(cardRef.current, { opacity: 0, y: 18, scale: 0.98, duration: 0.24 })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.12");
  }, [onClose]);

  const shouldRender = isOpen || isAnimatingOut;

  useEffect(() => {
    if (!shouldRender) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;
    const shell = document.querySelector(".portfolio-shell");
    const previousShellOverflowY = shell ? shell.style.overflowY : "";

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    if (shell) shell.style.overflowY = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      if (shell) shell.style.overflowY = previousShellOverflowY;
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-80 flex items-center justify-center p-4 bg-black/45 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] custom-scrollbar"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"></div>

        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full text-white/70 hover:text-white transition-all z-10"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {/* Header Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-white/20 pb-8 mb-8">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-2 border-white/20 overflow-hidden">
                {/* Replace src with your actual image */}
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff&size=128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-1">
                Jane Doe
              </h1>
              <p className="text-lg text-purple-300 font-medium mb-4">
                Senior Frontend Developer
              </p>
              <p className="text-white/70 max-w-md leading-relaxed text-sm">
                Passionate UI/UX engineer with 5+ years of experience building
                scalable web applications. Obsessed with glassmorphism,
                animations, and clean code.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-purple-400"></span> Experience
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium text-lg">
                  Lead React Engineer
                </h4>
                <p className="text-purple-300 text-sm mb-2">
                  TechCorp Inc. • 2021 - Present
                </p>
                <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                  <li>
                    Architected the core frontend using React and Tailwind CSS.
                  </li>
                  <li>
                    Improved web vitals by 40% through code splitting and lazy
                    loading.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">
                  Web Developer
                </h4>
                <p className="text-purple-300 text-sm mb-2">
                  Creative Studio • 2018 - 2021
                </p>
                <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                  <li>Designed and developed high-conversion landing pages.</li>
                  <li>
                    Implemented complex GSAP animations for client projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons (Download, LinkedIn, Insta) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/20">
            {/* Download Button */}
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 space-x-2 text-sm font-medium text-slate-900 bg-white hover:bg-gray-100 border border-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download CV</span>
            </button>

            <div className="flex space-x-4 w-full sm:w-auto justify-center">
              {/* LinkedIn Button */}
              <a
                href="#"
                className="flex items-center justify-center p-3 text-white bg-white/10 hover:bg-[#0077b5] border border-white/20 hover:border-transparent rounded-xl transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram Button */}
              <a
                href="#"
                className="flex items-center justify-center p-3 text-white bg-white/10 hover:bg-linear-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/20 hover:border-transparent rounded-xl transition-all group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
