"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
      setShowButton(scrollTop > 400);
    };
    window.addEventListener("scroll", update, { passive: true });
    // Run initial check
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-[var(--brand-gold)] shadow-[0_0_8px_var(--brand-gold)]"
      />
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--midnight-navy)] text-[var(--brand-gold)] border border-[var(--brand-gold)]/25 shadow-2xl hover:bg-[var(--brand-gold)] hover:text-white hover:border-[var(--brand-gold)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ArrowUp size={16} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
