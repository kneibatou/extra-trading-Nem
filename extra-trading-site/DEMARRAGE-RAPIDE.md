# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## Bienvenue sur le site Extra Trading-sarl !

Ce guide vous aidera à lancer votre site en quelques minutes.

## ⚡ Démarrage en 3 Étapes

### 1️⃣ Installer Node.js (si pas déjà fait)

Téléchargez depuis : https://nodejs.org/
Choisissez la version LTS (recommandée)

### 2️⃣ Ouvrir le Terminal

**Windows :**
- Ouvrez le dossier du projet
- Clic droit > "Ouvrir dans le Terminal" ou "Git Bash Here"

**Mac/Linux :**
- Ouvrez le Terminal
- Naviguez vers le dossier : `cd chemin/vers/extra-trading-site`

### 3️⃣ Lancer le Site

```bash
# Installer les dépendances (première fois uniquement)
npm install

# Démarrer le serveur de développement
npm run dev
```

✅ **Votre site est maintenant accessible sur : http://localhost:3000**

## 🎨 Personnaliser le Site

### Modifier les Coordonnées

Ouvrez ces fichiers et changez les informations :

**`components/Contact.tsx`** - Ligne 21
```typescript
const whatsappNumber = '22246147263'; // VOTRE NUMÉRO
```

**`components/Footer.tsx`** - Lignes diverses
```typescript
// Changez email, téléphone, adresse
```

### Ajouter vos Images

1. Placez vos photos dans `public/images/`
2. Utilisez-les dans les composants

### Modifier les Packs

**`components/Packs.tsx`** - Ajoutez/modifiez les offres

## 🌐 Mettre en Ligne (GRATUIT)

### Méthode la Plus Simple : Vercel

1. Créez un compte sur : https://vercel.com
2. Installez Vercel :
```bash
npm install -g vercel
```
3. Déployez :
```bash
vercel
```
4. Suivez les instructions
5. ✅ Votre site est en ligne !

## 📱 Tester sur Mobile

Une fois lancé avec `npm run dev` :
1. Trouvez votre adresse IP locale (ex: 192.168.1.X)
2. Sur votre téléphone, accédez à : http://192.168.1.X:3000

## 🆘 Problèmes Courants

### Erreur "npm not found"
➡️ Installez Node.js d'abord

### Port 3000 déjà utilisé
➡️ Changez le port : `npm run dev -- -p 3001`

### Erreurs d'installation
```bash
rm -rf node_modules
npm install
```

## 📞 Besoin d'Aide ?

Contactez-nous :
- 📱 WhatsApp : +222 46 14 72 63
- 📧 Email : extratrading@gmail.com

## 🎯 Checklist Post-Installation

- [ ] Site lancé et accessible
- [ ] Coordonnées personnalisées
- [ ] Testé sur mobile et desktop
- [ ] Site déployé en ligne
- [ ] Google Business Profile créé
- [ ] Réseaux sociaux configurés

---

**Félicitations ! Votre site est prêt à générer des leads ! 🎉**
