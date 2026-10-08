import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 border-b border-[#222530] overflow-hidden">
      {/* Subtle architectural background canvas */}
      <div className="absolute inset-0 bg-[#111215] -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HERO MAIN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography, Philosophy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-[#ededee] tracking-tight leading-[1.08] text-balance">
                Ακρίβεια, Αισθητική, <br />
                <span className="font-serif-calligraphic italic font-normal text-[#9da3af] text-5xl sm:text-6xl md:text-7xl">
                  Hairdesign
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#9da3af] leading-relaxed max-w-2xl font-light">
              Στο <strong className="text-[#ededee] font-medium">The Two Guys hairdesign</strong>, η κλασική ανδρική περιποίηση επαναπροσδιορίζεται μέσα από σύγχρονη γεωμετρική μελέτη και εξατομικευμένη προσωπομετρία. Χωρίς βιασύνη, με απόλυτη αφοσίωση στη γραμμή, στο σβήσιμο και στη λεπτομέρεια.
            </p>

            {/* Direct Phone & Directions Actions (No automated web forms) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:+302651306950"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EDEDEE] text-[#121316] font-semibold text-sm tracking-wide rounded-md hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.52.59 3.68a1 1 0 01-.24 1.02l-2.23 2.09z"/>
                </svg>
                <span>Κλήση για Ραντεβού · 2651 306950</span>
              </a>

              <a
                href="https://maps.google.com/?q=Ρήγα+Φεραίου+καρδαμίτσια+24+Ioannina+454+44+Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#181a22] text-[#ededee] border border-[#282c38] font-medium text-sm tracking-wide rounded-md hover:bg-[#20232d] transition-all hover:border-[#383d4e] whitespace-nowrap"
              >
                <svg className="w-4 h-4 stroke-current shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Οδηγίες Τοποθεσίας</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Craft Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#252834] bg-[#15171f] group shadow-2xl">
              
              {/* Rich Visual Craft Container: Japanese Steel Barber Shears & Minimalist Geometry */}
              <div className="relative w-full h-[420px] md:h-[500px] bg-gradient-to-br from-[#161821] via-[#121318] to-[#0c0d10] flex items-center justify-center overflow-hidden">
                
                {/* Architectural radial glow & concentric rings */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
                
                {/* Background geometric grid lines */}
                <svg className="absolute inset-0 w-full h-full stroke-[#ffffff]/[0.03]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Barber Craft Stylized Visual Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  {/* Master Barber Shears & Razor Iconography */}
                  <div className="relative w-28 h-28 rounded-full border border-[#2e3342] bg-[#1a1d26]/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-14 h-14 stroke-[#ededee]" fill="none" viewBox="0 0 24 24" strokeWidth="1.25">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M12 12l2.616-1.51M9.384 9.137l6.578-3.799M9.384 9.137L6.768 7.627a2.25 2.25 0 10-2.25 3.897l2.616 1.51m2.25-3.897l2.616 1.51m-2.616-1.51l-1.536-.887m6.768 3.897l2.616 1.51a2.25 2.25 0 11-2.25 3.897l-2.616-1.51m2.25-3.897L12 12m2.616-1.51L12 12" />
                    </svg>
                    {/* Corner accent tick */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
                  </div>

                  <div className="space-y-2 max-w-xs">
                    <span className="font-cinzel text-xl font-bold tracking-[0.25em] text-[#ffffff] block">
                      THE TWO GUYS
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.35em] text-[#8e94a2] block">
                      HAIRDESIGN · IOANNINA
                    </span>
                    <div className="w-12 h-[1px] bg-[#2e3342] mx-auto my-2" />
                    <p className="text-xs text-[#a2a7b3] font-light leading-relaxed">
                      Εξειδίκευση σε μοντέρνα fades, κλασικά κουρέματα ψαλιδιού και παραδοσιακή περιποίηση γενειάδας.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
