"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Circle } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] 2xl:w-[900px] 2xl:h-[900px] rounded-full bg-primary/15 dark:bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] 2xl:w-[800px] 2xl:h-[800px] rounded-full bg-teal-400/15 dark:bg-teal-500/8 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-300/10 dark:bg-cyan-400/5 blur-[100px] animate-pulse-slow" />
      </div>

      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-[1]" style={{ y: bgY }}>
        <Image
          src="/images/bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20 dark:opacity-10 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 z-[2] grain opacity-[0.03] dark:opacity-[0.04] pointer-events-none" />

      {/* Dot pattern - decorative */}
      <div className="absolute inset-0 z-[2] dot-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-32 md:py-40 2xl:py-48"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 2xl:gap-28">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Circle className="size-2 fill-emerald-500 text-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.08]"
            >
              Hello, I am{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Karel Hernandez
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4"
                    stroke="url(#underline-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="oklch(0.65 0.18 195)" />
                      <stop offset="1" stopColor="oklch(0.7 0.15 170)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 2xl:mt-8 text-lg 2xl:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I am a passionate developer with a strong foundation in web, app
              and game development, backend systems, and blockchain technology.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 2xl:mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full px-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                <a
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=karel95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" />
                  Follow on LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-0.5">
                <a href="mailto:karelhernandez2207@gmail.com">
                  <Mail className="size-4" />
                  Contact me
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full size-11 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-0.5">
                <a
                  href="https://github.com/Karel95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Animated decorative rings */}
            <div className="absolute -inset-6 2xl:-inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-cyan-400/10 to-teal-500/20 blur-2xl animate-pulse-slow" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/50 via-transparent to-teal-400/50 opacity-60" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/profile.jpg"
                alt="Karel Hernandez"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, (max-width: 1536px) 320px, 384px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="absolute -bottom-3 -right-3 2xl:-bottom-4 2xl:-right-4 bg-background border border-border rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs font-semibold text-primary">Software Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
