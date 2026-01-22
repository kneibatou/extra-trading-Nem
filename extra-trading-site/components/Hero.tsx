'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center gradient-bg relative overflow-hidden pt-20">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="text-white animate-slide-up">
            <div className="inline-block bg-secondary/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-secondary/30">
              <span className="text-secondary font-semibold text-sm tracking-wide">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
              <span className="block text-secondary">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleContactClick}
                className="btn btn-primary text-lg group"
              >
                {t.hero.cta}
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
              
              <a
                href="tel:+22246147263"
                className="btn bg-white text-primary hover:bg-gray-100 text-lg"
              >
                <span className="mr-2">📞</span>
                {t.hero.callUs}
              </a>
            </div>

            {/* Points clés */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl lg:text-3xl">⚡</span>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-base lg:text-lg text-secondary">12 000 V</div>
                  <div className="text-xs lg:text-sm text-gray-300">{t.hero.power}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl lg:text-3xl">📱</span>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-base lg:text-lg text-secondary">{t.hero.control}</div>
                  <div className="text-xs lg:text-sm text-gray-300">{t.hero.mobileApp}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl lg:text-3xl">🔋</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base lg:text-lg text-secondary">{t.hero.modes}</div>
                  <div className="text-xs lg:text-sm text-gray-300 leading-tight">
                    {t.hero.modesDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-secondary/30 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-secondary/30 to-primary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Pattern de fond */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-secondary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-36 h-36 mx-auto mb-6 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                    <svg
                      className="w-20 h-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="text-white text-xl font-bold mb-2">
                    {t.hero.maxProtection}
                  </div>
                  <div className="text-secondary text-sm font-semibold">
                    {t.hero.technology}
                  </div>
                </div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-2xl animate-pulse-slow border-2 border-white/30">
                <span className="font-bold text-sm">{t.hero.warranty}</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-secondary to-secondary-dark text-primary px-5 py-3 rounded-2xl shadow-2xl border-2 border-white/30">
                <span className="font-bold text-sm">{t.hero.training}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
