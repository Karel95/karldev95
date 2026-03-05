"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Briefcase, Coffee, Globe } from "lucide-react";

const stats = [
  { icon: Briefcase, value: new Date().getFullYear() - 2022, suffix: "+", label: "Years Experience" },
  { icon: Code2, value: 20, suffix: "+", label: "Projects Built" },
  { icon: Globe, value: 5, suffix: "+", label: "Technologies" },
  { icon: Coffee, value: 1000, suffix: "+", label: "Cups of Coffee" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 2xl:py-44 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 2xl:gap-24 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight leading-tight">
              Building the web,{" "}
              <span className="text-primary">one project</span> at a time
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-teal-400" />
            <p className="mt-8 text-lg 2xl:text-xl text-muted-foreground leading-relaxed">
              I am a passionate Web Developer with a strong foundation in frontend
              technologies. With many years of experience in creating dynamic,
              responsive, and user-friendly websites, I have developed a keen eye
              for detail and a commitment to delivering high-quality solutions.
            </p>
            <p className="mt-4 text-lg 2xl:text-xl text-muted-foreground leading-relaxed">
              My expertise lies in HTML, CSS, JavaScript, and modern frameworks like
              React and Node.js, allowing me to build seamless, interactive web
              applications.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 gap-4 2xl:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 2xl:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center size-10 2xl:size-12 rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <stat.icon className="size-5 2xl:size-6" />
                  </div>
                  <p className="font-display text-3xl 2xl:text-4xl font-extrabold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm 2xl:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
