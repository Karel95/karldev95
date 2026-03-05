"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Container,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Frontend",
    subtitle: "Creator of digital experiences",
    description: "I design and develop websites that not only stand out but inspire.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap"],
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: Server,
    title: "Backend",
    subtitle: "Innovation within your reach",
    description: "I turn your vision into a flawless digital experience.",
    tags: ["Node.js", "Express.js", "Python", "Django"],
    span: "",
  },
  {
    icon: Database,
    title: "Database",
    subtitle: "Projects with purpose",
    description: "Every piece of code holds meaning: solving problems and improving experiences.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
    span: "",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    subtitle: "The art of coding",
    description: "I don't just develop apps, I craft elegant and efficient solutions.",
    tags: ["Git", "GitHub"],
    span: "",
  },
  {
    icon: Container,
    title: "DevOps",
    subtitle: "Building the future",
    description: "I create digital solutions that shape tomorrow's experiences.",
    tags: ["Docker", "Netlify", "Vercel"],
    span: "",
  },
  {
    icon: Sparkles,
    title: "Other",
    subtitle: "Innovative by nature",
    description: "I merge creativity and technical expertise to deliver exceptional results.",
    tags: ["Responsive Design", "Browser Compatibility", "SEO Best Practices"],
    span: "md:col-span-2 lg:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 md:py-36 2xl:py-44">
      {/* Top fade line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 2xl:mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            Skills & Experience
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-teal-400" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className={skill.span}
            >
              <div className="group relative h-full rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 2xl:p-8 transition-all duration-400 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center size-11 2xl:size-13 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
                      <skill.icon className="size-5 2xl:size-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg 2xl:text-xl font-bold leading-tight">{skill.title}</h3>
                      <p className="text-xs 2xl:text-sm font-medium text-primary mt-0.5">{skill.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm 2xl:text-base text-muted-foreground leading-relaxed mb-5">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-xs font-medium px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
