# Orbit - Creative Agency Showcase Website

A modern and elegant website I developed with Next.js 15, TypeScript, and Tailwind CSS. This personal project demonstrates my front-end development skills and my ability to create professional web experiences for creative agencies.

## 🎯 About the Project

Orbit is a personal project I designed and developed to showcase the work of a fictional digital agency. The goal was to create a complete and professional showcase that reflects current web design standards, while exploring the latest features of Next.js 15.

## ✨ Developed Features

### 🎨 Modern User Interface

- Minimalist design with smooth and engaging animations
- Organic shapes and contemporary visual elements
- Perfect adaptation across mobile, tablet, and desktop

### 📄 Implemented Pages

- **Homepage** - Hero section, services presentation, featured projects, blog articles
- **About** - Team, mission, values, and agency history
- **Work** - Portfolio showcase with detailed project pages
- **Services** - Complete service offerings
- **Blog** - Full blog with dynamic routing system
- **Contact** - Contact form and agency information

### ⚡ Technical Features

- Dynamic project pages (`/work/[id]`)
- Dynamic blog posts (`/blog/[slug]`)
- Scroll animations with Intersection Observer
- Responsive image optimization
- SEO-optimized metadata

### 🛠 Technical Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality


## 📁 Project Architecture

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

## 🔗 Links

- Live demo : https://orbit-multipage-agency-website.vercel.app/

---

Developed by Bastien Andre
