import React, { useState } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMenu, isMenuOpen }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#121316]/95 backdrop-blur-md border-b border-[#252833] transition-all duration-300">
      {/* 
        Single strict rectangular bar across top. 
        Only the Logo in the middle (with generous breathing room) and the hamburger menu on the side.
        No secondary layers, no extra text clutter.
      */}
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between relative">
        
        {/* Left balance placeholder with no icons or text to keep center logo strictly centered */}
        <div className="w-12 md:w-14" aria-hidden="true" />

        {/* Center: Brand Logo loaded from /logo.png with generous breathing room */}
        <div className="flex-1 flex justify-center items-center py-2">
          <a
            href="#"
            className="flex items-center justify-center group focus:outline-none"
            aria-label="The Two Guys hairdesign - Αρχική"
          >
            {!logoError ? (
              <img
                src="/logo.png"
                alt="The Two Guys Hairdesign"
                onLoad={(e) => {
                  if (e.currentTarget.naturalWidth === 0) {
                    setLogoError(true);
                  }
                }}
                onError={() => setLogoError(true)}
                className="max-h-12 md:max-h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            ) : (
              /* Fallback if logo image is unavailable */
              <div className="flex flex-col items-center tracking-widest text-center">
                <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-[#ededee]">
                  THE TWO GUYS
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#9da3af] font-light">
                  HAIRDESIGN
                </span>
              </div>
            )}
          </a>
        </div>

        {/* Right: Interactive Hamburger menu button with click & morph animations */}
        <div className="w-12 md:w-14 flex items-center justify-end">
          <motion.button
            type="button"
            onClick={onToggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            whileHover={{ scale: 1.06, backgroundColor: '#1a1c24' }}
            whileTap={{ scale: 0.90 }}
            className="relative flex flex-col items-center justify-center w-11 h-11 rounded-md text-[#ededee] border border-transparent hover:border-[#2a2d3b] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ededee]"
          >
            {/* Click wave feedback ring */}
            <motion.span
              key={isMenuOpen ? 'menu-open-ring' : 'menu-closed-ring'}
              initial={{ scale: 0.75, opacity: 0.7 }}
              animate={{ scale: 1.35, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 rounded-md border border-[#ededee]/50 pointer-events-none"
            />

            {/* 3 Animated morphing bars */}
            <div className="w-6 h-4 relative flex flex-col justify-between items-end">
              {/* Top line */}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 7.25 : 0,
                  width: 24,
                }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className="h-[1.75px] bg-[#ededee] rounded-full origin-center"
              />

              {/* Middle line */}
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  x: isMenuOpen ? 10 : 0,
                  width: isMenuOpen ? 0 : 16,
                }}
                transition={{ duration: 0.18, ease: 'easeInOut' }}
                className="h-[1.75px] bg-[#ededee] rounded-full"
              />

              {/* Bottom line */}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -7.25 : 0,
                  width: isMenuOpen ? 24 : 20,
                }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className="h-[1.75px] bg-[#ededee] rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>

      </div>
    </header>
  );
};
