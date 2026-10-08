import React, { useState } from 'react';
import { BUSINESS_SCHEDULE, getCurrentShopStatus, getGreekCurrentTime } from '../utils/businessHours';

export const LocationHours: React.FC = () => {
  const status = getCurrentShopStatus();
  const { dayOfWeek } = getGreekCurrentTime();
  const [copiedAddress, setCopiedAddress] = useState(false);

  const addressText = 'Ρήγα Φεραίου, καρδαμίτσια 24, Ιωάννινα 454 44';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  // Order schedule to start from Monday (standard European business presentation)
  const orderedSchedule = [
    BUSINESS_SCHEDULE[1], // Monday (Δευτέρα)
    BUSINESS_SCHEDULE[2], // Tuesday (Τρίτη)
    BUSINESS_SCHEDULE[3], // Wednesday (Τετάρτη)
    BUSINESS_SCHEDULE[4], // Thursday (Πέμπτη)
    BUSINESS_SCHEDULE[5], // Friday (Παρασκευή)
    BUSINESS_SCHEDULE[6], // Saturday (Σάββατο)
    BUSINESS_SCHEDULE[0], // Sunday (Κυριακή)
  ];

  return (
    <section id="location" className="py-24 md:py-32 border-b border-[#222530] bg-[#14161c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header Window Bar */}
        <div className="max-w-2xl mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#8e94a2] font-semibold">
            <span>03 · ΠΡΟΣΒΑΣΗ & ΠΡΟΓΡΑΜΜΑ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#ededee] tracking-tight">
            Ωράριο & Τοποθεσία
          </h2>
          <p className="text-sm md:text-base text-[#9da3af] font-light leading-relaxed">
            Σας υποδεχόμαστε στα Καρδαμίτσια Ιωαννίνων σε έναν σύγχρονο, προσεγμένο χώρο με άνετο πάρκινγκ.
          </p>
        </div>

        {/* Structural Windows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Schedule & Contact Windows */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Status Window */}
            <div className="p-6 rounded-lg bg-[#161821] border border-[#252835] shadow-sm">
              <p className="text-sm font-semibold text-[#ededee]">{status.message}</p>
              <p className="text-xs text-[#9da3af] mt-0.5">{status.subMessage}</p>
            </div>

            {/* Weekly Timetable Window */}
            <div className="rounded-lg bg-[#161821] border border-[#252835] overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-[#232633] bg-[#14161e]">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8e94a2]">
                  Εβδομαδιαίο Πρόγραμμα Λειτουργίας
                </h3>
              </div>

              <div className="divide-y divide-[#212431]">
                {orderedSchedule.map((dayItem, idx) => {
                  const isToday = 
                    (dayItem.dayName === 'Κυριακή' && dayOfWeek === 0) ||
                    (dayItem.dayName === 'Δευτέρα' && dayOfWeek === 1) ||
                    (dayItem.dayName === 'Τρίτη' && dayOfWeek === 2) ||
                    (dayItem.dayName === 'Τετάρτη' && dayOfWeek === 3) ||
                    (dayItem.dayName === 'Πέμπτη' && dayOfWeek === 4) ||
                    (dayItem.dayName === 'Παρασκευή' && dayOfWeek === 5) ||
                    (dayItem.dayName === 'Σάββατο' && dayOfWeek === 6);

                  return (
                    <div
                      key={idx}
                      className={`px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                        isToday ? 'bg-[#1f222e] font-semibold text-[#ffffff]' : 'text-[#a2a7b3]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{dayItem.dayName}</span>
                      </div>

                      <span className={`font-mono text-xs ${dayItem.hours === 'Κλειστά' ? 'text-[#6b7280]' : 'text-[#ededee]'}`}>
                        {dayItem.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address & Phone Action Window */}
            <div className="p-6 rounded-lg bg-[#161821] border border-[#252835] space-y-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#6b7280]">Διεύθυνση & Ταχυδρομικός Κώδικας</p>
                  <p className="text-sm font-medium text-[#ededee] mt-1">Ρήγα Φεραίου, καρδαμίτσια 24</p>
                  <p className="text-xs text-[#9da3af]">Ιωάννινα, Τ.Κ. 454 44 · Ελλάδα</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="px-3.5 py-2 bg-[#1f222d] hover:bg-[#282c3a] text-xs text-[#c8cbd3] rounded-md border border-[#2b2f3e] transition-colors"
                  >
                    {copiedAddress ? '✓ Αντιγράφηκε' : 'Αντιγραφή'}
                  </button>
                  <a
                    href="https://maps.google.com/?q=Ρήγα+Φεραίου+καρδαμίτσια+24+Ioannina+454+44+Greece"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#ededee] text-[#121316] font-semibold text-xs rounded-md hover:bg-white transition-colors"
                  >
                    Οδηγίες
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222533] flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#6b7280]">Τηλέφωνο Επικοινωνίας</p>
                  <a
                    href="tel:+302651306950"
                    className="text-base font-semibold text-[#ededee] hover:text-white transition-colors tracking-wider"
                  >
                    +30 2651 306950
                  </a>
                </div>
                <a
                  href="tel:+302651306950"
                  className="text-xs text-[#9da3af] hover:text-[#ededee] underline underline-offset-4"
                >
                  Κλήση τώρα
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Window */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#252835] bg-[#15171f] aspect-[4/3] md:aspect-[16/11] shadow-lg">
              <iframe
                title="Τοποθεσία The Two Guys hairdesign - Καρδαμίτσια Ιωάννινα"
                src="https://maps.google.com/maps?q=Ρήγα+Φεραίου+καρδαμίτσια+24+Ioannina+454+44&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(85%) invert(92%) contrast(85%)' }}
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Overlay Window Ribbon */}
              <div className="absolute top-4 left-4 right-4 p-3.5 bg-[#121316]/95 backdrop-blur-md rounded-md border border-[#262936] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#ededee]">The Two Guys hairdesign</p>
                  <p className="text-[11px] text-[#9da3af]">Καρδαμίτσια 24, Ιωάννινα 454 44</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Ρήγα+Φεραίου+καρδαμίτσια+24+Ioannina+454+44+Greece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#1f222e] text-[#ededee] hover:bg-[#282d3c] rounded font-medium text-[11px] border border-[#2e3343] transition-colors"
                >
                  Άνοιγμα Χάρτη
                </a>
              </div>
            </div>

            <p className="text-xs text-[#6b7280] leading-relaxed">
              Εύκολη πρόσβαση στα Καρδαμίτσια με άνετο χώρο στάθμευσης στην περιοχή.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
