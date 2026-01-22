'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { NumberDisplay } from './NumberDisplay';

export default function Packs() {
  const { t } = useLanguage();

  const packs = [
    {
      name: t.packs.residential.name,
      icon: '🏠',
      description: t.packs.residential.description,
      features: t.packs.residential.features,
      ideal: t.packs.residential.ideal,
      color: 'from-blue-500 to-blue-700',
      popular: false,
    },
    {
      name: t.packs.enterprise.name,
      icon: '🏭',
      description: t.packs.enterprise.description,
      features: t.packs.enterprise.features,
      ideal: t.packs.enterprise.ideal,
      color: 'from-secondary to-secondary-dark',
      popular: true,
    },
    {
      name: t.packs.solar.name,
      icon: '☀️',
      description: t.packs.solar.description,
      features: t.packs.solar.features,
      ideal: t.packs.solar.ideal,
      color: 'from-green-500 to-green-700',
      popular: false,
    },
    {
      name: t.packs.institutional.name,
      icon: '🏫',
      description: t.packs.institutional.description,
      features: t.packs.institutional.features,
      ideal: t.packs.institutional.ideal,
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
          <h2 className="section-title">{t.packs.title}</h2>
          <p className="section-subtitle">
            {t.packs.subtitle}
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
                    {t.packs.mostPopular}
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
                  <div className="text-xs font-semibold text-gray-500 mb-2">{t.packs.idealFor}</div>
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
                  {t.packs.getQuote}
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
            {t.packs.customSolution}
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t.packs.customSolutionDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleContactClick} className="btn bg-secondary hover:bg-secondary-dark">
              {t.packs.discussProject}
            </button>
            <a href="tel:+22246147263" className="btn bg-white text-primary hover:bg-gray-100">
              <span className="mr-2">📞</span>
              <NumberDisplay>+222 46 14 72 63</NumberDisplay>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
