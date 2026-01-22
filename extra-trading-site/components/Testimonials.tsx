'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { NumberDisplay } from './NumberDisplay';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t.testimonials.clients.map((client, index) => ({
    ...client,
    rating: 5,
  }));

  const stats = [
    { number: '100+', label: t.testimonials.stats.installations },
    { number: '98%', label: t.testimonials.stats.satisfaction },
    { number: '24/7', label: t.testimonials.stats.support },
    { number: '12', label: t.testimonials.stats.warranty },
  ];

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
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                <NumberDisplay>{stat.number}</NumberDisplay>
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
                aria-label={t.testimonials.previous}
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
                    aria-label={`${t.testimonials.goTo} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label={t.testimonials.next}
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
            {t.testimonials.joinClients}
          </p>
          <a href="#contact" className="btn btn-primary text-lg">
            {t.testimonials.getQuote}
          </a>
        </div>
      </div>
    </section>
  );
}
