'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mohamed Ould Ahmed',
      role: 'Directeur d\'usine',
      company: 'Société Logistique MRT',
      content: 'Depuis l\'installation du système Extra Trading, nous n\'avons plus eu aucune intrusion dans notre dépôt. Le contrôle via l\'application mobile est très pratique et l\'équipe a été très professionnelle.',
      rating: 5,
      location: 'Nouakchott',
    },
    {
      name: 'Aïcha Mint Sidi',
      role: 'Propriétaire',
      company: 'Villa Résidentielle',
      content: 'Une excellente solution pour sécuriser ma maison. L\'installation a été rapide, propre et l\'équipe m\'a bien formée. Je me sens beaucoup plus en sécurité maintenant. Je recommande vivement !',
      rating: 5,
      location: 'Tevragh Zeina',
    },
    {
      name: 'Jean-Paul Dubois',
      role: 'Coordinateur',
      company: 'ONG Internationale',
      content: 'Nous avons équipé nos bureaux avec le Pack Institutionnel. Le système est fiable, autonome avec le solaire, et le support technique est réactif. Parfait pour nos besoins de sécurité 24/7.',
      rating: 5,
      location: 'Nouakchott',
    },
    {
      name: 'Abdallah Ould Cheikh',
      role: 'Gérant',
      company: 'Ferme Agricole',
      content: 'Le Pack Solaire est idéal pour notre ferme en zone rurale. Fini les vols de bétail ! Le système est autonome et ne nécessite aucun entretien particulier. Un investissement rentable.',
      rating: 5,
      location: 'Rosso',
    },
    {
      name: 'Mariem Mint El Moctar',
      role: 'Directrice',
      company: 'Hôtel Le Sahara',
      content: 'Nous avons fait confiance à Extra Trading pour sécuriser notre établissement. Les clients se sentent en sécurité et le système s\'intègre parfaitement sans nuire à l\'esthétique de l\'hôtel.',
      rating: 5,
      location: 'Nouadhibou',
    },
    {
      name: 'Ibrahim Ba',
      role: 'Responsable Sécurité',
      company: 'Centre Médical',
      content: 'Installation professionnelle, matériel de qualité et formation complète pour notre équipe. Le système fonctionne parfaitement depuis 8 mois sans aucun problème. Très satisfait !',
      rating: 5,
      location: 'Nouakchott',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="temoignages" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Ce Que Disent Nos Clients</h2>
          <p className="section-subtitle">
            Plus de 100 installations réussies en Mauritanie. Découvrez leurs témoignages
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '100+', label: 'Installations' },
            { number: '98%', label: 'Satisfaction' },
            { number: '24/7', label: 'Support' },
            { number: '12', label: 'Mois Garantie' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Carrousel de témoignages */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Guillemets */}
            <div className="text-6xl text-secondary opacity-20 mb-4">"</div>

            {/* Contenu du témoignage */}
            <div className="mb-6">
              <div className="flex mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].company} • {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Témoignage précédent"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Indicateurs */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-secondary w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Témoignage suivant"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez nos clients satisfaits
          </p>
          <a href="#contact" className="btn btn-primary text-lg">
            Demander Mon Devis Gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
