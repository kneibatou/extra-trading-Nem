'use client';

export default function Hero() {
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
            <div className="inline-block bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-secondary font-semibold">
                🔒 Sécurité 24/7
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Système de Clôture
              <span className="block text-secondary">Électrique Intelligente</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Sécurisez efficacement vos locaux avec une technologie de pointe. 
              Contrôle via application mobile & télécommande.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleContactClick}
                className="btn btn-primary text-lg group"
              >
                Demander un Devis
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
              
              <a
                href="tel:+22246147263"
                className="btn bg-white text-primary hover:bg-gray-100 text-lg"
              >
                <span className="mr-2">📞</span>
                Appelez-nous
              </a>
            </div>

            {/* Points clés */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-lg">12 000 V</div>
                  <div className="text-sm text-gray-300">Puissance max</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Contrôle</div>
                  <div className="text-sm text-gray-300">App mobile</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔋</span>
                </div>
                <div>
                  <div className="font-bold text-lg">3 modes</div>
                  <div className="text-sm text-gray-300">Secteur/Batterie/Solaire</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
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
                  <div className="text-white text-lg font-semibold mb-2">
                    Protection Maximale
                  </div>
                  <div className="text-gray-300 text-sm">
                    Technologie TH-Steward WF
                  </div>
                </div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse-slow">
                <span className="font-bold">✓ Garantie 12 mois</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary text-white px-4 py-2 rounded-full shadow-lg">
                <span className="font-bold">🎓 Formation incluse</span>
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
