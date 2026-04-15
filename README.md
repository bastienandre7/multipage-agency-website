# Orbit - Site Vitrine d'Agence Créative

Un site web moderne et élégant que j'ai développé avec Next.js 15, TypeScript et Tailwind CSS. Ce projet personnel démontre mes compétences en développement front-end et ma capacité à créer des expériences web professionnelles pour des agences créatives.

## 🎯 À propos du projet

Orbit est un projet personnel que j'ai conçu et développé pour présenter le travail d'une agence digitale fictive. L'objectif était de créer une vitrine complète et professionnelle qui reflète les standards actuels du web design, tout en explorant les dernières fonctionnalités de Next.js 15.

## ✨ Fonctionnalités développées

### 🎨 Interface utilisateur moderne

- Design minimaliste avec animations fluides et engageantes
- Formes organiques et éléments visuels contemporains
- Adaptation parfaite sur mobile, tablette et desktop

### 📄 Pages implémentées

- **Homepage** - Section hero, présentation des services, projets mis en avant, articles de blog
- **About** - Équipe, mission, valeurs et histoire de l'agence
- **Work** - Portfolio showcase with detailed project pages
- **Services** - Offres complètes de services
- **Blog** - Blog complet avec système de routage dynamique
- **Contact** - Formulaire de contact et informations de l'agence

### ⚡ Fonctionnalités techniques

- Pages de projets dynamiques (`/work/[id]`)
- Articles de blog dynamiques (`/blog/[slug]`)
- Animations au scroll avec Intersection Observer
- Optimisation des images responsive
- Métadonnées optimisées pour le SEO

### 🛠 **Technical Stack**

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **ESLint** pour la qualité du code


## 📁 Architecture du projet

```
orbit-project/
├── app/                   # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/
│   ├── blog/
│   │   └── [slug]/        # Dynamic blog posts
│   ├── contact/
│   ├── services/
│   └── work/
│       └── [id]/          # Dynamic project pages
├── components/
│   ├── home/              # Homepage sections
│   ├── about/             # About page components
│   ├── blog/              # Blog components
│   ├── contact/           # Contact components
│   ├── layout/            # Header, footer, navigation
│   ├── services/          # Services components
│   └── work/              # Work/portfolio components
├── data/
│   ├── projects.ts        # Project data and types
│   └── blog.ts            # Blog data and types
└── public/                # Static assets
```

## 🔗 Liens

- Démo en ligne :

---

Développé par Bastien Andre
