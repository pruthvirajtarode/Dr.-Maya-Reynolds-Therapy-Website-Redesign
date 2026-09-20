# Dr. Maya Reynolds Therapy Website

## Overview
This is a premium, editorial-style therapy website designed for Dr. Maya Reynolds, a fictional clinical psychologist based in Santa Monica. It serves as a submission for the Grow My Therapy Front-End Developer Internship Practical Assignment, demonstrating accurate frontend cloning ability, strong visual judgment, and creative redesign while retaining an underlying layout structure.

## Features
- **Responsive Navigation:** Sticky desktop header with mobile hamburger menu.
- **Dynamic Homepage:** Full-width hero, Meet Maya intro, client populations, services overview, philosophy quote, approach methodology, expertise tags, our office gallery, and an accessible FAQ section.
- **Client Conversion:** Functional (frontend-only) contact form with success state.
- **Performance Optimized:** Uses Next.js Image component and modern routing.
- **Accessible:** Semantic HTML, ARIA labels, adequate contrast, and keyboard-friendly interactive elements.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (v4)
- **Language:** TypeScript
- **Icons:** Lucide React
- **Animations:** Tailwind CSS transitions and transforms

## Design Approach
The design completely reimagines the original template to create a sophisticated therapeutic visual identity. The palette features a deep forest green (`#314A43`) primary, warm sage (`#A9B8A5`) secondary, and soft terracotta (`#C98970`) accent on a warm cream background. Typography pairs the elegant `Cormorant Garamond` for headings with the clean `Manrope` for body text, creating an understated luxury feel.

## Responsive Design
The layout has been meticulously tested across breakpoints (320px, 390px, 768px, 1024px, 1440px+). Mobile layouts use intentional recomposition rather than simple vertical stacking, ensuring a premium experience on all devices.

## SEO
The application includes carefully crafted metadata, a semantic HTML structure, proper H1-H6 hierarchy, and descriptive alt text for all images to support both accessibility and local SEO performance in Santa Monica.

## Accessibility
The site implements proper heading hierarchy, focus states, `aria-expanded` attributes on the FAQ accordion, high contrast text, and keyboard-navigable menus and forms.

## Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production
```bash
npm run build
npm start
```
