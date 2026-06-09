"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ to, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  useEffect(() => {
    if (inView) animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
  }, [inView, count, to, duration]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { to: 20,  suffix: "+", label: "Years of Experience",   sub: "Serving SC since founding"     },
  { to: 500, suffix: "+", label: "Properties Managed",    sub: "Residential, commercial & HOA" },
  { to: 98,  suffix: "%", label: "Client Retention Rate", sub: "Built on trust & results"      },
  { text: "5★",           label: "Service Standard",      sub: "Across every division"         },
];

export default function ProofBar() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="mx-auto max-w-[1160px] px-6 py-8 sm:py-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span style={{ display: "block", height: "2px", width: "24px", background: "#c99b31", borderRadius: "9999px" }} />
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#052946" }}>
            By the Numbers
          </p>
          <span style={{ display: "block", height: "1px", flex: 1, background: "linear-gradient(90deg, #c99b31, transparent)", opacity: 0.3 }} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ to, suffix, text, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2 pl-4"
              style={{ borderLeft: "3px solid #c99b31" }}
            >
              <p style={{ fontSize: "38px", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em", color: "#052946", fontFamily: "var(--font-display)" }}>
                {to !== undefined ? <Counter to={to} suffix={suffix} /> : text}
              </p>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#052946", marginTop: "4px" }}>
                {label}
              </p>
              <p style={{ fontSize: "11.5px", color: "#43566a", lineHeight: 1.5 }}>
                {sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

