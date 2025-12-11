# Orbit - Modern Agency Template

A stunning, modern agency template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Perfect for digital agencies, design studios, and creative professionals who want to showcase their work with style.

## Features

### 🎨 **Modern Design**

- Clean, minimalist aesthetic with smooth animations
- Modern visual elements and organic shapes
- Responsive design that looks great on all devices

### 📄 **Complete Page Structure**

- **Homepage** - Hero, services overview, featured work, blog
- **About** - Team, mission, values, and company story
- **Work** - Portfolio showcase with detailed project pages
- **Services** - Comprehensive service offerings
- **Blog** - Full-featured blog with dynamic routing
- **Contact** - Contact form and company information

### ⚡ **Advanced Functionality**

- Dynamic project pages (`/work/[id]`)
- Dynamic blog articles (`/blog/[slug]`)
- Intersection Observer animations
- Responsive image optimization
- SEO-optimized metadata

### 🛠 **Technical Stack**

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** configuration included

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Download the template**

   ```bash
   # Download from BloomTPL.com and extract
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
orbit-template/
├── app/                    # Next.js App Router
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

## 🎯 Customization Guide

### 1. **Update Company Information**

Edit the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Agency Name",
  description: "Your agency description",
  // ... update other fields
};
```

### 2. **Customize Projects**

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    subtitle: "Project Category",
    description: "Project description...",
    // ... update with your projects
  },
];
```

### 3. **Update Blog Content**

Edit `data/blog.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "your-article-slug",
    title: "Your Article Title",
    // ... update with your content
  },
];
```

### 4. **Customize Styling**

The template uses Tailwind CSS. Key files to modify:

- `app/globals.css` - Global styles and animations
- Individual component files for specific styling

### 5. **Update Images**

Replace placeholder images in:

- `public/` folder for static assets
- Update image URLs in data files
- Add your OpenGraph images for social sharing

## 📱 Responsive Design

The template is fully responsive with breakpoints:

- **Mobile**: 340px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔍 SEO Features

- ✅ Optimized metadata for all pages
- ✅ OpenGraph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Image alt tags and optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Works out of the box
- **Railway**: Supports Next.js
- **DigitalOcean**: App Platform compatible

## 📄 Pages Overview

### Homepage

- Hero section with call-to-action
- Services overview
- Featured work showcase
- Latest blog posts
- FAQ section

### Work Portfolio

- Project grid with filtering
- Detailed project pages with:
  - Challenge & solution
  - Results & metrics
  - Technology stack
  - Client testimonials

### Blog

- Article listing with categories
- Full article pages with:
  - Rich content formatting
  - Author information
  - Related articles
  - Social sharing ready

### About

- Team showcase
- Company mission & values
- Client testimonials
- Call-to-action

### Services

- Detailed service offerings
- Process explanation
- Pricing information
- Contact integration

### Contact

- Contact form
- Company information
- Location details
- Social links

## 🛡 TypeScript Support

Full TypeScript support with:

- Defined interfaces for all data types
- Type-safe component props
- Intellisense support
- Compile-time error checking

## 🎨 Design System

The template includes a consistent design system:

- **Typography**: Carefully chosen font sizes and weights
- **Colors**: Professional color palette
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth scroll-triggered animations

## 📞 Support

For support and questions:

- Visit [BloomTPL.com](https://bloomtpl.com)
- Check documentation
- Contact support team

## 📄 License

This template is licensed for commercial use. See license terms on BloomTPL.com.

---

**Built with ❤️ by BloomTPL**

Transform your agency's online presence with this modern, professional template.
