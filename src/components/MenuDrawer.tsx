import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentShopStatus } from '../utils/businessHours';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const status = getCurrentShopStatus();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { label: 'Αρχική', href: '#', num: '01' },
    { label: 'Google Αξιολογήσεις (5.0 ★)', href: '#reviews', num: '02' },
    { label: 'Ωράριο & Τοποθεσία', href: '#location', num: '03' },
    { label: 'Επικοινωνία', href: '#contact', num: '04' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dimmed backdrop with fade in/out */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#0c0d10]/85 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel with smooth spring slide */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320, mass: 0.8 }}
            className="relative w-full max-w-lg bg-[#14161c] border-l border-[#242834] h-full shadow-2xl flex flex-col justify-between p-8 md:p-12 overflow-y-auto z-10"
          >
            {/* Top bar inside drawer: Status & Close button */}
            <div className="flex items-center justify-between pb-8 border-b border-[#242834]">
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-[#646a78]'}`} />
                <span className="text-xs uppercase tracking-[0.2em] text-[#9da3af] font-medium">
                  {status.message}
                </span>
              </div>

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Κλείσιμο μενού"
                className="p-2 -mr-2 text-[#9da3af] hover:text-[#ededee] transition-colors rounded-md hover:bg-[#1f222b] focus:outline-none"
              >
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Navigation links with staggered reveal */}
            <nav className="my-auto py-8">
              <ul className="space-y-6">
                {navLinks.map((item, idx) => (
                  <motion.li
                    key={item.num}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.12 + idx * 0.05,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between text-2xl md:text-3xl font-medium tracking-tight text-[#c4c7cf] hover:text-[#ffffff] transition-all"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300 font-cinzel">
                        {item.label}
                      </span>
                      <span className="text-xs text-[#525766] group-hover:text-[#9da3af] transition-colors font-mono">
                        {item.num}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom Contact & Quick Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.35 }}
              className="pt-8 border-t border-[#242834] space-y-6"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b7280]">Τηλέφωνο Ραντεβού</p>
                <a
                  href="tel:+302651306950"
                  className="text-xl md:text-2xl font-light text-[#ededee] hover:text-white transition-colors block tracking-wider"
                >
                  +30 2651 306950
                </a>
              </div>

              <div className="space-y-1 text-sm text-[#9da3af]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6b7280]">Διεύθυνση</p>
                <p className="text-[#ededee]">Ρήγα Φεραίου, Καρδαμίτσια 24</p>
                <p className="text-[#9da3af]">Ιωάννινα 454 44, Ελλάδα</p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#6b7280]">
                <span>The Two Guys hairdesign</span>
                <span>5.0 ★ Google Rating</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
