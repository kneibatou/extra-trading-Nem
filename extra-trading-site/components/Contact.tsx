'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { NumberDisplay } from './NumberDisplay';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pack: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatage du message WhatsApp
    const whatsappMessage = `
${t.contact.whatsapp.newRequest}

${t.contact.whatsapp.name} ${formData.name}
${t.contact.whatsapp.phone} ${formData.phone}
${t.contact.whatsapp.email} ${formData.email}
${t.contact.whatsapp.pack} ${formData.pack || t.contact.whatsapp.notSpecified}

${t.contact.whatsapp.message}
${formData.message}

---
${t.contact.whatsapp.via}
    `.trim();

    // Encodage pour URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '22246147263'; // Numéro WhatsApp sans le +
    
    // Ouvrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      phone: '',
      email: '',
      pack: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              {/* Pack */}
              <div>
                <label htmlFor="pack" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.pack}
                </label>
                <select
                  id="pack"
                  name="pack"
                  value={formData.pack}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">{t.contact.form.selectPack}</option>
                  <option value="Pack Résidentiel">{t.contact.form.residentialPack}</option>
                  <option value="Pack Entreprise">{t.contact.form.enterprisePack}</option>
                  <option value="Pack Solaire">{t.contact.form.solarPack}</option>
                  <option value="Pack Institutionnel">{t.contact.form.institutionalPack}</option>
                  <option value="Solution sur mesure">{t.contact.form.customSolution}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Bouton Submit */}
              <button type="submit" className="btn btn-primary w-full text-lg group">
                {t.contact.form.submit}
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                {t.contact.form.required}
              </p>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Carte d'information principale */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t.contact.info.contactUs}</h3>
              
              <div className="space-y-6">
                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.info.phone}</div>
                    <a
                      href="tel:+22246147263"
                      className="text-white/90 hover:text-secondary transition-colors text-lg"
                    >
                      <NumberDisplay>+222 46 14 72 63</NumberDisplay>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.info.email}</div>
                    <a
                      href="mailto:contact@maurifence.com"
                      className="text-white/90 hover:text-secondary transition-colors"
                    >
                      contact@maurifence.com
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.info.address}</div>
                    <div className="text-white/90">
                      Tevragh Zeina E-Nord<br />
                      N°222 - Nouakchott<br />
                      Mauritanie
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t.contact.info.hours}</div>
                    <div className="text-white/90">
                      {t.contact.info.hoursValue}<br />
                      {t.contact.info.hoursTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-primary mb-6">
                {t.contact.whyUs.title}
              </h4>
              <ul className="space-y-4">
                {t.contact.whyUs.reasons.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Badge de confiance */}
            <div className="bg-secondary rounded-2xl p-6 text-center text-white">
              <div className="text-4xl mb-3">🏆</div>
              <div className="font-bold text-2xl mb-2">{t.contact.trust.title}</div>
              <div className="text-white/90">
                {t.contact.trust.subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
