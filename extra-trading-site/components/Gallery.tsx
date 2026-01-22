'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const categoryKeys = ['residential', 'residential', 'installation', 'technical', 'residential', 'hospitality', 'commercial', 'residential'] as const;

  const projects = [
    {
      id: 1,
      image: '/images/IMG_9809.jpg',
      title: t.gallery.projects[0].title,
      description: t.gallery.projects[0].description,
      category: t.gallery.categories[categoryKeys[0]],
    },
    {
      id: 2,
      image: '/images/IMG_9810.jpg',
      title: t.gallery.projects[1].title,
      description: t.gallery.projects[1].description,
      category: t.gallery.categories[categoryKeys[1]],
    },
    {
      id: 3,
      image: '/images/IMG_9811.jpg',
      title: t.gallery.projects[2].title,
      description: t.gallery.projects[2].description,
      category: t.gallery.categories[categoryKeys[2]],
    },
    {
      id: 4,
      image: '/images/IMG_9814.jpg',
      title: t.gallery.projects[3].title,
      description: t.gallery.projects[3].description,
      category: t.gallery.categories[categoryKeys[3]],
    },
    {
      id: 5,
      image: '/images/IMG_9815.jpg',
      title: t.gallery.projects[4].title,
      description: t.gallery.projects[4].description,
      category: t.gallery.categories[categoryKeys[4]],
    },
    {
      id: 6,
      image: '/images/IMG_9816.jpg',
      title: t.gallery.projects[5].title,
      description: t.gallery.projects[5].description,
      category: t.gallery.categories[categoryKeys[5]],
    },
    {
      id: 7,
      image: '/images/IMG_9806.jpg',
      title: t.gallery.projects[6].title,
      description: t.gallery.projects[6].description,
      category: t.gallery.categories[categoryKeys[6]],
    },
    {
      id: 8,
      image: '/images/IMG_9817.jpg',
      title: t.gallery.projects[7].title,
      description: t.gallery.projects[7].description,
      category: t.gallery.categories[categoryKeys[7]],
    },
  ];

  return (
    <section id="realisations" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-secondary/30">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              {t.gallery.badge}
            </span>
          </div>
          <h2 className="section-title">
            {t.gallery.title} <span className="text-secondary">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Grille de galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Badge catégorie */}
                <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {project.category}
                </div>

                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Icône zoom */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-secondary/20">
            <h3 className="text-2xl font-bold text-primary mb-3">
              {t.gallery.yourProject}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              {t.gallery.yourProjectDesc}
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary"
            >
              {t.gallery.getQuote}
            </a>
          </div>
        </div>
      </div>

      {/* Modal lightbox pour agrandir les images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
            aria-label={t.gallery.close}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Image agrandie"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
