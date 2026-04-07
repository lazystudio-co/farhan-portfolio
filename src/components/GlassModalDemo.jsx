import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const GlassModalDemo = ({ isOpen, onClose }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const isClosingRef = useRef(false);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen || isAnimatingOut || !overlayRef.current || !cardRef.current)
      return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(cardRef.current, { opacity: 0, y: 28, scale: 0.96 });

    const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    introTimeline
      .to(overlayRef.current, { opacity: 1, duration: 0.28 })
      .to(
        cardRef.current,
        { opacity: 1, y: 0, scale: 1, duration: 0.36 },
        "-=0.14",
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
      .to(cardRef.current, { opacity: 0, y: 22, scale: 0.97, duration: 0.24 })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.12");
  }, [onClose]);

  const shouldRender = isOpen || isAnimatingOut;
  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-80 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-md p-8 overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"></div>

        <h2 className="text-2xl font-semibold text-white tracking-wide mb-2">
          Contact Me
        </h2>
        <p className="text-white/80 text-sm leading-relaxed mb-8">
          Want to collaborate, hire, or discuss finance projects? Reach out
          directly and I will get back to you soon.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:bd.irtiza.farhan@gmail.com"
            className="flex-1 px-4 py-2.5 text-center text-sm font-medium text-gray-900 bg-white/90 border border-white rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all"
          >
            Email Now
          </a>
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2.5 cursor-pointer text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassModalDemo;
