"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = navLinks.map((l) => l.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 150) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-sm shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative size-9 overflow-hidden rounded-full ring-2 ring-foreground/10 transition-all duration-300 group-hover:ring-primary/60 group-hover:shadow-lg group-hover:shadow-primary/20">
            <Image
              src="/images/profile.png"
              alt="Karel Hernandez"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
            Karldev95
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                activeSection === link.href.slice(1)
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-primary/10 hover:text-primary"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? "close" : "open"}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-colors rounded-xl ${
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
