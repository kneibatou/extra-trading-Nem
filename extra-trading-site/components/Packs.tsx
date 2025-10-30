'use client';

export default function Packs() {
  const packs = [
    {
      name: 'Pack Résidentiel',
      icon: '🏠',
      description: 'Idéal pour villas et résidences privées',
      features: [
        'Installation esthétique et discrète',
        'Système jusqu\'à 200m de clôture',
        'Contrôle via application mobile',
        'Écran LCD de monitoring',
        'Alimentation secteur + batterie',
        'Formation complète',
        'Garantie 12 mois',
      ],
      ideal: ['Villas', 'Maisons familiales', 'Résidences privées'],
      color: 'from-blue-500 to-blue-700',
      popular: false,
    },
    {
      name: 'Pack Entreprise',
      icon: '🏭',
      description: 'Solution complète pour sites industriels',
      features: [
        'Grande clôture jusqu\'à 500m',
        'Système d\'alarme connecté',
        'Sirène 110 dB professionnelle',
        'Contrôle multi-utilisateurs',
        'Alimentation triple (secteur/batterie/solaire)',
        'Support technique prioritaire',
        'Installation + formation équipe',
        'Garantie 12 mois étendue',
      ],
      ideal: ['Dépôts', 'Usines', 'Entrepôts', 'Zones logistiques'],
      color: 'from-secondary to-secondary-dark',
      popular: true,
    },
    {
      name: 'Pack Solaire',
      icon: '☀️',
      description: 'Autonome et écologique',
      features: [
        'Fonctionnement 100% solaire',
        'Panneaux solaires premium',
        'Batteries haute capacité',
        'Idéal zones sans électricité',
        'Système autonome fiable',
        'Écran LCD de monitoring',
        'Installation complète',
        'Garantie 12 mois',
      ],
      ideal: ['Fermes', 'Ranchs', 'Zones rurales', 'Sites isolés'],
      color: 'from-green-500 to-green-700',
      popular: false,
    },
    {
      name: 'Pack Institutionnel',
      icon: '🏫',
      description: 'Sécurité renforcée 24/7',
      features: [
        'Système haute sécurité',
        'Surveillance continue',
        'Intégration système d\'alarme',
        'Contrôle centralisé',
        'Alimentation sécurisée',
        'Maintenance prioritaire',
        'Formation personnel sécurité',
        'Garantie 12 mois + support',
      ],
      ideal: ['Écoles', 'Hôpitaux', 'Hôtels', 'Administrations', 'ONG'],
      color: 'from-purple-500 to-purple-700',
      popular: false,
    },
  ];

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packs" className="bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Nos Packs Sur Mesure</h2>
          <p className="section-subtitle">
            Choisissez la solution adaptée à vos besoins de sécurité
          </p>
        </div>

        {/* Grille des packs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge populaire */}
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Plus Populaire
                  </div>
                </div>
              )}

              <div
                className={`card h-full flex flex-col ${
                  pack.popular ? 'ring-2 ring-secondary shadow-2xl' : ''
                }`}
              >
                {/* En-tête coloré */}
                <div className={`bg-gradient-to-r ${pack.color} -mx-6 -mt-6 p-6 rounded-t-xl mb-6`}>
                  <div className="text-4xl mb-3">{pack.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                  <p className="text-white/90 text-sm">{pack.description}</p>
                </div>

                {/* Caractéristiques */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Idéal pour */}
                <div className="bg-gray-50 -mx-6 px-6 py-4 mb-6 rounded-lg">
                  <div className="text-xs font-semibold text-gray-500 mb-2">IDÉAL POUR :</div>
                  <div className="flex flex-wrap gap-2">
                    {pack.ideal.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton CTA */}
                <button
                  onClick={handleContactClick}
                  className="btn btn-primary w-full group"
                >
                  Demander un Devis
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section informations */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Besoin d'une Solution Personnalisée ?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Chaque projet est unique. Contactez-nous pour une étude sur mesure adaptée 
            à vos besoins spécifiques de sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleContactClick} className="btn bg-secondary hover:bg-secondary-dark">
              <span className="mr-2">💬</span>
              Discuter de Mon Projet
            </button>
            <a href="tel:+22246147263" className="btn bg-white text-primary hover:bg-gray-100">
              <span className="mr-2">📞</span>
              +222 46 14 72 63
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
