import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="contact" className="bg-[#0e0f13] border-t border-[#1e212b] py-16 md:py-20 text-[#9da3af]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1c1f28]">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
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
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                <div className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#ededee]">
                  THE TWO GUYS <span className="text-xs font-mono block text-[#646a78]">HAIRDESIGN</span>
                </div>
              )}
            </div>

            <p className="text-xs text-[#828896] leading-relaxed max-w-sm font-light">
              Σύγχρονο Barber & Hairdesign στα Ιωάννινα (Καρδαμίτσια 24). Αφοσίωση στην ακρίβεια, στην προσωπομετρία και στη διαχρονική ανδρική περιποίηση.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#c8cbd3]">
              <span className="text-[#fbbf24]">★★★★★</span>
              <span>5,0 στο Google (25 κριτικές)</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6b7280] font-semibold">
              Τηλεφωνικό Ραντεβού
            </p>
            <a
              href="tel:+302651306950"
              className="text-2xl font-light text-[#ededee] hover:text-white transition-colors block tracking-wider"
            >
              +30 2651 306950
            </a>
            <p className="text-xs text-[#717785] leading-relaxed">
              Επικοινωνήστε τηλεφωνικά για να προγραμματίσετε την ώρα σας χωρίς αναμονή.
            </p>
          </div>

          {/* Col 3: Location */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6b7280] font-semibold">
              Διεύθυνση
            </p>
            <p className="text-xs text-[#ededee]">
              Ρήγα Φεραίου, καρδαμίτσια 24
            </p>
            <p className="text-xs text-[#828896]">
              Ιωάννινα 454 44, Ελλάδα
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Ρήγα+Φεραίου+καρδαμίτσια+24+Ioannina+454+44+Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#c8cbd3] hover:text-white underline underline-offset-4 transition-colors"
              >
                Οδηγίες Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#646a78]">
          <p>© {new Date().getFullYear()} The Two Guys hairdesign. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
