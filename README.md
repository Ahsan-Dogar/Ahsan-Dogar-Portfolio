# 3D Portfolio Website

A professional front-end developer portfolio website with modern 3D animations and interactive effects.

## 🚀 Features

### ✨ Modern Tech Stack
- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** with dark theme
- **Three.js** for stunning 3D graphics
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **Lucide React** icons

### 🎨 8 Core Sections
1. **Navigation** - Sticky header with smooth scroll links
2. **Hero Section** - 3D animated background with rotating particles
3. **About** - Professional background with social links
4. **Skills** - Interactive 3D rotating skill badges
5. **Projects** - 3D card flip animations on hover
6. **Experience** - Animated timeline with work history
7. **Contact** - Form with validation and visual feedback
8. **Footer** - Complete footer with links

### 🎭 3D Animation Features

#### Three.js Elements
- Animated 3D particle field background
- Rotating 3D cubes in hero section
- Interactive 3D skill badges that rotate on hover
- Mouse-responsive 3D card effects

#### Framer Motion Animations
- Smooth scroll-reveal animations
- Fade-in and slide-in transitions
- Staggered list animations
- Hover effects on interactive elements
- Card flip animations
- Loading spinners

### 🎨 Design System

**Dark Theme Colors:**
- Background: `#0f172a`
- Secondary: `#1e293b`
- Accent Cyan: `#06b6d4`
- Accent Purple: `#a855f7`
- Text Primary: `#f1f5f9`
- Text Secondary: `#94a3b8`

**Features:**
- Fully responsive (mobile-first approach)
- Max-width container: 1200px
- Smooth transitions (300-500ms)
- Custom scrollbar styling
- Professional spacing and alignment

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
portfolio-3d/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky navigation bar
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── ThreeBackground.tsx # 3D particle background
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── SkillBadge3D.tsx    # 3D skill badge component
│   │   ├── Projects.tsx        # Projects gallery
│   │   ├── Experience.tsx      # Experience timeline
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── vite.svg                # Favicon
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Key Technologies

### Dependencies
- **react** & **react-dom**: Core React libraries
- **three**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **lucide-react**: Icon library
- **react-intersection-observer**: Scroll animations
- **tailwind-merge** & **clsx**: Utility class management

### Dev Dependencies
- **@vitejs/plugin-react**: Vite React plugin
- **typescript**: Type checking
- **tailwindcss**: Utility-first CSS
- **eslint**: Code linting
- **@typescript-eslint**: TypeScript ESLint rules

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit contact details in `Contact.tsx` and `Footer.tsx`
2. **Social Links**: Update URLs in `About.tsx` and `Footer.tsx`
3. **Skills**: Modify skill categories and items in `Skills.tsx`
4. **Projects**: Add your projects in `Projects.tsx`
5. **Experience**: Update work history in `Experience.tsx`

### Styling

All colors are defined in `tailwind.config.ts`. Update the theme to match your brand:

```typescript
colors: {
  background: '#0f172a',    // Main background
  secondary: '#1e293b',     // Secondary background
  accent: {
    cyan: '#06b6d4',        // Primary accent
    purple: '#a855f7',      // Secondary accent
  },
  // ... more colors
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## ⚡ Performance

- **Optimized Bundle**: Code-splitting for faster load times
- **Lazy Loading**: Components loaded on demand
- **Three.js Optimization**: Efficient 3D rendering
- **Image Optimization**: Compressed assets
- **Minimal Dependencies**: Only essential packages

## 🔒 Best Practices

- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Performance optimizations
- ✅ Clean code structure

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React, Three.js, and Framer Motion**
