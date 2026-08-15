import React, { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  icon?: React.ReactNode;
  className?: string;
}

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// A stat tile that counts up from 0 when it scrolls into view, instead of
// just appearing with the final number already there.
const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, label, suffix = '', decimals = 0, icon, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || prefersReducedMotion) return undefined;
    const duration = 900;
    const start = performance.now();
    let frameId: number;
    const factor = 10 ** decimals;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(eased * value * factor) / factor);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, value, decimals]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className ?? ''}`}
    >
      {icon && <div className="flex justify-center mb-2 text-blue-600 run-bounce">{icon}</div>}
      <p className="text-4xl font-bold text-gray-900 tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
};

export default AnimatedStat;
