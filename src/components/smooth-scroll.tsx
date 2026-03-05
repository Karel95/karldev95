"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept anchor link clicks for smooth scrolling
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });

      // Update URL hash without jumping
      window.history.pushState(null, "", hash);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext value={lenisRef.current}>
      {children}
    </LenisContext>
  );
}
