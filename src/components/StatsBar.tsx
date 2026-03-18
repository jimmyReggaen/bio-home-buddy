import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatProps {
  value: string;
  suffix?: string;
  topLabel: string;
  bottomLabel: string;
  delay: number;
}

const AnimatedNumber = ({ target, delay }: { target: number; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return <span ref={ref}>{count}</span>;
};

const StatItem = ({ value, suffix, topLabel, bottomLabel, delay }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay * 0.1, ease: [0.19, 1, 0.22, 1] }}
    className="text-center py-8 px-4"
  >
    <p className="stat-label mb-2">{topLabel}</p>
    <p className="stat-number">
      {isNaN(Number(value)) ? (
        value
      ) : (
        <>
          <AnimatedNumber target={Number(value)} delay={delay * 100} />
          {suffix}
        </>
      )}
    </p>
    <p className="stat-label mt-2">{bottomLabel}</p>
  </motion.div>
);

const stats = [
  { value: "5500", topLabel: "sqm office", bottomLabel: "space", delay: 0 },
  { value: "0", topLabel: "physical access", bottomLabel: "credentials needed", delay: 1 },
  { value: "100", suffix: "%", topLabel: "rainwater", bottomLabel: "reuse", delay: 2 },
  { value: "12", topLabel: "biometric", bottomLabel: "checkpoints", delay: 3 },
];

const StatsBar = () => (
  <section className="border-y border-white/10 bg-card">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((stat) => (
          <StatItem key={stat.bottomLabel} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
