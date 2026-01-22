'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '⚡',
      title: t.features.electrifier.title,
      description: t.features.electrifier.description,
      details: t.features.electrifier.details,
    },
    {
      icon: '📱',
      title: t.features.control.title,
      description: t.features.control.description,
      details: t.features.control.details,
    },
    {
      icon: '📊',
      title: t.features.lcd.title,
      description: t.features.lcd.description,
      details: t.features.lcd.details,
    },
    {
      icon: '🔋',
      title: t.features.power.title,
      description: t.features.power.description,
      details: t.features.power.details,
    },
  ];

  return (
    <section id="produit" className="bg-gray-50">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            {t.features.title}
          </h2>
          <p className="section-subtitle">
            {t.features.subtitle}
          </p>
        </div>

        {/* Caractéristiques principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center text-3xl mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Équipements inclus */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-secondary font-semibold">{t.features.premiumEquipment}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-primary mb-6">
                {t.features.turnkey}
              </h3>
              
              <p className="text-gray-600 mb-8">
                {t.features.turnkeyDesc}
              </p>

              <ul className="space-y-4">
                {t.features.equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-2xl font-bold mb-4">
                  {t.features.guaranteedSecurity}
                </h4>
                <p className="mb-6 text-gray-200">
                  {t.features.guaranteedSecurityDesc}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-secondary">110</div>
                    <div className="text-sm text-gray-200">{t.features.sirenDb}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-gray-200">{t.features.surveillance}</div>
                  </div>
                </div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-lg font-bold">
                {t.features.madeIn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
