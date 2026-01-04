'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-14 h-14 bg-white rounded-xl shadow-xl p-2 border-2 border-secondary/30">
                <Image
                  src="/images/logo-maurifence.jpeg"
                  alt="MauriFence Security Solution"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="font-bold text-lg">MauriFence</div>
                <div className="text-secondary text-xs font-semibold uppercase tracking-wide">
                  Security Solution
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Votre partenaire de confiance pour les systèmes de clôture électrique intelligente en Mauritanie.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/Maurifence-Security-Solution/61585388844110/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06C2 17.07 5.66 21.15 10.44 22v-7.02H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.15 22 17.07 22 12.06z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@maurifence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/maurifence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://wa.me/22246147263"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47 0 .12 5.35.12 11.95c0 2.1.54 4.14 1.56 5.96L0 24l6.25-1.63a11.84 11.84 0 0 0 5.81 1.53h.01c6.6 0 11.95-5.35 11.95-11.95 0-3.19-1.24-6.19-3.5-8.47ZM12.06 21.3h-.01a9.37 9.37 0 0 1-4.77-1.31l-.34-.2-3.71.97.99-3.62-.22-.37a9.31 9.31 0 0 1-1.4-4.82c0-5.15 4.19-9.34 9.35-9.34a9.28 9.28 0 0 1 9.35 9.34c0 5.16-4.19 9.35-9.35 9.35Zm5.46-7.02c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.36-.02-.56-.02s-.52.08-.8.38c-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'Produit', href: '#produit' },
                { name: 'Nos Packs', href: '#packs' },
                { name: 'Témoignages', href: '#temoignages' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nos Packs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Packs</h3>
            <ul className="space-y-2">
              {[
                '🏠 Pack Résidentiel',
                '🏭 Pack Entreprise',
                '☀️ Pack Solaire',
                '🏫 Pack Institutionnel',
              ].map((pack, index) => (
                <li key={index}>
                  <a
                    href="#packs"
                    className="text-gray-300 hover:text-secondary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#packs');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {pack}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+22246147263"
                  className="hover:text-secondary transition-colors"
                >
                  +222 46 14 72 63
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:contact@maurifence.com"
                  className="hover:text-secondary transition-colors"
                >
                  contact@maurifence.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  Tevragh Zeina E-Nord<br />
                  N°222 - Nouakchott
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕐</span>
                <span>
                  Lun - Sam : 8h00 - 18h00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} MauriFence. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              {/* <span>Made with ❤️ in Mauritania 🇲🇷</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Retour en haut"
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
