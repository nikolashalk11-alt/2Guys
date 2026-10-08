import React from 'react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      author: 'Κώστας Π.',
      rating: 5,
      time: 'πριν 2 εβδομάδες',
      review: 'Τα παιδιά έχουν ανεβάσει το επίπεδο στα Γιάννενα. Άψογο σβήσιμο, απόλυτη καθαριότητα και πραγματικό ενδιαφέρον για το τι ταιριάζει στο σχήμα του προσώπου σου. 5/5 με κλειστά μάτια!',
    },
    {
      author: 'Δημήτρης Μ.',
      rating: 5,
      time: 'πριν 1 μήνα',
      review: 'Φοβερός επαγγελματισμός στα Καρδαμίτσια. Δεν υπάρχει ίχνος βιασύνης, αφιερώνουν όσο χρόνο απαιτείται για να βγει το τέλειο fade και το σωστό περίγραμμα στη γενειάδα.',
    },
    {
      author: 'Αλέξανδρος Γ.',
      rating: 5,
      time: 'πριν 2 μήνες',
      review: 'Εξαιρετική εμπειρία. Συνεπείς στην ώρα τους, προσεγμένος χώρος, σοβαρή προσέγγιση στο styling και φιλική κουβέντα. Το καλύτερο μαγαζί στην περιοχή.',
    },
    {
      author: 'Γιώργος Σ.',
      rating: 5,
      time: 'πριν 3 μήνες',
      review: 'Πολύ καλή δουλειά, τρομερή λεπτομέρεια στο ψαλίδι και άριστη επικοινωνία. Επιτέλους ένα σύγχρονο κουρείο με ουσία και άποψη. Μπράβο στα παιδιά!',
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 border-b border-[#222530] bg-[#121316]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header Window Bar with Google Highlights */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="space-y-3">
            <div className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#8e94a2] font-semibold">
              <span>02 · ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#ededee] tracking-tight">
              5,0 στο Google
            </h2>
            <p className="text-sm md:text-base text-[#9da3af] font-light max-w-lg leading-relaxed">
              Βασισμένο σε 25 πραγματικές κριτικές επισκεπτών στο επίσημο Google Business προφίλ μας στα Ιωάννινα.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=The+Two+Guys+hairdesign+Ioannina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#181a22] border border-[#282c39] text-xs font-semibold text-[#ededee] hover:bg-[#20232e] hover:border-[#383d4f] transition-all whitespace-nowrap"
            >
              <span>Γράψτε αξιολόγηση στο Google</span>
            </a>
          </div>
        </div>

        {/* Reviews Cards Window Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-lg bg-[#15171f] border border-[#242735] flex flex-col justify-between space-y-6 hover:border-[#383d4f] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#222533]">
                  <span className="text-xs font-medium text-[#ededee]">{item.author}</span>
                </div>

                <p className="text-sm text-[#c8cbd3] leading-relaxed font-light">
                  «{item.review}»
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
