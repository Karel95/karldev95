"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/Karel95", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/karel95/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:karelhernandez2207@gmail.com", label: "Email" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/images/500x500 Dark-Transparent.png"
    : "/images/500x500 Light-Transparent.png";

  return (
    <footer className="relative overflow-hidden">
      {/* Contact CTA */}
      <section id="contact" className="relative py-28 md:py-36 2xl:py-44">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-[100px] animate-float-delayed" />
        </div>

        <div className="relative mx-auto max-w-4xl 2xl:max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-cyan-500 to-teal-400 dark:from-primary dark:via-cyan-600 dark:to-teal-500" />
            <div className="absolute inset-0 grain opacity-[0.06]" />

            <div className="relative p-10 md:p-14 2xl:p-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-display font-bold text-white">
                    Let&apos;s talk!
                  </h3>
                  <p className="mt-3 text-white/75 text-lg 2xl:text-xl max-w-md leading-relaxed">
                    I am always open to discussing new opportunities, collaborations,
                    or freelance projects.
                  </p>
                </div>
                <a
                  href="mailto:karelhernandez2207@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 hover:shadow-2xl hover:shadow-black/20 hover:border-white"
                >
                  <Mail className="size-5 transition-transform group-hover:rotate-12" />
                  Contact me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bottom */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 2xl:py-20 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative size-20 2xl:size-24 rounded-full overflow-hidden ring-2 ring-border/60 transition-all duration-300 hover:ring-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <Image
              src={logoSrc}
              alt="Karel Hernandez logo"
              fill
              className="object-cover"
              sizes="96px"
            />
          </motion.div>

          <p className="text-center text-muted-foreground text-lg 2xl:text-xl max-w-sm leading-relaxed">
            I learn and create every day.
            <br />
            Let&apos;s build a project together.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center size-12 rounded-full border border-border/60 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/15"
              >
                <Icon className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground/50">
            <span>Created with</span>
            <Heart className="size-3.5 fill-primary/60 text-primary/60" />
            <span>by Karel Hernandez ({new Date().getFullYear()})</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
