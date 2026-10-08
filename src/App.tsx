import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { MenuDrawer } from './components/MenuDrawer';
import { Hero } from './components/Hero';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis with smooth momentum scrolling & gentle stop deceleration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      // Exponential decay deceleration curve for buttery-smooth glide when stopping
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept in-page hash links for smooth Lenis glide to section
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
      } else if (href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          // Account for top sticky header bar offset
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause smooth scroll when menu drawer is open
  useEffect(() => {
    if (lenisRef.current) {
      if (isMenuOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#111215] text-[#ededee] font-sans selection:bg-[#2b2f3d] selection:text-white">
      {/* 
        Single Top Header Rectangle:
        As requested: "στην κορυφη να υπαρχει μονο ενα ορθογωνιο με μονο το Logo και το hamburger menu αλλα χωρισ αλλα λογια να ειναι το λογοτυπο στην μεση και να εχει λιγο χορο να υπαρχει οκ"
      */}
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />

      {/* Hamburger Navigation Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <Reviews />
        <LocationHours />
      </main>

      <Footer />
    </div>
  );
}
