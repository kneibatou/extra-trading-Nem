# 📸 GUIDE D'AJOUT D'IMAGES

## 📁 Structure des Images

Placez vos images dans le dossier `public/images/` selon cette organisation :

```
public/
└── images/
    ├── logo.png              # Logo Extra Trading (500x500px)
    ├── hero-bg.jpg           # Image de fond hero (1920x1080px)
    ├── installations/
    │   ├── installation-1.jpg
    │   ├── installation-2.jpg
    │   └── installation-3.jpg
    ├── products/
    │   ├── electrificateur.jpg
    │   ├── panneau-solaire.jpg
    │   └── application-mobile.jpg
    └── team/
        └── equipe.jpg
```

## 🎨 Images Recommandées

### 1. Logo (URGENT)
- **Fichier** : `logo.png`
- **Taille** : 500x500px
- **Format** : PNG avec fond transparent
- **Usage** : Header + Footer

### 2. Hero Section
- **Fichier** : `hero-bg.jpg`
- **Taille** : 1920x1080px minimum
- **Contenu** : 
  - Installation de clôture électrique
  - Vue professionnelle
  - Haute qualité

### 3. Installations (3-6 photos)
- **Photos** : Projets réels en Mauritanie
- **Avant/Après** si possible
- **Taille** : 1200x800px
- **Format** : JPG optimisé

### 4. Produits
- **Électrificateur TH-Steward**
- **Panneau de contrôle LCD**
- **Application mobile (screenshots)**
- **Panneau solaire** (si applicable)

### 5. Équipe (Optionnel)
- Photo professionnelle équipe
- Taille : 1200x800px

## 🔧 Comment Ajouter les Images

### Méthode 1 : Copier dans public/images/

1. Ouvrez le dossier `public/images/`
2. Collez vos images
3. Renommez selon le guide ci-dessus

### Méthode 2 : Utiliser dans les Composants

**Exemple dans Hero.tsx :**

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Clôture électrique Extra Trading"
  width={1920}
  height={1080}
  priority
/>
```

## 📊 Optimisation des Images

### Avant de les ajouter :

1. **Réduire la taille**
   - Utilisez : https://tinypng.com
   - Ou : https://squoosh.app
   - Objectif : <500KB par image

2. **Bonnes dimensions**
   - Hero : 1920x1080px
   - Cards : 800x600px
   - Logo : 500x500px
   - Thumbnails : 400x300px

3. **Format approprié**
   - Photos : JPG (qualité 80%)
   - Logo/Icons : PNG
   - Animations : GIF (éviter si possible)

## 🎯 Liste Images Prioritaires

### ⭐ URGENT (Nécessaires au lancement)
- [ ] Logo Extra Trading
- [ ] Photo hero principale
- [ ] 3 photos d'installations

### ✅ IMPORTANTES (Première semaine)
- [ ] Photo électrificateur
- [ ] Photo panneau LCD
- [ ] Screenshots application mobile
- [ ] Photo équipe

### 💡 BONUS (Plus tard)
- [ ] Vidéo installation
- [ ] Galerie complète projets
- [ ] Photos clients satisfaits
- [ ] Infographies

## 🚀 Après Ajout des Images

1. **Tester localement**
   ```bash
   npm run dev
   ```
   Vérifier que toutes les images s'affichent

2. **Rebuild**
   ```bash
   npm run build
   ```

3. **Redéployer**
   ```bash
   vercel
   ```

## 📱 Images pour Réseaux Sociaux

### Formats recommandés

**Facebook Post**
- Taille : 1200x630px
- Format : JPG/PNG

**Instagram Post**
- Taille : 1080x1080px (carré)
- Format : JPG/PNG

**Instagram Story**
- Taille : 1080x1920px
- Format : JPG/PNG

**Cover Photo Facebook**
- Taille : 820x312px
- Format : JPG

## 💡 Où Trouver des Images ?

### Si vous n'avez pas de photos :

**Gratuites**
- Unsplash.com
- Pexels.com
- Pixabay.com

**Recherche** : 
- "electric fence"
- "security system"
- "industrial security"
- "solar panel installation"

**⚠️ Attention :** Toujours vérifier les licences !

## 🎨 Créer des Visuels Marketing

### Outils gratuits :
1. **Canva** (canva.com)
   - Templates posts sociaux
   - Facile à utiliser
   - Version gratuite suffisante

2. **Remove.bg**
   - Enlever fond d'images
   - Créer PNGs transparents

3. **Photopea** (photopea.com)
   - Alternative gratuite à Photoshop
   - En ligne

## ✅ Checklist Images

Avant de lancer le site :

- [ ] Logo ajouté et visible
- [ ] Hero image professionnelle
- [ ] 3+ photos installations
- [ ] Photos produits claires
- [ ] Toutes images optimisées (<500KB)
- [ ] Test sur mobile et desktop
- [ ] Pas d'images cassées
- [ ] Alt text sur toutes les images (SEO)

## 🆘 Problèmes Courants

### Image ne s'affiche pas
➡️ Vérifiez le chemin : `/images/nom-fichier.jpg`
➡️ Respectez la casse (majuscules/minuscules)
➡️ Redémarrez le serveur dev

### Image trop lourde
➡️ Compressez sur tinypng.com
➡️ Réduisez les dimensions

### Image floue
➡️ Utilisez des images haute résolution
➡️ Minimum 1200px de largeur

---

**Vos images sont la vitrine de votre professionnalisme ! 📸**
