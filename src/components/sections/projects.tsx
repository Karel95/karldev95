"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy } from "lucide-react";
import { useRef } from "react";

function ProjectCard({
  title,
  badge,
  description,
  image,
  link,
  linkLabel,
}: {
  title: string;
  badge: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 });

  function handleMouse(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 2xl:p-16 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 mb-5">
            <Trophy className="size-3.5" />
            <span className="text-xs font-bold tracking-wider uppercase">{badge}</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl 2xl:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h3>

          <p className="mt-4 2xl:mt-6 text-muted-foreground text-base 2xl:text-lg leading-relaxed">
            {description}
          </p>

          {link && linkLabel && (
            <div className="mt-6 2xl:mt-8">
              <Button asChild size="lg" className="rounded-full px-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  {linkLabel}
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent md:bg-gradient-to-r md:from-card/30 md:via-transparent md:to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 md:py-36 2xl:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 2xl:mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-teal-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <ProjectCard
            title="Suriname Offline Education Web"
            badge="3rd Place - AI Datasur Hackathon"
            description="EduWeb: An engaging educational platform making learning interactive and accessible. Built by Akshay Merhai and Karel Hernandez."
            image="/images/ai-thon.jpg"
            link=""
            linkLabel=""
          />
        </motion.div>
      </div>
    </section>
  );
}
