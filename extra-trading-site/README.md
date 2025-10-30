# 🔒 Extra Trading-sarl - Site Vitrine

Site web professionnel pour Extra Trading-sarl, spécialiste des systèmes de clôture électrique intelligente en Mauritanie.

## 🌟 Aperçu du Projet

Site vitrine one-page moderne et responsive présentant les solutions de sécurité Extra Trading-sarl :
- Système de clôture électrique intelligente
- 4 packs adaptés (Résidentiel, Entreprise, Solaire, Institutionnel)
- Contrôle via application mobile & télécommande
- Installation et formation incluses

## 📁 Structure du Projet

```
extra-trading-site/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées SEO
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux + Tailwind
├── components/
│   ├── Header.tsx          # Navigation responsive
│   ├── Hero.tsx            # Section d'accueil
│   ├── Features.tsx        # Caractéristiques du produit
│   ├── Packs.tsx           # Offres commerciales
│   ├── Testimonials.tsx    # Témoignages clients
│   ├── Contact.tsx         # Formulaire de contact
│   └── Footer.tsx          # Pied de page
├── public/
│   └── images/             # Images du site
├── tailwind.config.js      # Configuration Tailwind
├── next.config.js          # Configuration Next.js
└── package.json            # Dépendances
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étape 1: Installer les dépendances

```bash
npm install
```

### Étape 2: Lancer en mode développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### Étape 3: Build pour la production

```bash
npm run build
```

Cela génère un export statique dans le dossier `out/`

## 📱 Sections du Site

### 1. Header / Navigation
- Logo Extra Trading
- Menu responsive (mobile + desktop)
- Navigation smooth scroll
- Bouton CTA "Devis Gratuit"

### 2. Hero (Accueil)
- Message principal accrocheur
- Boutons d'action (Devis + Appel)
- Points clés du produit
- Animation fluide

### 3. Features (Produit)
- 4 caractéristiques principales
- Équipements inclus
- Badge "Made in Mauritanie"
- Design en grille responsive

### 4. Packs (Offres)
- **Pack Résidentiel** 🏠 : Villas et résidences
- **Pack Entreprise** 🏭 : Dépôts et usines (⭐ Plus populaire)
- **Pack Solaire** ☀️ : Zones rurales
- **Pack Institutionnel** 🏫 : Écoles, hôpitaux, hôtels

### 5. Testimonials (Témoignages)
- Carrousel de 6 témoignages clients
- Statistiques (100+ installations, 98% satisfaction)
- Navigation intuitive

### 6. Contact (Formulaire)
- Formulaire envoi direct vers WhatsApp
- Informations de contact
- Carte de localisation potentielle
- CTA "Devis Gratuit"

### 7. Footer
- Liens navigation
- Coordonnées complètes
- Réseaux sociaux
- Bouton retour en haut

## 💬 Fonctionnalité WhatsApp

Le formulaire de contact envoie automatiquement les informations via WhatsApp :
- Numéro : +222 46 14 72 63
- Message formaté avec toutes les infos
- Pas besoin de backend !

## 🎨 Design & Technologies

### Technologies utilisées
- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **Responsive Design** - Mobile-first

### Palette de couleurs
- **Bleu Marine** (`#1e3a5f`) : Couleur primaire
- **Orange/Or** (`#f59e0b`) : Couleur secondaire
- **Vert** (`#22c55e`) : Succès & WhatsApp
- **Gris** - Textes secondaires

### Animations
- Fade in
- Slide up
- Hover effects
- Smooth scroll

## 🌐 Déploiement

### Option 1: Vercel (Recommandé - Gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI :
```bash
npm install -g vercel
```
3. Déployer :
```bash
vercel
```
4. Suivre les instructions
5. ✅ Site en ligne en 2 minutes !

### Option 2: Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Drag & drop le dossier `out/` après build
3. ✅ Site en ligne !

### Option 3: Export statique

```bash
npm run build
```
Le dossier `out/` contient tous les fichiers HTML/CSS/JS prêts à être hébergés n'importe où.

## 📝 Personnalisation

### Modifier les informations de contact

**`components/Contact.tsx`** et **`components/Footer.tsx`**

```typescript
const whatsappNumber = '22246147263'; // Votre numéro
const email = 'extratrading@gmail.com'; // Votre email
const address = 'Tevragh Zeina E-Nord, N°222'; // Votre adresse
```

### Modifier les packs

**`components/Packs.tsx`**

```typescript
const packs = [
  {
    name: 'Nouveau Pack',
    icon: '🎯',
    description: 'Description...',
    features: ['Feature 1', 'Feature 2'],
    // ...
  }
];
```

### Ajouter des témoignages

**`components/Testimonials.tsx`**

```typescript
const testimonials = [
  {
    name: 'Nom Client',
    role: 'Fonction',
    company: 'Entreprise',
    content: 'Témoignage...',
    rating: 5,
    location: 'Ville',
  }
];
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Démarrer en mode développement
npm run build    # Build pour production
npm run start    # Démarrer en mode production
npm run lint     # Vérifier le code
```

## 📊 SEO Optimisé

Le site est optimisé pour les moteurs de recherche :
- Métadonnées complètes
- Open Graph tags
- Structure sémantique HTML5
- Sitemap.xml (à générer)
- robots.txt (à créer)

## 🎯 Prochaines Étapes

1. ✅ **Ajouter vos vraies images** dans `public/images/`
2. ✅ **Déployer le site** sur Vercel
3. ✅ **Créer Google Business Profile**
4. ✅ **Configurer Google Analytics**
5. ✅ **Lancer les réseaux sociaux** (Facebook, Instagram)
6. ✅ **Créer du contenu régulier**
7. ⏳ **Ajouter un blog** (optionnel, futur)
8. ⏳ **Intégrer Google Maps** (optionnel)

## 📞 Support & Contact

**Extra Trading-sarl**
- 📱 WhatsApp : +222 46 14 72 63
- 📧 Email : extratrading@gmail.com
- 📍 Adresse : Tevragh Zeina E-Nord, N°222 - Nouakchott
- 🕐 Horaires : Lun-Sam 8h00-18h00

## 📄 Licence

© 2025 Extra Trading-sarl. Tous droits réservés.

---

**Made with ❤️ in Mauritania 🇲🇷**
