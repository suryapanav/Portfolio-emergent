# PRD — Surya Panav Portfolio

## Original Problem Statement
Build a unique personal portfolio website for "SURYA PANAV" with subtle light colours and crazy effects (touches, taps, mouse pointer follow). Header nav: About, Certificates, Achievements, Projects, Skills, Contact. Footer with quick links bar.

## User Choices
- Field: Student (general tech)
- Content: Impressive demo/placeholder content
- Contact: Both form (saves to DB) + direct email/social links
- Effects: Cursor glow + particle trails, 3D tilt cards, magnetic buttons — maximum wow

## Architecture
- Frontend: React (CRA + craco), framer-motion, lenis smooth scroll, react-parallax-tilt, react-fast-marquee, sonner toasts
- Backend: FastAPI, `/api/contact` POST + GET storing to MongoDB (`contact_messages` collection)
- Fonts: Cabinet Grotesk (headings), Manrope (body), Playfair Display (signature italic)
- Palette: off-white #F9F9F7 base, ink #1A1A1A, pastel lavender glow #D8B4E2, dark inverted footer

## Implemented (Jun 2026 — MVP)
- Custom cursor: dot + trailing glow orb + canvas particle trail; click burst effect
- Kinetic hero: masked line-by-line "SURYA PANAV" reveal, parallax orb, magnetic CTAs
- Sticky glassmorphism header with smooth-scroll nav + mobile menu
- Editorial marquee, numbered manifesto About (3 chapters + portrait)
- Projects: 3 tilt cards with glare; Skills: 12 animated badges; Certificates: 5-row editorial list; Achievements: 4 tilt cards
- Contact: working form (validated, persists to Mongo, toasts) + social links
- Dark footer: massive "Let's Talk" CTA, quick links grid, social icons, copyright bar
- Demo content in `/app/frontend/src/data.js` (easy to edit)

## Testing
- iteration_1: backend 100%, frontend 100%, zero console errors

## Backlog
- P1: Replace demo content (projects, certificates, achievements, socials, portrait) with real data
- P2: Admin view for contact messages; email format validation (EmailStr); rate limiting on contact POST
- P2: Resume download button; dark mode toggle
