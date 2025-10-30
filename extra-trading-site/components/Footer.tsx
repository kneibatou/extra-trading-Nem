'use client';

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
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">ET</span>
              </div>
              <div>
                <div className="font-bold text-lg">Extra Trading</div>
                <div className="text-sm text-gray-300">SARL</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Votre partenaire de confiance pour les systèmes de clôture électrique intelligente en Mauritanie.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="https://wa.me/22246147263"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-xl">💬</span>
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
                  href="mailto:extratrading@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  extratrading@gmail.com
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
              © {currentYear} Extra Trading-sarl. Tous droits réservés.
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
